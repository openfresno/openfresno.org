import { defineConfig, devices } from "@playwright/test";

/**
 * Run tests in files in parallel to save time
 * Fail the build on CI if you accidentally left test.only in the source code
 * Retry on CI only to handle flaky tests
 * Use a concise reporter in CI, but HTML is great for local debugging
 * Standard Practice: Run headless in CI, headed locally
 * Collect trace for failed tests—vital for debugging CI failures
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "list" : "html",
  use: {
    baseURL: "http://localhost:3000",
    headless: !!process.env.CI,
    trace: "on-first-retry",
    video: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: process.env.CI
      ? 'npm run build && npx serve@latest out -p 3000'
      : 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
