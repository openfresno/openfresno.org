import { Button } from "../../components/ui";
import { titleCase } from "@/utility/string";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";

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
      <div className="relative project-card-img-container w-full">
        <div
          className={`absolute top-3 left-6 font-semibold rounded-md px-1.5 w-fit app-color--gray ${isLoading && "project-card-loading"}`}
        >
          {titleCase(projectStatus)}
        </div>
        <BasePathImage
          className={`aspect-7/4 object-cover rounded-xl w-full`}
          src={imgUrl}
          alt={"Default project image"}
        />
      </div>
      <ul
        className={`project-card-tags flex flex-row py-4 gap-2 overflow-x-auto`}
      >
        {tags.map((tag) => (
          <div
            key={projectTitle + tag}
            className={`project-card-tag app-color--primary w-min px-1 rounded-md ${isLoading && "project-card-loading"}`}
          >
            {titleCase(tag)}
          </div>
        ))}
      </ul>
      <h2
        className={`text-2xl font-bold project-card-heading mb-1 ${isLoading && "project-card-loading"}`}
      >
        {projectTitle}
      </h2>
      <div className={`project-card-description-container`}>
        <p
          className={`text-sm font-normal line-clamp-3 text-ellipses ${isLoading && "project-card-loading"}`}
        >
          {projectText}
        </p>
      </div>
      <div
        className={`text-sm text-neutral-700 font-normal my-3 ${isLoading && "project-card-loading"}`}
      >
        Last Updated: {lastUpdatedTimestamp.format("ddd MMM D, Y, h:mma")}
      </div>
      <div className={`flex flex-row gap-2`}>
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
