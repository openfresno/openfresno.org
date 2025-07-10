import AboutSectionLanding from "./aboutSectionLanding";
import AboutSectionCollage from "./aboutSectionCollage";
import AboutSectionMission from "./aboutSectionMission";
import AboutSectionTeam from "./aboutSectionTeam";
import AboutSectionOpportunities from "./aboutSectionOpportunities";

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
