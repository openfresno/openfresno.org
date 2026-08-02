import arrowRightIcon from "@/../public/img/meeting-card/arrow-right.svg";
import calendarIcon from "@/../public/img/meeting-card/calender.svg";
import clockIcon from "@/../public/img/meeting-card/clock.svg";
import documentIcon from "@/../public/img/meeting-card/document-txt.svg";
import HeaderUnderline from "@/components/ui/HeaderUnderline";
import { SectionType } from "@/utility/constants/theme";
import { getWednesday } from "@/utility/get-wednesday";
import Image from "next/image";
import Link from "next/link";

/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectsSectionStart({
  sectionType = SectionType.light,
}) {
  return (
    // TODO fix styling classes to represent the projects page?
    <section
      className={`mx-auto flex max-w-[calc(var(--screen-xxl)+80px)] px-6 py-12 max-lg:flex-col lg:px-10 lg:py-24 app-color--${sectionType}`}
    >
      <div className="projects-section-text-container">
        <HeaderUnderline
          title="Projects"
          description={
            <>
              Building a Better
              <br />
              Community
            </>
          }
        >
          Discover the diverse range of projects at Open Fresno, where
          we&apos;re using technology and collaboration to tackle civic
          challenges and enhance public services. Join our dedicated team of
          designers, developers, and passionate individuals to make a lasting
          impact on our community through innovative solutions.
        </HeaderUnderline>
      </div>
      <div className="projects-section-card-container">
        <div className="projects-meeting-card">
          <div className="px-8 py-4">
            <span className="font-semibold">
              Keep an eye on our Meetup calendar for upcoming events.
            </span>
          </div>
          <div className="projects-meeting-card-body">
            <div>
              <Image
                className="projects-meeting-card-icon"
                src={calendarIcon}
                alt="Calendar"
                width={24}
                height={24}
              />
              <span className="meeting-card-list-item-text">
                {getWednesday()}
              </span>
            </div>
            <div>
              <Image
                className="projects-meeting-card-icon"
                src={clockIcon}
                alt="Clock"
                width={24}
                height={24}
              />
              <span className="meeting-card-list-item-text">6:30pm PST</span>
            </div>
            <div>
              <Image
                className="projects-meeting-card-icon"
                src={documentIcon}
                alt="Document"
                width={24}
                height={24}
              />
              <span className="meeting-card-list-item-text">
                Community Action Night (Virtual)
              </span>
            </div>
          </div>
          <div className="projects-meeting-card-footer">
            <Link
              className="meeting-card-link"
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              <span>Go to meetup</span>
              <Image
                className="projects-meeting-card-link-icon"
                src={arrowRightIcon}
                alt="Arrow right"
                width={24}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
