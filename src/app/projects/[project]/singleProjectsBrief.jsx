export default function SingleProjectsBrief({ data }) {
  return (
    <section id="project-brief" className={`project-brief-container`}>
      <div
        className={`project-main-heading-container heading-underline underline-alt`}
      >
        <h2 className={`project-heading`}>Project Brief</h2>
      </div>
      <hr className={`project-info-line project-brief-info-line-first`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Status</p>
        <p className={`project-info-text upper-first`}>
          {data.meta.project_status}
        </p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Description</p>
        <p className={`project-paragraph-alt`}>{data.meta.description}</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Comments</p>
        <p className={`project-paragraph-alt`}>{data.meta.comments}</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Communications</p>
        <p className={`project-info-text`}>{data.meta.communications}</p>
        <p className={`project-info-label`}>Channels</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Project Partner</p>
        <p className={`project-info-text`}>{data.meta.project_partner}</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Project Lead</p>
        <p className={`project-info-text`}>{data.meta.project_lead}</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Technical Lead</p>
        <p className={`project-info-text`}>{data.meta.technical_lead}</p>
      </div>
      <hr className={`project-info-line`} />
      <div className={`project-info-container`}>
        <p className={`project-info-label`}>Lead Designer</p>
        <p className={`project-info-text`}>{data.meta.lead_designer}</p>
      </div>
    </section>
  );
}
