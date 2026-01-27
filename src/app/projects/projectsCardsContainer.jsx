import ProjectCard from "@/app/projects/projectCard";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";
import moment from "moment";

const ProjectsCardsContainer = ({
  error = false,
  isLoading = true,
  projectsData = {},
  sectionType = SectionType.light,
}) => {
  return isLoading ? (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="mb-18 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProjectCard
            key={index}
            sectionType={sectionType}
            isLoading={isLoading}
            projectStatus="."
            projectTitle="Loading..."
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula."
            tags={["loading"]}
            lastUpdatedTimestamp={moment("2024-05-02T03:07:22Z")}
          />
        ))}
      </div>
    </section>
  ) : error || projectsData.length === 0 ? (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="mb-18 flex w-full flex-col flex-wrap justify-between gap-4 lg:flex-row">
        <span className={`project-cards-load-status-text`}>
          {error
            ? "Failed to load..."
            : "There are no projects that meet the search criteria..."}
        </span>
      </div>
    </section>
  ) : (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="mb-18 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...projectsData].map((project) => (
          <ProjectCard
            key={project.id}
            sectionType={sectionType}
            projectStatus={project.meta.project_status}
            projectTitle={project.meta.title}
            projectText={project.meta.description}
            imgUrl={
              project.meta.image_url
                ? `https://raw.githubusercontent.com/${project.full_name}/${project.default_branch}/${project.meta.image_url}`
                : project.meta.screenshots
                  ? `https://raw.githubusercontent.com/${project.full_name}/${project.default_branch}/screenshots/${project.meta.screenshots[0]}`
                  : ""
            }
            pageUrl={`/projects/${project.name}/#project-section-start`}
            githubUrl={project.html_url}
            tags={titleCase(project.meta.tags, ",", null)}
            lastUpdatedTimestamp={moment(project.updated_at)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCardsContainer;
