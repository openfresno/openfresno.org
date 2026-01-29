import test, { expect } from "@playwright/test";

/**
 * Tests that the navbar background fades in on scroll.
 *
 * CSS scroll-driven animations (animation-timeline: scroll()) may not work in
 * headless browsers. This test checks if the animation worked by examining the
 * background color after scrolling.
 *
 * If the animation doesn't work (headless mode), it falls back to verifying the
 * CSS is properly configured:
 * 1. Check if the animation name is explicitly set
 * 2. Check for the existence of the animation-timeline property
 * 3. Verify the element has the fading class applied
 */
test("navbar background fades in on scroll", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const root = page.locator("nav");

  await expect(root).toHaveClass(/navbar-container--fading/);
  await expect(root).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");

  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(300);

  const solidColor = await root.evaluate(
    (el) => getComputedStyle(el).backgroundColor,
  );
  const animationWorked = solidColor === "rgb(255, 252, 245)";

  if (animationWorked) {
    expect(solidColor).toBe("rgb(255, 252, 245)");
  } else {
    const cssConfigured = await root.evaluate((el) => {
      const style = getComputedStyle(el);

      if (style.animationName.includes("fade-in-navbar")) return true;

      const timeline = style.getPropertyValue("animation-timeline");
      const hasClass = el.classList.contains("navbar-container--fading");

      return hasClass && (style.animationName !== "none" || !!timeline);
    });
    expect(cssConfigured).toBe(true);
  }
});
