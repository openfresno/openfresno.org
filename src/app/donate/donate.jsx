"use client";
import DonateSectionLanding from "./donateSectionLanding";
import { SectionType } from "@/utility/constants/theme"

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
