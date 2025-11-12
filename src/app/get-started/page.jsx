import HeaderUnderline from "../../components/ui/HeaderUnderline";
import SidebarSection from "../../components/ui/SidebarSection";
import Steps from "../../components/ui/instructions/Steps";
import instructionData from "./instructions.jsx";
import LayoutE53 from "@/components/layout/LayoutE53";
import { SectionType } from "@/utility/constants/theme";
import GeneralSection from "@/components/ui/GeneralSection";

/**
 * Get started page.
 */
export default function GetStartedPage() {
  return (
    <LayoutE53>
      <GeneralSection
        sectionType={SectionType.light}
        heading="Get started"
        subHeading={<>Ready to Volunteer with<br />Open Fresno</>}
      >
        We&apos;re thrilled that you&apos;re eager to join our community of
        civic-minded individuals and make a positive impact in Central
        California. Volunteering with Open Fresno is a rewarding experience that
        allows you to use your skills for the betterment of our city.{" "}
        <span className={`paragraph-bold`}>
          Whether you&apos;re a designer, developer, or anyone else passionate
          about civic tech,
        </span>{" "}
        you&apos;ll find step-by-step instructions below to help you get started
        on your journey of civic tech and community empowerment.
      </GeneralSection>
      <hr className="mx-auto mb-12 lg:mb-24 max-w-[calc(var(--screen-xxl)_+_80px)] border-0 h-px bg-(--neutral-400)" />
      <SidebarSection sectionType={SectionType.light}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            className={"split-section-content-container"}
            sectionType={SectionType.light}
            title="Getting started"
            description="Steps to Volunteer"
          >
            Discover how you can become a valued volunteer at Open Fresno.
            Follow these simple steps to join our community of technologists,
            developers, and civic-minded individuals dedicated to driving
            positive change through technology and collaboration.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.light} steps={instructionData}></Steps>
      </SidebarSection>
    </LayoutE53>
  );
}
