"use client";
import NameChangeSectionLanding from "./nameChangeLanding";
import { SectionType } from "@/utility/constants/theme"

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
