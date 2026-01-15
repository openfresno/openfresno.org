import FormattedObject from "@/components/ui/FormattedObject";
import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import Link from "next/link";

export default function SingleProjectsResources({
  data,
  sectionType = SectionType.light,
}) {
  if (data.meta.resources) {
    return (
      <FormattedObject obj={data.meta.resources} sectionType={sectionType} />
    );
  } else {
    return (
      <PageContainer sectionType={sectionType}>
        <div
          className={`project-main-heading-container heading-underline underline-alt`}
        >
          <h2 className={`project-heading`}>Resources</h2>
        </div>
        <p className={`project-paragraph`}>
          Explore our resources section on the project page to discover a wealth
          of design assets, tutorials, and tools that will inspire and empower
          your creative journey.
        </p>
        <hr className={`project-info-line`} />
        <div className={`project-info-container`}>
          <p className={`project-info-label`}>Documentation</p>
          <p className={`project-info-text`}>n/a</p>
        </div>
        {(() => {
          if (data.meta.resources.tutorials) {
            let tutorialCounter = 1;
            return data.meta.resources.tutorials.map((link) => (
              <>
                <hr className={`project-info-line`} />
                <div className={`project-info-container`}>
                  <p className={`project-info-label`}>
                    Tutorial {tutorialCounter++}
                  </p>
                  <Link className={`project-info-link`} key={link} href={link}>
                    Download
                  </Link>
                </div>
              </>
            ));
          }
        })()}
        <hr className={`project-info-line`} />
        <div>
          <div className={`project-info-container`}>
            <p className={`project-info-label`}>Meeting Times</p>
            <p className={`project-info-text`}>
              {data.meta.resources.meeting_times}
            </p>
            <p className={`project-info-label`}>Office Hours</p>
            <p className={`project-info-text`}>
              {data.meta.resources.office_hours}
            </p>
          </div>
        </div>
        <hr className={`project-info-line`} />
      </PageContainer>
    );
  }
}
