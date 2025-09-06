import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AppFooter from "../../src/components/layout/footer/AppFooter";

render(<AppFooter />);

/* 
Renders the AppFooter component and checks if all link elements are rendering
*/

test("AppFooter", () => {
  expect(
    screen.getByRole("heading", { level: 2, name: /Get Involved/i }),
  ).toBeDefined();
});

test("Find meetup Link", () => {
  expect(screen.getByRole("link", { name: /meetup/i })).toBeDefined();
});

test("Find projects Link", () => {
  expect(screen.getByRole("link", { name: /projects/i })).toBeDefined();
});

test("Find faqs Link", () => {
  expect(screen.getByRole("link", { name: /faqs/i })).toBeDefined();
});
