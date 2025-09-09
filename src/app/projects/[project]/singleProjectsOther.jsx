export default function SingleProjectsOther({ data }) {
  return (
    <section id="other" className={`project-contributor-container`}>
      <div className={`project-main-heading-container heading-underline`}>
        <h2 className={`project-heading project-heading-underline`}>Other</h2>
      </div>
      <p className={`paragraph`}>
        Any volunteers can contribute by writing documentation, generating
        ideas, attending meetings, helping out the community, and more.
      </p>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Difficulty</p>
        <p className={`project-info-text`}>Easy</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Documentation</p>
        <p className={`project-info-text`}>Google Sheets</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Meetings</p>
        <p className={`project-info-text`}>ZEP</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Technologies</p>
        <p className={`project-info-text`}>To be announced</p>
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
          Writing Documentation, Generating new ideas, and more
        </p>
      </div>
      <hr className={`project-info-line`} />
    </section>
  );
}
