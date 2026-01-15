import Button from "@/components/ui/button/Button";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

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
  return (
    <div className={`flex flex-col app-color--${sectionType}`}>
      <div className="project-card-img-container relative w-full">
        <div
          className={`app-color--gray absolute top-3 left-6 w-fit rounded-md px-1.5 font-semibold ${isLoading && "project-card-loading"}`}
        >
          {titleCase(projectStatus)}
        </div>
        <BasePathImage
          className={`aspect-7/4 w-full`}
          imgClassName={"rounded-xl"}
          src={imgUrl}
          alt={"Default project image"}
        />
      </div>
      <ul
        className={`project-card-tags flex flex-row gap-2 overflow-x-auto py-4 lg:min-h-[75px]`}
      >
        {tags.map((tag) => (
          <div
            key={projectTitle + tag}
            className={`project-card-tag app-color--primary h-min w-min rounded-md px-1 ${isLoading && "project-card-loading"}`}
          >
            {tag}
          </div>
        ))}
      </ul>
      <h2
        className={`project-card-heading mb-1 text-2xl font-bold ${isLoading && "project-card-loading"}`}
      >
        {projectTitle}
      </h2>
      <div className={`project-card-description-container`}>
        <p
          className={`text-ellipses line-clamp-3 text-sm font-normal ${isLoading && "project-card-loading"}`}
        >
          {projectText}
        </p>
      </div>
      <div
        className={`my-3 text-sm font-normal text-neutral-700 ${isLoading && "project-card-loading"}`}
      >
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D, Y, h:mma")}
      </div>
      <div className={`flex flex-row flex-wrap gap-2`}>
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
