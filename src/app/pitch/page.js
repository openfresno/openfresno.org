import HeaderUnderline from "../../components/ui/HeaderUnderline";
import instructionData from "./instructions.json";
import SidebarSection from "@/components/ui/SidebarSection";
import Steps from "../../components/ui/instructions/Steps";
import LayoutE53 from "@/components/layout/LayoutE53";
import { SectionType } from "@/utility/constants/theme"
import GeneralSection from "@/components/ui/GeneralSection";

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function PitchPage() {
  return (
    <LayoutE53>
      <GeneralSection
        heading="Pitch a project"
        subHeading="Contribute Your Project Idea"
      >
        Share your innovative ideas and collaborate with our community to turn
        them into reality. Pitch your project to make a positive impact on
        Fresno using technology and civic engagement.
      </GeneralSection>
      <hr className="mx-auto mb-12 lg:mb-24 max-w-[calc(var(--screen-xxl)_+_80px)] border-0 h-px bg-(--neutral-400)"/>
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
