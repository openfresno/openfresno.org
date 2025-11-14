import GeneralSection from "@/components/ui/GeneralSection";

/**
 * About landing section.
 * @returns {JSX.Element}
 */
export default function AboutSectionLanding({ sectionType }) {
  return (
    <GeneralSection
      sectionType={sectionType}
      heading="About Us"
      subHeading="Connecting Civic-Minded Technologists"
    >
      <span className={"font-semibold"}>
        We are a passionate and diverse group of technologists, developers,
        designers, and civic-minded individuals united by a common goal:
      </span>{" "}
      leveraging technology and open data to address civic challenges and
      enhance public services in the Fresno area. Our community thrives on
      collaboration, innovation, and a shared commitment to driving positive
      change.
    </GeneralSection>
  );
}
