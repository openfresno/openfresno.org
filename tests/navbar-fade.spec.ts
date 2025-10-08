import test, { expect } from "@playwright/test"

test("navbar background fades in on scroll", async ({ page }) => {
	// Go to your app
	await page.goto("http://localhost:3000") // adjust as needed

	const root = page.locator("nav")

	// 1. At top: fully transparent
	await expect(root).toHaveCSS("background-color", "rgba(0, 0, 0, 0)")
	// Adjust if your CSS uses transparent shorthand

	// 2. Scroll ~1/3 page: expect semi-transparent
	await page.evaluate(() => window.scrollTo(0, window.innerHeight / 3))
	await page.waitForTimeout(300) // allow transition
	const midColor = await root.evaluate(el => getComputedStyle(el).backgroundColor)
	expect(midColor).toBe("rgba(255, 252, 245, 0.463)")

	// 3. Scroll ~1 page: expect fully solid
	await page.evaluate(() => window.scrollTo(0, window.innerHeight))
	await page.waitForTimeout(300)
	const solidColor = await root.evaluate(el => getComputedStyle(el).backgroundColor)
	expect(solidColor).toBe("rgb(255, 252, 245)") // fully opaque
})


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
