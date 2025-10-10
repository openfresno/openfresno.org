import ConductSectionLanding from "./conductSectionLanding";
import ConductSectionBullets from "./conductSectionBullets";
import ConductSectionPolicies from "./conductSectionPolicies";
import ConductSectionEmail from "./conductSectionEmail";
import { SectionType } from "@/utility/constants/theme"

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
