export default function SingleProjectsDeveloper({ data }) {
  return (
    <section id="developer" className={`project-contributor-container`}>
      <div
        className={`project-main-heading-container heading-underline underline-alt`}
      >
        <h2 className={`project-heading`}>Developer</h2>
      </div>
      <p className={`section-paragraph project-section-paragraph`}>
        Developers can actively contribute to the project by submitting pull
        requests with code enhancements or bug fixes via the project&apos;s
        GitHub repository.
      </p>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Difficulty</p>
        <p className={`project-info-text upper-first`}>
          {data.meta.contributing.developer.difficulty}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Frontend</p>
        <p className={`project-info-text`}>
          {data.meta.contributing.developer.frontend}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Backend</p>
        <p className={`project-info-text`}>
          {data.meta.contributing.developer.backend}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Technologies</p>
        <p className={`project-info-text`}>
          {data.meta.contributing.developer.technologies}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div>
        <div className="project-info-container">
          <p className={`project-info-label`}>Version Control</p>
          <p className={`project-info-text`}>
            {data.meta.contributing.developer.version_control}
          </p>
          <p className={`project-info-label`}>Repo</p>
          <p className={`project-info-text`}>
            {data.meta.contributing.developer.repo}
          </p>
        </div>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Ways to Contribute</p>
        <p className={`project-info-text`}>
          {data.meta.contributing.developer.ways_to_contribute}
        </p>
      </div>
      <hr className={`project-info-line`} />
    </section>
  );
}
