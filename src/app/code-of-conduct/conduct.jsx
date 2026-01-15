import ConductSectionBullets from "./conductSectionBullets";
import ConductSectionEmail from "./conductSectionEmail";
import ConductSectionLanding from "./conductSectionLanding";
import ConductSectionPolicies from "./conductSectionPolicies";
import { SectionType } from "@/utility/constants/theme";

export default function Conduct() {
  return (
    <div className="">
      <ConductSectionLanding sectionType={SectionType.light} />
      <ConductSectionBullets sectionType={SectionType.light} />
      <ConductSectionPolicies sectionType={SectionType.dark} />
      <ConductSectionEmail sectionType={SectionType.gray} />
    </div>
  );
}
