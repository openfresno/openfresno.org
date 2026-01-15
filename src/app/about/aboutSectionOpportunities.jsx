import AboutSectionPositionList from "@/app/about/components/aboutSectionPositionList";
import CenteredInImage from "@/components/ui/CenteredInImage";
import HeadingPair from "@/components/ui/HeadingPair";
import { SectionType } from "@/utility/constants/theme";
import Link from "next/link";

/**
 * About opportunities section.
 * @returns {JSX.Element}
 */
export default function AboutSectionOpportunities({ sectionType }) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className={`page-container w-full overflow-hidden`}>
        <div className="w-full overflow-hidden">
          <div
            className={`float-left px-4 sm:px-8 md:px-12 lg:w-[55%] lg:px-0 about-${sectionType}-heading-container about-heading-underline about-underline-alt`}
          >
            <HeadingPair
              heading="Opportunities"
              subHeading="Join Our Team"
              sectionType={sectionType}
            />
            <p className={`my-12`}>
              <span className={`paragraph-bold`}>
                Are you passionate about civic tech leadership?
              </span>{" "}
              Open Fresno invites you to join our Core Team, organizing events,
              fostering partnerships, and driving community impact. Shape
              Fresno&apos;s civic innovation future – connect with us and
              explore joining our dedicated team.
            </p>
          </div>
          <div
            className={`opportunities-get-started relative float-right h-fit w-[45%] max-lg:hidden`}
          >
            <CenteredInImage
              src="/img/about/rectangle-blue.png"
              alt="rectangle"
              float="right"
            >
              <div className="font mx-auto w-fit text-xl font-bold sm:text-3xl">
                <span
                  className={`app-text--${SectionType.invert(sectionType)}`}
                >
                  Not a volunteer yet?
                </span>
                <br />
                <Link href="/get-started" className="underline">
                  Get Started
                </Link>
              </div>
            </CenteredInImage>
          </div>
        </div>

        <h3 className={`h3-bold app-text--primary mb-8 hidden lg:block`}>
          Open Positions within Our Team
        </h3>

        <div className={`space-between flex w-full flex-row flex-wrap`}>
          <AboutSectionPositionList
            header="Community"
            listText={[
              "Director of Fundraising",
              "Director of Community Engagement",
              "Director of Recruitment",
            ]}
          />
          <AboutSectionPositionList
            header="Communications"
            listText={[
              "Director of Product Management",
              "Director of Marketing & Engagement",
              "Director of Event Management",
            ]}
          />
        </div>

        <div className={`space-between flex w-full flex-row flex-wrap`}>
          <AboutSectionPositionList
            header="Product"
            listText={[
              <s>Director of Frontend Engineering</s>,
              "Director of Design & Usability",
            ]}
          />
          <AboutSectionPositionList
            header="Platform"
            listText={[
              "Director of Backend Engineering",
              "Director of Data Science",
            ]}
          />
        </div>
        <div className={`relative h-fit w-full lg:hidden`}>
          <CenteredInImage
            src="/img/about/rectangle-blue.png"
            alt="rectangle"
            float="center"
          >
            <div className="font mx-auto w-fit text-xl font-bold sm:text-3xl">
              <span className={`app-text--${SectionType.invert(sectionType)}`}>
                Not a volunteer yet?
              </span>
              <br />
              <Link href="/get-started" className="underline">
                Get Started
              </Link>
            </div>
          </CenteredInImage>
        </div>
      </div>
    </section>
  );
}
