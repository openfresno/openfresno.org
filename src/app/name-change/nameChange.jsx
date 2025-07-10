"use client";
import NameChangeSectionLanding from "./nameChangeLanding";

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
export default function NameChange() {
  return (
    <div className="">
      <NameChangeSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
