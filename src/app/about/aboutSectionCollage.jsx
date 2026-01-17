"use client";
import PageContainer from "@/components/ui/PageContainer";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";

/**
 * About collage section.
 * @returns {JSX.Element}
 */
export default function AboutSectionCollage({
  sectionType = SectionType.light,
}) {
  return (
    <PageContainer divClassName={`gap-4 lg:gap-10`} sectionType={sectionType}>
      <BasePathImage
        className={"w-full grow basis-0"}
        src="/img/about/towerbridgeside.png"
        alt="Tower bridge in Fresno"
        width={1200}
        height={400}
      />
      <div
        className={`flex w-full grow basis-0 flex-row justify-between gap-6 lg:gap-16`}
      >
        <BasePathImage
          className={"aspect-11/10 grow basis-0"}
          src="/img/about/tablet.png"
          alt="Working on tablet"
          width={550}
          height={500}
        />
        <BasePathImage
          className={"aspect-11/10 grow basis-0"}
          src="/img/about/meeting.png"
          alt="Team meeting"
          width={550}
          height={500}
        />
      </div>
    </PageContainer>
  );
}
