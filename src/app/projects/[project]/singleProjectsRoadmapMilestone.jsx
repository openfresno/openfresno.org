export default function SingleProjectsRoadmapMilestone({
  data,
  milestone,
  isLastIndex,
}) {
  return (
    <>
      <div className={`project-roadmap-info-container`}>
        <img
          className={`project-roadmap-icon`}
          src={
            data.meta.roadmap[milestone].status === "completed"
              ? "/img/project-roadmap/check-circle.svg"
              : data.meta.roadmap[milestone].status === "in progress"
                ? "/img/project-roadmap/arrow-circle-right.svg"
                : "/img/project-roadmap/circle-stop.svg"
          }
          alt="Project roadmap status image."
        />
        <div className={`project-info-text-container`}>
          <p className={`project-roadmap-info-label`}>{milestone}</p>
          <p className={`project-info-alt`}>
            {data.meta.roadmap[milestone].time_range}
          </p>
        </div>
      </div>
      {!isLastIndex && (
        <img
          className={`project-roadmap-icon-line`}
          src={
            data.meta.roadmap[milestone].status === "completed"
              ? "/img/project-roadmap/line-4.svg"
              : "/img/project-roadmap/line-5.svg"
          }
          alt="Project roadmap divider line."
        />
      )}
    </>
  );
}
