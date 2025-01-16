/**
 * Home page default section 2.
 * @returns {JSX.Element}
 */
export default function HomeSectionDefault2({sectionType}) {
  return (
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-${sectionType}-container home-section-heading-underline`}>
        <h1 className={`general-heading-section`}>Who we are</h1>
        <h2 className={`sub-heading`}>
          Building a Brighter Fresno Through Innovation and Technology
        </h2>
      </div>

      <div className={`general-section-${sectionType}-container`}>
        <p className={`home-section-paragraph`}>
          Open Fresno is
          <span className={`paragraph-bold`}> a community of technologists, developers, designers, and civic-minded
            individuals </span>
          who come together to use technology and open data to address civic
          challenges and improve public services in the Fresno area.
          <br/><br/>
          We are passionate about fostering civic innovation and creating positive
          impact through technology and community engagement.
        </p>
      </div>
    </section>
  )
}



