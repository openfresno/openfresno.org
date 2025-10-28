"use client";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import PageContainer from "@/components/ui/PageContainer";
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
        className={"w-full grow-1 basis-0"}
        src="/img/about/towerbridgeside.png"
        alt="Tower bridge"
      />
      <div
        className={`w-full grow-1 basis-0 flex flex-row justify-between gap-6 lg:gap-16`}
      >
        <BasePathImage
          className={"aspect-11/10 grow-1 basis-0"}
          src="/img/about/tablet.png"
          alt="Tablet"
        />
        <BasePathImage
          className={"aspect-11/10 grow-1 basis-0"}
          src="/img/about/meeting.png"
          alt="Meeting"
        />
      </div>
    </PageContainer>
  );
}
