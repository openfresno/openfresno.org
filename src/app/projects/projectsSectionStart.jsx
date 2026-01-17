import HeaderUnderline from "@/components/ui/HeaderUnderline";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";
import { getWednesday } from "@/utility/get-wednesday";
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
      className={`mx-auto flex max-w-[calc(var(--screen-xxl)+80px)] py-12 max-lg:flex-col lg:px-6 lg:py-24 app-color--${sectionType}`}
    >
      <div
        className={`projects-section-text-container w-full grow-3 basis-0 max-lg:px-6`}
      >
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
      <div
        className={`flex grow-2 basis-0 items-center max-lg:mt-4 lg:ml-[10%]`}
      >
        <div className={`border border-neutral-500 lg:rounded-3xl`}>
          <div className={`px-8 py-4`}>
            <span className={`font-semibold`}>
              Keep an eye on our Meetup calendar for upcoming events.
            </span>
          </div>
          <div
            className={`flex flex-col gap-4 border-t border-neutral-500 p-8`}
          >
            <div>
              <BasePathImage
                className="mr-4 inline-block"
                src="/img/meeting-card/calender.svg"
                alt="Calendar"
                width={24}
                height={24}
              />
              <span className={`meeting-card-list-item-text`}>
                {getWednesday()}
              </span>
            </div>
            <div>
              <BasePathImage
                className="mr-4 inline-block"
                src="/img/meeting-card/clock.svg"
                alt="Clock"
                width={24}
                height={24}
              />
              <span className={`meeting-card-list-item-text`}>6:30pm PST</span>
            </div>
            <div>
              <BasePathImage
                className="mr-4 inline-block"
                src="/img/meeting-card/document-txt.svg"
                alt="Document"
                width={24}
                height={24}
              />
              <span className={`meeting-card-list-item-text`}>
                Community Action Night (Virtual)
              </span>
            </div>
          </div>
          <div
            className={`meeting-card-content border-t border-neutral-500 px-8 py-4`}
          >
            <Link
              className={`meeting-card-link`}
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              <span>Go to meetup</span>
              <BasePathImage
                className="-mt-0.5 ml-2 inline-block"
                src="/img/meeting-card/arrow-right.svg"
                alt="Arrow right"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
