import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

export default function SingleProjectsRoadmapMilestone({
  data,
  milestone,
  isLastIndex,
  sectionType,
}) {
  return (
    <>
      <div className={`project-roadmap-info-container flex flex-row gap-4 w-fit`}>
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
          <p className={`text-lg font-bold`}>{titleCase(milestone)}</p>
          <p className={`text-base font-light ${sectionType===SectionType.dark&&"text-neutral-300"}`}>
            {data.meta.roadmap[milestone].time_range}
          </p>
        </div>
      </div>
      {!isLastIndex && (
        <img
          className={`w-[2px] ml-[15px] project-roadmap-icon-line`}
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
