import danFey from "@/../public/img/about/dan_fey.jpg";
import maryFeyNorris from "@/../public/img/about/mary_fey_norris.jpg";
import nateBass from "@/../public/img/about/nate_bass.jpg";
import AboutSectionTeamMember from "@/app/about/components/aboutSectionTeamMember";
import { SectionType } from "@/utility/constants/theme";

/**
 * About the team section.
 * @returns {JSX.Element}
 */
export default function AboutSectionTeam({ sectionType = SectionType.light }) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className={`page-container`}>
        <div className={`team-paragraph-container md:w-[60%]`}>
          <div className="mb-6">
            <h1
              className={`heading-main app-color--${SectionType.invert(sectionType)}`}
            >
              OUR TEAM
            </h1>
            <h2 className="sub-heading-main">
              Meet the Heartbeat of Open Fresno
            </h2>
          </div>
          <p className={`team-paragraph mb-16`}>
            Open Fresno is powered by a volunteer Core Team that orchestrates
            events, fosters strategic partnerships, and ensures seamless
            communication among cross-functional project teams. Our dedicated
            team members bring diverse skills and expertise to the table, all
            with a shared passion for civic tech and community empowerment.
          </p>
        </div>

        <div className={`team-members-container`}>
          <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}
          >
            <AboutSectionTeamMember
              src={maryFeyNorris}
              name="Mary Fey Norris"
              title="Executive Director, Open Fresno"
            />
            <AboutSectionTeamMember
              src={danFey}
              name="Dan Fey"
              title="Executive Director, Open Fresno"
            />
            <AboutSectionTeamMember
              src={nateBass}
              name="Nate Bass"
              title="Senior Director, Product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
