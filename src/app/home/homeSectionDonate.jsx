import Button from "@/components/Buttons";

/**
 * Home donate section.
 * @returns {JSX.Element}
 */
export default function HomeSectionDonate({sectionType}) {
  return (
    <section className={`general-section-${sectionType} donate-section`}>
      <div
        className={`general-section-${sectionType}-container home-section-heading-underline donate-section-underline md:container md:mx-auto`}>
        <h1 className={`heading-large-section-sub`}>Help Support Open Fresno</h1>
      </div>
      <div className={`donate-section-paragraph-container`}>
        <p className={`home-section-${sectionType}-paragraph`}>
          <span>Your support, whether through donations or volunteering,</span> is instrumental in driving positive
          change with Open Fresno.<br/><br/><span>Donations fuel our technology</span>-driven initiatives that
          address civic challenges, enhance public services, and amplify community voices.<br/><br/><span> When you volunteer, you actively contribute your skills </span>-
          be it coding, designing, or any other expertise - to create tangible solutions that make a real
          impact.<br/><br/>Together, we shape a better future for our city, amplifying voices, enhancing services, and
          driving
          innovation.<span> Join us today and be a catalyst for lasting, community-driven transformation!</span>
        </p>
        <div className={`home-buttons-group`}>
          <Button href="/get-started" className={`btn btn-alt-gold`} textContent="Get Started" />
          <Button href="/donate" className={`btn btn-gold`} textContent="Donate" />
        </div>
      </div>
    </section>
  )
}
