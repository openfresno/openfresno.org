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
      Get in touch with us through our contact page for questions, ideas, or
      just to say hello. <span className={"font-semibold"}>We welcome inquiries about volunteering, projects,
      collaborations, or anything related to our mission of using technology for
      positive change.</span> Your feedback and engagement are crucial to our progress.
      We're eager to hear from you and build a better future for our community!
    </GeneralSection>
  );
}
