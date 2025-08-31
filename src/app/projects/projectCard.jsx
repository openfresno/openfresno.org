import Button from "../../components/ui/Button";

/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  isLoading,
  projectStatus,
  projectTitle,
  projectText,
  imgUrl,
  pageUrl,
  githubUrl,
  tags,
  lastUpdatedTimestamp,
}) {
  return (
    <section className={`project-card-container`}>
      <div className="project-card-img-container">
        <div
          className={`project-card-img-status ${isLoading && "project-card-loading"}`}
        >
          {projectStatus}
        </div>
        {isLoading ? (
          <div className={`project-card-img project-card-loading`}></div>
        ) : (
          <img
            className={`project-card-img`}
            src={imgUrl}
            alt={"Default project image"}
          ></img>
        )}
      </div>
      <ul className={`project-card-tags`}>
        {tags.map((tag, index) => (
          <div
            key={projectTitle + tag}
            className={`project-card-tag ${isLoading && "project-card-loading"}`}
          >
            {tag}
          </div>
        ))}
      </ul>
      <h2
        className={`project-card-heading ${isLoading && "project-card-loading"}`}
      >
        {projectTitle}
      </h2>
      <div className={`project-card-description-container`}>
        <p
          className={`project-card-description ${isLoading && "project-card-loading"}`}
        >
          {projectText}
        </p>
      </div>
      <div
        className={`project-card-last-updated ${isLoading && "project-card-loading"}`}
      >
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D Y")}
      </div>
      <div className={`project-card-buttons-container`}>
        <Button
          className={`btn btn-blue ${isLoading && "project-card-loading"}`}
          href={pageUrl}
          textContent="Learn More"
        />
        <Button
          className={`btn btn-alt-blue ${isLoading && "project-card-loading"}`}
          href={githubUrl}
          textContent="Source Code"
        />
      </div>
    </section>
  );
}
