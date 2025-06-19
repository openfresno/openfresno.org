import HomeSectionDonate from "./homeSectionDonate";
import HomeSectionProjects from "./homeSectionProjects";
import HomeSectionDefault from "./homeSectionDefault";
import HomeSectionServices from "./homeSectionServices";
import HomeSectionDefault2 from "./homeSectionDefault2";
import HomeSectionAboutImage from "./homeSectionAboutImage";
import HomeSectionLandingImage from "./homeSectionLandingImage";
import HomeSectionPartnership from "./homeSectionPartnerships";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
  grey: "grey",
};

/**
 * Home page. Displays light or dark themes.
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <div className="">
      <HomeSectionLandingImage sectionType={SectionType.dark} />
      <HomeSectionDefault2 sectionType={SectionType.light} />
      <HomeSectionAboutImage sectionType={SectionType.dark} />
      <HomeSectionServices sectionType={SectionType.dark} />
      <HomeSectionDefault sectionType={SectionType.light} />
      <HomeSectionProjects sectionType={SectionType.dark} />
      <HomeSectionPartnership sectionType={SectionType.grey} />
      <HomeSectionDonate sectionType={SectionType.dark} />
    </div>
  );
}
