/**
 * Frequently-asked questions start section.
 * @returns {JSX.Element}
 */
export default function FaqSectionStart({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-container`}>
        <h1 className="general-heading-main">FAQ</h1>
        <h2 className="sub-heading-main faq-heading-main-sub">
          Frequently Asked Questions
        </h2>
      </div>

      <div className={`general-section-container`}>
        <p className="paragraph">
          Welcome to our FAQ page, designed to provide you with quick and
          informative answers to commonly asked questions about Open Fresno.
          Whether you&apos;re curious about volunteering, projects,
          collaborations, or more, we&apos;ve compiled a list of queries to
          guide you through our mission, initiatives, and how you can get
          involved. Browse through the questions to find the information you
          need and embark on a journey of civic engagement, innovation, and
          community empowerment.
        </p>
      </div>
    </section>
  );
}
