import { getWednesday } from "@/utils/get-wednesday";
import Link from "next/link";

/**
 * Projects start section.
 * @returns {JSX.Element}
 */
export default function ProjectsSectionStart({ sectionType }) {
  return (
    // TODO fix styling classes to represent the projects page?
    <section className={`projects-section-${sectionType}`}>
      <div className={`projects-section-text-container`}>
        <div
          className={`projects-section-${sectionType}-container heading-underline`}
        >
          <h1 className={`general-heading-main`}>PROJECTS</h1>
          <h2 className={`projects-heading-main-sub`}>
            Building a Better Community
          </h2>
        </div>
        <div className={`projects-section-${sectionType}-container`}>
          <p className={`paragraph`}>
            Discover the diverse range of projects at Open Fresno, where
            we&apos;re using technology and collaboration to tackle civic
            challenges and enhance public services. Join our dedicated team of
            designers, developers, and passionate individuals to make a lasting
            impact on our community through innovative solutions.
          </p>
        </div>
      </div>
      <div className={`meeting-card-container`}>
        <div className={`meeting-card`}>
          <div className={`meeting-card-section`}>
            <span className={`meeting-card-heading`}>
              Keep an eye on our Meetup calendar for upcoming events.
            </span>
          </div>
          <div>
            <ul>
              <li>
                <span className={`meeting-card-list-item-text`}>
                  {getWednesday()}
                </span>
              </li>
              <li>
                <span className={`meeting-card-list-item-text`}>
                  6:30pm PST
                </span>
              </li>
              <li>
                <span className={`meeting-card-list-item-text`}>
                  Community Action Night (Virtual)
                </span>
              </li>
            </ul>
          </div>
          <div className={`meeting-card-section`}>
            <Link
              className={`meeting-card-link`}
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              <span>Go to meetup</span>
              <img
                src="./img/meeting-card/arrow-right.svg"
                alt="Arrow right."
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
