import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

export default function SingleProjectsRoadmapMilestone({
                                                         data,
                                                         milestone,
                                                         isLastIndex,
                                                         sectionType
                                                       }) {
  return (
    <>
      <div
        className={`project-roadmap-info-container flex flex-row gap-4 w-fit`}
      >
        <BasePathImage
          className={`project-roadmap-icon aspect-1/1`}
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
          <p
            className={`text-base font-light ${sectionType === SectionType.dark && "text-neutral-300"}`}
          >
            {data.meta.roadmap[milestone].time_range}
          </p>
        </div>
      </div>
      {!isLastIndex && (
        <BasePathImage
          className={`w-[2px] h-8 origin-bottom-left project-roadmap-icon-line`}
          imgClassName={`inline-block relative left-3.5 -top-3 h-8`}
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
