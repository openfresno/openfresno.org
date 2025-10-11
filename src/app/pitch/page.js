import HeaderUnderline from "../../components/ui/HeaderUnderline";
import instructionData from "./instructions.json";
import SidebarSection from "../../components/ui/SidebarSection";
import Steps from "../../components/ui/instructions/Steps";
import LayoutE53 from "@/components/layout/LayoutE53";
import { SectionType } from "@/utility/constants/theme"

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function PitchPage() {
  return (
    <LayoutE53>
      <section className={`general-section-${SectionType.light}`}>
        <HeaderUnderline
          sectionType={SectionType.light}
          title="Pitch a project"
          description="Contribute Your Project Idea"
          large={true}
          className={"general-section-container"}
        />
        <div className={`general-section-container paragraph`}>
          Share your innovative ideas and collaborate with our community to turn
          them into reality. Pitch your project to make a positive impact on
          Fresno using technology and civic engagement.
        </div>
      </section>
      <SidebarSection sectionType={SectionType.dark}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            sectionType={SectionType.dark}
            title="Pitching a project"
            description="How to Start a New Project"
          >
            Ready to turn your civic tech idea into reality? Follow these simple
            steps to pitch your project idea to Open Fresno.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.dark} steps={instructionData}></Steps>
      </SidebarSection>
    </LayoutE53>
  );
}
