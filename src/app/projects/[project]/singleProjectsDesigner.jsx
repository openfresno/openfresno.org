export default function SingleProjectsDesigner({ data }) {
  return (
    <section id="designer" className={`project-contributor-container`}>
      <div className={`project-main-heading-container heading-underline`}>
        <h2 className={`project-heading project-heading-underline`}>
          Designer
        </h2>
      </div>
      <p className={`paragraph`}>
        Designers can actively contribute to the project by creating content,
        updating Figma files, and more.
      </p>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Difficulty</p>
        <p className={`project-info-text upper-first`}>
          {data.meta.contributing.designer.difficulty}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Prototyping Tool</p>
        <p className={`project-info-text`}>Figma</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Version</p>
        <p className={`project-info-text`}>2</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Technologies</p>
        <p className={`project-info-text`}>
          {data.meta.contributing.designer.technologies}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div>
        <div className={`project-info-container`}>
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
          {data.meta.contributing.designer.ways_to_contribute}
        </p>
      </div>
      <hr className={`project-info-line`} />
    </section>
  );
}
