"use client";
import meetingImage from "@/../public/img/about/meeting.png";
import tabletImage from "@/../public/img/about/tablet.png";
import towerBridgeSide from "@/../public/img/about/towerbridgeside.png";
import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import Image from "next/image";

/**
 * About collage section.
 * @returns {React.JSX.Element}
 */
export default function AboutSectionCollage({
  sectionType = SectionType.light,
}) {
  return (
    <PageContainer divClassName="gap-4 lg:gap-10" sectionType={sectionType}>
      <Image
        src={towerBridgeSide}
        alt="Tower bridge in Fresno"
        width={1220}
        height={428}
        className="object-cover"
        loading="eager"
      />
      <div className="flex w-full grow basis-0 flex-row justify-between gap-6 lg:gap-16">
        <Image
          src={tabletImage}
          alt="Working on tablet"
          width={590}
          height={427}
          className="object-cover"
        />
        <Image
          src={meetingImage}
          alt="Team meeting"
          width={591}
          height={427}
          className="object-cover"
        />
      </div>
    </PageContainer>
  );
}
