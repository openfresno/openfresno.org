import HeaderUnderline from '../../components/layout/HeaderUnderline'
import SidebarSection from '../../components/layout/SidebarSection'
import Steps from '../../components/ui/Steps'
import instructionData from './instructions.json'
import AppLayout from '@/components/layout/AppLayout'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light',
  dark: 'dark',
}

/**
 * Get started page.
 */
export default function GetStartedPage() {
  return (
    <AppLayout>
      <section className={`general-section-${SectionType.light}`}>
        <HeaderUnderline
          sectionType={SectionType.light}
          title="Get started"
          description="Ready to Volunteer with Open Fresno"
          large={true}
          className={'general-section-container '}
        />
        <div
          className={`general-section-container section-${SectionType.light} section-paragraph`}
        >
          We&apos;re thrilled that you&apos;re eager to join our community of
          civic-minded individuals and make a positive impact on Fresno.
          Volunteering with Open Fresno is a rewarding experience that
          allows you to use your skills for the betterment of our city.{' '}
          <span className={`paragraph-bold`}>
            Whether you&apos;re a designer, developer, or anyone else passionate
            about civic tech,
          </span>{' '}
          you&apos;ll find step-by-step instructions below to help you get
          started on your journey of civic tech and community empowerment.
        </div>
      </section>
      <SidebarSection sectionType={SectionType.dark}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            className={'split-section-content-container'}
            sectionType={SectionType.dark}
            title="Getting started"
            description="Steps to Volunteer"
          >
            Discover how you can become a valued volunteer at Open Fresno.
            Follow these simple steps to join our community of technologists,
            developers, and civic-minded individuals dedicated to driving
            positive change through technology and collaboration.
          </HeaderUnderline>
        </div>
        <Steps sectionType={SectionType.dark} steps={instructionData}></Steps>
      </SidebarSection>
    </AppLayout>
  )
}
