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
        alt="Tower bridge"
      />
      <div
        className={`flex w-full grow basis-0 flex-row justify-between gap-6 lg:gap-16`}
      >
        <BasePathImage
          className={"aspect-11/10 grow basis-0"}
          src="/img/about/tablet.png"
          alt="Tablet"
        />
        <BasePathImage
          className={"aspect-11/10 grow basis-0"}
          src="/img/about/meeting.png"
          alt="Meeting"
        />
      </div>
    </PageContainer>
  );
}
