import test, { expect } from "@playwright/test"

/**
 * Scroll ~1/3 page (expect semi-transparent) and then scroll down the full page (expect fully solid).
 */
test("navbar background fades in on scroll", async ({ page }) => {
	await page.goto("http://localhost:3000")
	const root = page.locator("nav")
	await expect(root).toHaveCSS("background-color", "rgba(0, 0, 0, 0)")
	await page.evaluate(() => window.scrollTo(0, window.innerHeight / 3))
	await page.waitForTimeout(300)
	const midColor = await root.evaluate(el => getComputedStyle(el).backgroundColor)
	expect(midColor).toBe("rgba(255, 252, 245, 0.463)")
	await page.evaluate(() => window.scrollTo(0, window.innerHeight))
	await page.waitForTimeout(300)
	const solidColor = await root.evaluate(el => getComputedStyle(el).backgroundColor)
	expect(solidColor).toBe("rgb(255, 252, 245)")
})
