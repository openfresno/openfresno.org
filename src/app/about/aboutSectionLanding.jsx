/**
 * About landing section.
 * @returns {JSX.Element}
 */
export default function AboutSectionLanding({ sectionType }) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-container heading-underline`}>
        <h1 className={`general-heading-main`}>About Us</h1>
        <h2 className={`about-sub-heading-main`}>
          Connecting Civic-Minded Technologists
        </h2>
      </div>

      <div className={`general-section-container`}>
        <p className={`paragraph-large`}>
          <span className={`paragraph-bold`}>
            We are a passionate and diverse group of technologists, developers,
            designers, and civic-minded individuals united by a common goal:
          </span>{" "}
          leveraging technology and open data to address civic challenges and
          enhance public services in the Fresno area. Our community thrives on
          collaboration, innovation, and a shared commitment to driving positive
          change.
        </p>
      </div>
    </section>
  );
}
