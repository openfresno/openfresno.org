import { useDragScroll } from "@/app/_hooks/useDragScroll.js";
import Button from "@/components/ui/button/Button";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  isLoading = true,
  projectStatus,
  projectTitle,
  projectText,
  imgUrl = "/img/tower-bridge.jpg",
  pageUrl,
  githubUrl,
  tags,
  lastUpdatedTimestamp,
  sectionType = SectionType.light,
}) {
  const tagsRef = useDragScroll();

  return (
    <div className={`flex flex-col app-color--${sectionType}`}>
      <Link className="project-card-img-container" href={pageUrl}>
        <div
          className={`project-card-status-badge app-color--gray ${isLoading && "project-card-loading"}`}
        >
          {titleCase(projectStatus)}
        </div>
        <Image
          className="project-card-image"
          src={imgUrl}
          alt={projectTitle || "Project image"}
          width={350}
          height={200}
        />
      </Link>
      <ul ref={tagsRef} className="project-card-tags">
        {tags.map((tag) => (
          <div
            key={projectTitle + tag}
            className={`project-card-tag app-color--primary ${isLoading && "project-card-loading"}`}
          >
            {tag}
          </div>
        ))}
      </ul>
      <h2 className={`project-card-heading ${isLoading && "project-card-loading"}`}>
        {projectTitle}
      </h2>
      <div className="project-card-description-container">
        <p className={`project-card-text ${isLoading && "project-card-loading"}`}>{projectText}</p>
      </div>
      <div className={`project-card-updated ${isLoading && "project-card-loading"}`}>
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D, Y, h:mma")}
      </div>
      <div className="project-card-buttons">
        <Button
          className={`btn btn-blue ${isLoading && "project-card-loading"}`}
          href={pageUrl}
          textContent="Learn More"
        />
        <Button
          className={`btn btn-alt ${isLoading && "project-card-loading"}`}
          href={githubUrl}
          textContent="Source Code"
        />
      </div>
    </div>
  );
}
