"use client";
import ContactSectionLanding from "./contactSectionLanding";
import ContactSectionMission from "./contactSectionMission";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function Contact() {
  return (
    <div className="">
      <ContactSectionLanding sectionType={SectionType.light} />
      <ContactSectionMission sectionType={SectionType.dark} />
    </div>
  );
}
