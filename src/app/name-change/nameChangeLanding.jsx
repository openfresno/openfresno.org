import Link from "next/link";

/**
 * Name change landing section.
 * @returns {JSX.Element}
 */
export default function NameChangeSectionLanding({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-container heading-underline`}>
        <h1 className={`general-heading-main`}>Introducing</h1>
        <h2 className={`contact-sub-heading-main`}>Open Fresno!</h2>
      </div>

      <div className={`general-section-container`}>
        <p className={`paragraph`}>
          We&#39;re thrilled to announce that{" "}
          <span className={`paragraph-bold`}>
            Code for Fresno is now Open Fresno!
          </span>{" "}
          While our name has changed, we&#39;re still the same passionate,
          volunteer-driven community of technologists, developers, designers,
          and civic-minded individuals dedicated to improving public services
          and solving civic challenges in the Fresno area.
        </p>
        <br />
        <p className={`paragraph-large`}>
          This rebrand comes in response to the{" "}
          <Link href="https://codeforamerica.org/news/reflections-on-the-brigade-networks-next-chapter/">
            end of Code for America&apos;s Brigade program
          </Link>
          , but it&apos;s also a reflection of who we&apos;ve become.{" "}
          <span className={`paragraph-bold`}>Open Fresno</span> better captures
          the incredible diversity of talents within our community. Yes, coding
          is still a big part of what we do, but our impact stretches beyond
          just writing lines of code— it&apos;s about collaboration, innovation,
          and using technology in all its forms to create real change. While our
          name has changed, we&apos;re still the same passionate,
          volunteer-driven community of technologists, developers, designers,
          and civic-minded individuals dedicated to improving public services
          and solving civic challenges in the Fresno area.
        </p>
        <br />
        <p className={`paragraph-large`}>
          From data analysis to design thinking, coding to project management,
          our volunteers bring a wide range of skills to the table. That&apos;s
          what makes us special, and that&apos;s why we believe this new name
          truly represents the heart of our mission. We&apos;re more excited
          than ever to continue this journey and invite you to be part of it!
          Let&apos;s keep making Fresno better—together, under our new banner:{" "}
          <span className={`paragraph-bold`}>Open Fresno</span>! Get started{" "}
          <Link href="https://openfresno.org/get-started">here</Link>.
        </p>
        <br />
      </div>
    </section>
  );
}
