'use client'
import { Slider } from '@/components/ui';
import Button from '@/components/Buttons';


/**
 * Home projects section.
 * @returns {JSX.Element}
 */
export default function HomeSectionProjects({sectionType}) {

  return (
    <section className={`general-section-${sectionType} home-projects-section`}>
      <div className={`home-projects-info-container`}>
        <div
          className={`home-section-${sectionType.dark}-container home-section-heading-underline underline-alt`}>
          <h1 className={`general-heading-section general-heading-section-alt`}>our projects</h1>
          <h2 className={`heading-large-section-sub`}>Driving Innovation Through Tech and Collaboration</h2>
        </div>
        <p className={`home-section-paragraph`}>
          We tackle tech projects addressing civic issues, enhancing services in Fresno. From open data initiatives
          to government services and community platforms,
          <span className={`paragraph-bold`}> our open-source tech and collaboration drive innovation</span>
          for transparent, efficient, engaged local governance.
        </p>
        <Button href="/projects" className={`btn btn-gold`} textContent="Find Projects" />
      </div>

      <div className="test">
        <Slider containerClass={"navigation-wrapper"}>
          <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="sub-heading">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="https://assets-global.website-files.com/64760069e93084646c9ee428/64776faa0c1419b8475edd51_www.awwwards.com_%20(1).jpg"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>
            <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="sub-heading">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="/img/TrashAI2.png"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>
            <div className="keen-slider__slide">
              <div className="slide-content">
                <h2 className="sub-heading">TrashAI</h2>
                <p className="home-section-dark-paragraph">
                  Developing machine learning technology to identify trash in images.
                </p>
              </div>
              <img
                src="https://assets.awwwards.com/awards/sites_of_the_day/2019/10/rogue-studio-website-design.jpg"
                alt="Open Data Day"
                className="home-section-project-image"
              />
            </div>  
        </Slider>
      </div>
    </section>
  )
}