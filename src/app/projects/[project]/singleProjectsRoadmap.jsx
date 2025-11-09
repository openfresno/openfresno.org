import moment from "moment";
import SingleProjectsRoadmapMilestone from "./singleProjectsRoadmapMilestone.jsx";
import { SectionType } from "@/utility/constants/theme";

export default function SingleProjectsRoadmap({ data, sectionType }) {
  const milestones = parseRoadmapMilestones(data.meta.roadmap);
  parseRoadmapTimelineStatus(data.meta.roadmap);

  function parseRoadmapMilestones(roadmap) {
    let roadmapKeys = Object.keys(roadmap);
    roadmapKeys = roadmapKeys.filter(
      (key) => roadmap[key] !== null && roadmap[key].time_range
    );
    return roadmapKeys;
  }

  function parseRoadmapTimelineStatus(roadmap) {
    const currentDate = moment(moment(), "MMMM D, YYYY");

    milestones.map((milestone) => {
      if (roadmap[milestone].time_range) {
        const t = roadmap[milestone].time_range
          .split("-")
          .map((date) => moment(date, "MMMM D, YYYY"));
        if (t[1].isBefore(t[currentDate])) {
          data.meta.roadmap[milestone].status = "completed";
        } else if (t[0].isAfter(currentDate)) {
          data.meta.roadmap[milestone].status = "not started";
        } else {
          data.meta.roadmap[milestone].status = "in progress";
        }
      }
    });
  }

  return (
    <section className={`py-12 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col`}>
        <h2 className={`sub-heading-main`}>Roadmap</h2>
        <div
          className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`}
        />
        <p className={`paragraph-large project-paragraph-large mb-8 lg:mb-18`}>
          Know about the current progress, scope, and stage of project
        </p>
        <div className={`flex flex-col lg:flex-row lg:gap-70 lg:my-6`}>
          <div className={`grow-1 basis-0`}>
            <div className={`lg:ml-[15%]`}>
              {milestones.map((milestone, index) => {
                return (
                  <SingleProjectsRoadmapMilestone
                    key={milestone + index}
                    data={data}
                    milestone={milestone}
                    isLastIndex={index === milestones.length - 1}
                    sectionType={sectionType}
                  />
                );
              })}
            </div>
          </div>
          <div className="project-roadmap-details-container grow-1 basis-0 max-lg:mt-12">
            <div>
              <h4 className={`project-roadmap-info-label-two`}>Objective</h4>
              <hr className="project-info-line my-2" />
              <p className="project-paragraph-alt mb-8">
                {data.meta.roadmap.objective}
              </p>
              <h4 className={`project-roadmap-info-label-two`}>Comments</h4>
              <hr className="project-info-line my-2" />
              <p className="project-paragraph-alt mb-8">
                {data.meta.roadmap.comments}
              </p>
              <h4 className={`project-roadmap-info-label-two`}>Outcome</h4>
              <hr className="project-info-line my-2" />
              <p className="project-paragraph-alt">
                {data.meta.roadmap.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
