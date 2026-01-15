import AboutSectionCollage from "./aboutSectionCollage";
import AboutSectionLanding from "./aboutSectionLanding";
import AboutSectionMission from "./aboutSectionMission";
import AboutSectionOpportunities from "./aboutSectionOpportunities";
import AboutSectionTeam from "./aboutSectionTeam";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function About() {
  return (
    <div className="">
      <AboutSectionLanding sectionType={SectionType.light} />
      <AboutSectionCollage sectionType={SectionType.light} />
      <AboutSectionMission sectionType={SectionType.dark} />
      <AboutSectionTeam sectionType={SectionType.light} />
      <AboutSectionOpportunities sectionType={SectionType.dark} />
    </div>
  );
}
