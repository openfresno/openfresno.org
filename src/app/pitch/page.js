import LandingSection from "@/components/ui/LandingSection";
import HeaderUnderline from "@/components/content/HeaderUnderline";
import instructionData from "./instructions.json";
import SidebarSection from "@/components/ui/SidebarSection";
import Steps from "@/components/content/Steps";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light',
  dark: 'dark',
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function PitchPage() {
  return (
    <div className="">
      <LandingSection sectionType={SectionType.light}>
        <HeaderUnderline sectionType={SectionType.light} title="Pitch a project"
                         description="Contribute Your Project Idea"
                         large={true} className={'split-section-content-container'}/>
        <div className={`section-${SectionType.light} landing-section-paragraph`}>
          Share your innovative ideas and collaborate with our community to turn them into reality.
          Pitch your project to make a positive impact on Fresno using technology and civic engagement.
        </div>
      </LandingSection>
      <SidebarSection sectionType={SectionType.dark}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline sectionType={SectionType.dark}
                           title="Pitching a project" description="How to Start a New Project">
            Ready to turn your civic tech idea into reality? Follow these simple steps to pitch your project idea to
            Open Fresno.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.dark} steps={instructionData}></Steps>
      </SidebarSection>
    </div>
  )
}
