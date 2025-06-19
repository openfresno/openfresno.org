import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AppNavbar from "../../src/components/layout/AppNavbar";

render(<AppNavbar />);

/* 
Renders the AppNavbar component and checks if all link elements are rendering
*/

test("Find Get Involved Text", () => {
  expect(screen.getByText(/Get Involved/i)).toBeDefined();
});

test("Find home Link", () => {
  expect(screen.getByRole("link", { name: /home/i })).toBeDefined();
});

test("Find about Link", () => {
  expect(screen.getByRole("link", { name: /about/i })).toBeDefined();
});

test("Find contact Link", () => {
  expect(screen.getByRole("link", { name: /contact/i })).toBeDefined();
});

test("Find donate Link", () => {
  expect(screen.getByRole("link", { name: /donate/i })).toBeDefined();
});
