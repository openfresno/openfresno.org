/**
 * Home about image section.
 * @returns {JSX.Element}
 */
export default function HomeSectionAboutImage({sectionType}) {
  return (
    <section className={`general-section-${sectionType} home-section-${sectionType}-flex home-about-image`}>
      <div className={`home-about-container`}>
        <div
          className={`general-section-${sectionType}-container home-section-heading-underline underline-alt`}>
          <h1 className={`general-heading-section general-heading-section-alt`}>What we do</h1>
          <h2 className={`sub-heading`}>
            Building a Better Future <br/>
            in Fresno
          </h2>
        </div>
        <p className={`home-section-paragraph`}>
          Our mission is done by uniting programmers, designers, and other talents,
          we transform ideas into tangible solutions that impact lives throughout
          the Fresno area. Together, we drive innovation forward, building a
          future where open source technology empowers citizens and uplifts our
          city. <span className={`paragraph-bold`}>
            Join us in driving innovation through open-source tech and empowering our community!
          </span>
        </p>
      </div>
      <img
        src="/img/open_data_day_curved.png"
        alt="Open Data Day"
        className={`home-section-action-image`}/>
    </section>
  )
}