"use client";
import DonateSectionLanding from "./donateSectionLanding";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
};

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function Donate() {
  return (
    <div className="">
      <DonateSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
