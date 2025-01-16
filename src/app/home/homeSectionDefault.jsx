import Link from "next/link";

/**
 * Home default section.
 * @returns {JSX.Element}
 */
export default function HomeSectionDefault({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div
        className={`general-section-${sectionType}-container home-section-heading-underline`}
      >
        <h1 className={`general-heading-section`}>Why volunteer</h1>
        <h2 className={`sub-heading`}>
          Empower Change with <br />
          Open Fresno
        </h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className={`home-section-paragraph`}>
          <span className={`paragraph-bold`}>Ready to make a difference?</span>
          Join us at Open Fresno and use your skills to drive positive
          change through technology and collaboration.
          <span className={`paragraph-bold`}>
            {" "}
            Whether you&apos;re a designer, developer, or anyone eager to volunteer,
            together we&apos;re enhancing community services, amplifying voices, and
            giving you the opportunity to improve your resume and portfolio.
          </span>{" "}
          It&apos;s a journey of innovation and empowerment waiting for you. Your
          impact starts{" "}
          <Link href="/get-started" className={`home-section-paragraph-anchor`}>
            here
          </Link>
          !
        </p>
      </div>
    </section>
  );
}
