import HeaderUnderline from "../../components/ui/HeaderUnderline";
import Steps from "../../components/ui/instructions/Steps";
import instructionData from "./instructions.jsx";
import LayoutE53 from "@/components/layout/LayoutE53";
import GeneralSection from "@/components/ui/GeneralSection";
import SidebarSection from "@/components/ui/SidebarSection";
import { SectionType } from "@/utility/constants/theme";

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function PitchPage() {
  return (
    <LayoutE53>
      <GeneralSection
        heading="Pitch a project"
        subHeading={
          <>
            Contribute
            <br />
            Your Project Idea
          </>
        }
      >
        Share your innovative ideas and collaborate with our community to turn
        them into reality. Pitch your project to make a positive impact on
        Fresno using technology and civic engagement.
      </GeneralSection>
      <hr className="mx-auto mb-12 h-px max-w-[calc(var(--screen-xxl)+80px)] border-0 bg-(--neutral-400) lg:mb-24" />
      <SidebarSection sectionType={SectionType.light}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            sectionType={SectionType.light}
            title="Pitching a project"
            description="How to Start a New Project"
          >
            Ready to turn your civic tech idea into reality? Follow these simple
            steps to pitch your project idea to Open Fresno.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.light} steps={instructionData}></Steps>
      </SidebarSection>
    </LayoutE53>
  );
}
