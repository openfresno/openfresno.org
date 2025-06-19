import moment from "moment";
import SingleProjectsRoadmapMilestone from "./singleProjectsRoadmapMilestone.jsx";

export default function SingleProjectsRoadmap({ data }) {
  const milestones = parseRoadmapMilestones(data.meta.roadmap);
  parseRoadmapTimelineStatus(data.meta.roadmap);

  function parseRoadmapMilestones(roadmap) {
    let roadmapKeys = Object.keys(roadmap);
    roadmapKeys = roadmapKeys.filter(
      (key) => roadmap[key] !== null && roadmap[key].time_range,
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
    <section id="roadmap" className={`project-roadmap-container`}>
      <div
        className={`project-main-heading-container heading-underline underline-alt`}
      >
        <h2 className={`project-heading project-heading-underline mb-2`}>
          Roadmap
        </h2>
      </div>
      <p className={`section-paragraph project-section-paragraph`}>
        Know the current progress, scope, and stage of project
      </p>
      <div className={`project-info-container-alt`}>
        <div className={`project-roadmap-milestone-container`}>
          <div>
            {milestones.map((milestone, index) => {
              return (
                <SingleProjectsRoadmapMilestone
                  key={milestone + index}
                  data={data}
                  milestone={milestone}
                  isLastIndex={index === milestones.length - 1}
                />
              );
            })}
          </div>
        </div>
        <div className="project-roadmap-details-container">
          <div>
            <h4 className={`project-roadmap-info-label-two`}>Objective</h4>
            <hr className="project-info-line" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.objective}
            </p>
            <h4 className={`project-roadmap-info-label-two`}>Comments</h4>
            <hr className="project-info-line" />
            <p className="project-paragraph-alt">
              {data.meta.roadmap.comments}
            </p>
            <h4 className={`project-roadmap-info-label-two`}>Outcome</h4>
            <hr className="project-info-line" />
            <p className="project-paragraph-alt">{data.meta.roadmap.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
