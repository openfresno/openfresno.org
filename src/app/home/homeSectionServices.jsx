import Button from "@/components/Buttons";

/**
 * Home services section.
 * @returns {JSX.Element}
 */
export default function HomeSectionServices({sectionType}) {
  return (
    <section className={`general-section-${sectionType} home-services-container`}>
      <div
        className={`general-section-${sectionType}-container home-section-heading-underline underline-alt`}>
        <h1 className={`general-heading-section general-heading-section-alt`}>Our services</h1>
        <h2 className={`sub-heading`}>Explore Our Engagement Options</h2>
      </div>
      <div className={`home-numbered-grid`}>
        <div className={`home-numbered-container`}>
          <img src="/img/1.png" alt="Open Data Day"/>
          <h2 className={`home-numbered-header`}>Engage with Our Community</h2>
          <p className={`home-numbered-paragraph`}>
            Connect with like-minded individuals, share ideas, and collaborate on
            projects at our meetups. Join us to be a part of a vibrant community
            dedicated to positive change through technology.
          </p>
          <Button className={`btn btn-alt-gold`} href="https://www.meetup.com/code4sac/" target="_blank" textContent="Visit Meetup" />
        </div>

        <div className={`home-numbered-container`}>
          <img src="/img/2.png" alt="Open Data Day"/>
          <h2 className={`home-numbered-header`}>Drive Innovation with Projects</h2>
          <p className={`home-numbered-paragraph`}>
            Discover how you can contribute your skills to projects that address
            real challenges and enhance our city. Be part of a dynamic team working
            on solutions that make a difference.
          </p>
          <Button className={`btn btn-alt-gold`} href="/projects" textContent="See Our Projects" />
        </div>

        <div className={`home-numbered-container`}>
          <img src="/img/3.png" alt="Open Data Day"/>
          <h2 className={`home-numbered-header`}>Pitch Your Vision</h2>
          <p className={`home-numbered-paragraph`}>
            Have a project idea that can benefit the community? Pitch it to us and
            join forces with our community of innovators to bring your vision to
            life, driving positive change in Fresno.
          </p>
          <Button className={`btn btn-alt-gold`} href="/pitch" textContent="Pitch a Project" />
        </div>
      </div>
    </section>
  )
}
