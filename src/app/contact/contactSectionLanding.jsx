import { SectionType } from "./contact";
import GeneralSection from "@/components/ui/GeneralSection";
/**
 * contact landing section.
 * @returns {JSX.Element}
 */
export default function ContactSectionLanding({ sectionType }) {
  return (
    <GeneralSection
      heading="Contact Us"
      subHeading={
        <>
          Contact<br></br> Open Fresno
        </>
      }
    >
      Get in touch with us through our contact page for questions, ideas, or
      just to say hello.{" "}
      <span className={`paragraph-bold`}>
        We welcome inquiries about volunteering, projects, collaborations, or
        anything related to our mission of using technology for positive change.
      </span>{" "}
      Your feedback and engagement are crucial to our progress. We&apos;re eager
      to hear from you and build a better future for our community!
    </GeneralSection>
  );
}
