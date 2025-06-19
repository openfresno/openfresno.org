import ProjectCard from "@/app/projects/projectCard";
import moment from "moment";

const ProjectsCardsContainer = ({
  error,
  isLoading,
  projectsData,
  sectionType,
}) => {
  return isLoading ? (
    <div className={`project-cards-container`}>
      {Array.from({ length: 3 }).map((_, index) => (
        <ProjectCard
          key={index}
          isLoading={isLoading}
          projectStatus="."
          projectTitle="Loading..."
          projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula."
          tags={["loading"]}
          lastUpdatedTimestamp={moment("2024-05-02T03:07:22Z")}
        />
      ))}
    </div>
  ) : error || projectsData.length === 0 ? (
    <div className={`project-cards-load-status-container`}>
      <span className={`project-cards-load-status-text`}>
        {error
          ? "Failed to load..."
          : "There are no projects that meet the search criteria..."}
      </span>
    </div>
  ) : (
    <div className={`project-cards-container`}>
      {projectsData.map((project) => (
        <ProjectCard
          key={moment(project.updated_at)}
          sectionType={sectionType}
          projectStatus={project.meta.project_status}
          projectTitle={project.meta.title}
          projectText={project.meta.description}
          imgUrl={`https://raw.githubusercontent.com/${project.full_name}/main/${project.meta.screenshots[0]}`}
          pageUrl={`/projects/${project.name}/#project-section-start`}
          githubUrl={project.html_url}
          tags={project.meta.tags.split(",")}
          lastUpdatedTimestamp={moment(project.updated_at)}
        />
      ))}
    </div>
  );
};

export default ProjectsCardsContainer;
