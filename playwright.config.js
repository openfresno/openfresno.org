import { defineConfig, devices } from "@playwright/test";

/**
 * Tests are not co-dependent so we run all tests in parallel. Trace and video recordings are captured on the first retry. Ignore stdout to keep CI logs clean.
 *
 * CI/CD
 * - GitHub reporter for clickable annotations and concise list reporter.
 * - Retry once on failure.
 * - Run headless.
 * - Serve the pre-built ./out directory (the workflow builds before running tests).
 *
 * Local debugging
 * - Use HTML reporter so that it opens your browser when there is an error.
 * - Run headed locally, meaning it opens the browser.
 *
 * Considerations
 * - Use fullyParallel: true if we get more tests.
 */
export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "html",
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
    command: process.env.CI ? "npx serve@latest out -p 3000" : "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
    timeout: 60_000,
  },
});
