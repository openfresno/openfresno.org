import ImageSection from "@/components/ui/ImageSection";
import { SectionType } from "@/utility/constants/theme";

/**
 * About mission section.
 * @returns {JSX.Element}
 */
export default function AboutSectionMission({ sectionType }) {
  return (
    <ImageSection
      heading="OUR MISSION"
      subheading="Driving Civic Innovation through Technology"
      src="/img/open_data_day_curved.png"
      sectionType={SectionType.dark}
      >
      At Open Fresno, we roll up our sleeves and dive into a wide range of
      technology-driven projects. From open data initiatives and government
      service enhancements to community engagement platforms and education
      campaigns,{" "}
      <span className={`paragraph-bold`}>
            we&apos;re dedicated to creating innovative solutions that empower
            citizens and make our city a better place to live.
          </span>
    </ImageSection>
  );
}
