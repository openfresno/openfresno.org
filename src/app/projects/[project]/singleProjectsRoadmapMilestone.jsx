import arrowCircleRight from "@/../public/img/project-roadmap/arrow-circle-right.svg";
import checkCircle from "@/../public/img/project-roadmap/check-circle.svg";
import circleStop from "@/../public/img/project-roadmap/circle-stop.svg";
import line4 from "@/../public/img/project-roadmap/line-4.svg";
import line5 from "@/../public/img/project-roadmap/line-5.svg";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";
import Image from "next/image";

export default function SingleProjectsRoadmapMilestone({
  data,
  milestone,
  isLastIndex,
  sectionType,
}) {
  return (
    <>
      <div
        className={`project-roadmap-info-container flex w-fit flex-row gap-4`}
      >
        <Image
          className="project-roadmap-icon aspect-1/1 object-cover"
          src={
            data.meta.roadmap[milestone].status === "completed"
              ? checkCircle
              : data.meta.roadmap[milestone].status === "in progress"
                ? arrowCircleRight
                : circleStop
          }
          alt={`Roadmap status: ${data.meta.roadmap[milestone].status}`}
          width={32}
          height={32}
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
        <Image
          className="project-roadmap-icon-line h-8 w-[2px] origin-bottom-left inline-block relative left-3.5 -top-3 object-cover"
          src={
            data.meta.roadmap[milestone].status === "completed" ? line4 : line5
          }
          alt="Roadmap divider"
          width={2}
          height={32}
        />
      )}
    </>
  );
}
