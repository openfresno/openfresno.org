import Link from "next/link";

/**
 * Home Partnerships Section
 * @returns {JSX.Element}
 */

export default function HomeSectionPartnership({ sectionType }) {
  return (
    <section className={`general-section-${sectionType} partnership-section`}>
      <div className={"heading-underline-partnership"}>
        <h1 className={`heading-large-section-sub`}>
          Our Collaborations and Partnerships
        </h1>
      </div>
      <p className={`home-numbered-paragraph-partnerships`}>
        We have had the privilege of working with a diverse array of companies,
        organizations, and government entities, some of which are showcased
        below.
      </p>
      <div className={`home-projects-section-partnerships`}>
        <Link
          href={`https://www.cityofsacramento.gov/`}
          style={{ paddingRight: 26 }}
        >
          <img
            src="/img/partnership-icons/cityofsacramento.png"
            width="300"
            height="73"
            color="white"
            alt="cityofsacramento"
          />
        </Link>
        <Link href={`https://www.dbaarts.org/`}>
          <img
            src="/img/partnership-icons/logo_dba_02.png"
            width="137"
            height="137"
            alt="DBA"
          />
        </Link>
        <Link href={`https://codeforamerica.org/`}>
          <img
            src="/img/partnership-icons/logo_openfresno_white_transparent_02.png"
            width="233"
            height="112"
            alt="DBA"
          />
        </Link>
      </div>
    </section>
  );
}
