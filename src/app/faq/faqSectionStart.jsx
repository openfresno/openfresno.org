import GeneralSection from "@/components/ui/GeneralSection";

/**
 * Frequently-asked questions start section.
 * @returns {JSX.Element}
 */
export default function FaqSectionStart({ sectionType }) {
  return (
    <GeneralSection
      heading="FAQ"
      subHeading="Frequently Asked Questions"
      sectionType={sectionType}
    >
      Welcome to our FAQ page, designed to provide you with quick and
      informative answers to commonly asked questions about Open Fresno. Whether
      you&apos;re curious about volunteering, projects, collaborations, or more,
      we&apos;ve compiled a list of queries to guide you through our mission,
      initiatives, and how you can get involved. Browse through the questions to
      find the information you need and embark on a journey of civic engagement,
      innovation, and community empowerment.
    </GeneralSection>
  );
}
