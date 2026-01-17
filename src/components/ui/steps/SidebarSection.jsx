import CenteredInImage from "@/components/ui/CenteredInImage";
import { SectionType } from "@/utility/constants/theme";
import Link from "next/link";

/**
 * Layout component with main content and a sidebar with resource links.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Main content.
 * @param {string} props.sectionType - Style variant (e.g., "light" or "dark").
 * @returns {JSX.Element}
 */
export default function SidebarSection({ children, sectionType }) {
  return (
    <section className="sidebar-section-container">
      <div className="flex flex-1 flex-col gap-12 [&_a]:font-bold">
        {children}
      </div>
      <div className="flex flex-col gap-10 lg:w-[411px] lg:shrink-0">
        <div>
          <CenteredInImage
            src="/img/about/rectangle-blue.png"
            alt="rectangle"
            float="right"
          >
            <div className="mx-auto w-fit text-xl font-bold sm:text-3xl">
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
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <hr className="mb-2 h-px border-0 bg-(--neutral-400)" />
            <Link
              href="/code-of-conduct"
              className="primary-link--underline w-fit"
            >
              Code of Conduct
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <hr className="my-2 h-px border-0 bg-(--neutral-400)" />
            <Link
              className="primary-link--underline w-fit"
              href="https://forms.gle/JA3jAV9wE1645i9LA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to new member form."
            >
              New Member Form
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <hr className="my-2 h-px border-0 bg-(--neutral-400)" />
            <Link
              className="primary-link--underline w-fit"
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              Meeting Link
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
