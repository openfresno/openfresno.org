import ProjectCard from "@/app/projects/projectCard";
import moment from "moment";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRows(projectCards){
  let remainder = projectCards.length % 3;
  let incompleteDivision = remainder > 0;
  let output = [];
  for(var i = 0; i < Math.ceil(projectCards.length/3); i++){
    let count = 3;
    if(incompleteDivision && i === Math.floor(projectCards.length/3)){
      count = remainder;
    }
    let elements = projectCards.slice(3 * i, 3 * i + count);
    output.push(
      <div key={`project-row-${i}`} className={`w-full flex grow-1 basis-0 flex-col lg:flex-row gap-1 gap-6 ${count === 3 && "justify-between"}`}>
        {elements}
        {/*Cursed invisible element at end of last row for spacing purposes.*/}
        {Array.apply(null, Array(3-count)).map((_, i) => {return <div key={i} className="max-lg:hidden lg:max-w-[33%] grow-1 basis-0"></div>})}
      </div>
    )
  }
  return output;
}

const ProjectsCardsContainer = ({
                                  error = false,
                                  isLoading = true,
                                  projectsData = "",
                                  sectionType = SectionType.light,
                                }) => {
  //Couldn't think of a better way to break up elements into rows of three
  //This is done for formatting purposes, because beauty is pain. Result:
  // 4        | 5        | 6
  // [] [] [] | [] [] [] | [] [] []
  // []       | [] []    | [] [] []
  return isLoading ? (
    <section className={`page-container app-color--${sectionType}`}>
      <div className="w-full flex flex-col gap-4">
        {generateRows(Array.from({ length: 3 }).map((_, index) => (
          <ProjectCard
            key={index}
            isLoading={isLoading}
            projectStatus="."
            projectTitle="Loading..."
            projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula."
            tags={["loading"]}
            lastUpdatedTimestamp={moment("2024-05-02T03:07:22Z")}
          />
        )))}
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
      <div className="w-full flex flex-col gap-4">
        {(() => {
          let shuffleArray = (array) => {
            let copyArray = [...array];
            for(var i = 0; i < copyArray.length; i++){
              let randomIndex = randomInt(i, copyArray.length-1);
              let temp = copyArray[i];
              copyArray[i] = copyArray[randomIndex];
              copyArray[randomIndex] = temp;
            }
          }
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
          return generateRows(dataArray);
          let images = [
            "open_data_day.jpg",
            "open_data_day_curved.png",
            "tower-bridge.jpg",
            "towerbridgenight.png",
            "bigdog-2017-fb.jpg",
          ];
          return generateRows(images.map((image, i) => {
            let randomMoment = moment().subtract(randomInt(4, 30), "days").add(randomInt(0, 30), "hours").add(randomInt(0, 60), "minutes");
            return(
              <ProjectCard
                key={randomMoment}
                sectionType={sectionType}
                projectStatus={randomInt(0,1) ? "Active" : "Inactive"}
                projectTitle={titleCase(image.split(".")[0].split(/[_-]/).join(" "))}
                projectText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin euismod aliquet ligula, eu efficitur quam accumsan nec. Maecenas lobortis, justo eget commodo vehicula."
                imgUrl={`/img/${image}`}
                tags={[...projectsData[0].meta.tags.split(","), "Kotlin", "Express", "MongoDB"]}
                lastUpdatedTimestamp={randomMoment}
              />
            )
          }));

        })()}
        {/*)*/}
      </div>
    </section>
  );
};

export default ProjectsCardsContainer;
