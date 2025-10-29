import ProjectCard from "@/app/projects/projectCard";
import moment from "moment";
import { SectionType } from "@/utility/constants/theme";

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ProjectsCardsContainer = ({
  error = false,
  isLoading = true,
  projectsData = "",
  sectionType = SectionType.light,
}) => {
  return isLoading ? (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between gap-4">
        <span className={`project-cards-load-status-text`}>
          {error
            ? "Failed to load..."
            : "There are no projects that meet the search criteria..."}
        </span>
      </div>
    </section>
  ) : (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(() => {
          let dataArray = projectsData.map((project) => (
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
          ));
          return dataArray;
          /*
          let images = [
            "open_data_day.jpg",
            "open_data_day_curved.png",
            "tower-bridge.jpg",
            "towerbridgenight.png",
            "bigdog-2017-fb.jpg",
          ];
          return images.map((image) => {
            let randomMoment = moment()
              .subtract(randomInt(4, 30), "days")
              .add(randomInt(0, 30), "hours")
              .add(randomInt(0, 60), "minutes");
            return (
              <ProjectCard
                key={randomMoment}
                sectionType={sectionType}
                projectStatus={randomInt(0, 1) ? "Active" : "Inactive"}
                projectTitle={titleCase(
                  image.split(".")[0].split(/[_-]/).join(" "),
                )}
                projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula."
                imgUrl={`/img/${image}`}
                tags={[
                  ...projectsData[0].meta.tags.split(","),
                  "Kotlin",
                  "Express",
                  "MongoDB",
                ]}
                lastUpdatedTimestamp={randomMoment}
              />
            );
          });
           */
        })()}
      </div>
    </section>
  );
};

export default ProjectsCardsContainer;
