import Link from "next/link";

/**
 * About opportunities section.
 * @returns {JSX.Element}
 */
export default function AboutSectionOpportunities({sectionType}) {
  return (
    <section className={`general-section-${sectionType} about-join-container`}>
      <div className={`opportunities-container`}>
        <div className={`opportunities-intro-container`}>
          <div
            className={`about-${sectionType}-heading-container about-heading-underline about-underline-alt`}
          >
            <h1 className={`general-heading-section general-heading-section-alt`}>opportunities</h1>
            <h2 className={`sub-heading`}>
              Join Our Team
            </h2>
          </div>
          <p className={`opportunities-intro-paragraph`}>
            <span className={`paragraph-bold`}>
              Are you passionate about civic tech leadership?
            </span> Open Fresno invites you to join our Core Team, organizing events, fostering partnerships,
            and driving community impact.
            Shape Fresno&apos;s civic innovation future – connect with us and explore joining our dedicated team.
          </p>
        </div>
        <div className={`opportunities-get-started`}>
          <img src="/img/about/rectangle.png" alt="rectangle"/>
          <p className={`opportunities-anchor`}>
            Not a volunteer yet?
            <br/>
            <Link href="/get-started">Get Started</Link>
          </p>
        </div>
      </div>

      <h3 className={`positions-heading`}>Open Positions within Our Team</h3>

      <div className={`positions-grid`}>
        <div className={`positions-container`}>
          <div className={`position-header`}>
            Community
          </div>
          <ul className={`positions-list`}>
            <li className={`position`}>Director of Fundraising</li>
            <li className={`position`}>Director of Community Engagement</li>
            <li className={`position`}>Director of Recruitment</li>
          </ul>
        </div>

        <div className={`positions-container`}>
          <div className={`position-header`}>
            Communications
          </div>
          <ul className={`positions-list`}>
            <li className={`position`}>Director of Product Management</li>
            <li className={`position`}>Director of Marketing & Engagement</li>
            <li className={`position`}>Director of Event Management</li>
          </ul>
        </div>
      </div>

      <div className={`positions-grid`}>
        <div className={`positions-container`}>
          <div className={`position-header`}>
            Product
          </div>
          <ul className={`positions-list`}>
            <li className={`position`}><s>Director of Frontend Engineering</s></li>
            <li className={`position`}>Director of Design & Usability</li>
          </ul>
        </div>

        <div className={`positions-container`}>
          <div className={`position-header`}>
            Platform
          </div>
          <ul className={`positions-list`}>
            <li className={`position`}>Director of Backend Engineering</li>
            <li className={`position`}>Director of Data Science</li>
          </ul>
        </div>
      </div>

      <div className={`get-started-bottom`}>
        <img src="/img/about/rectangle.png" alt="rectangle"/>
        <p className={`opportunities-anchor-bottom`}>
          Not a volunteer yet?
          <br/>
          <Link href="/get-started">Get Started</Link>
        </p>
      </div>
    </section>
  )
}