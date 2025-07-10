import ConductSectionLanding from "./conductSectionLanding";
import ConductSectionBullets from "./conductSectionBullets";
import ConductSectionPolicies from "./conductSectionPolicies";
import ConductSectionEmail from "./conductSectionEmail";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
  grey: "grey",
};

export default function Conduct() {
  return (
    <div className="">
      <ConductSectionLanding sectionType={SectionType.light} />
      <ConductSectionBullets sectionType={SectionType.dark} />
      <ConductSectionPolicies sectionType={SectionType.light} />
      <ConductSectionEmail sectionType={SectionType.grey} />
    </div>
  );
}
