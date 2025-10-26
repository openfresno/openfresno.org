import Link from "next/link";
import CenteredInImage from "@/components/ui/CenteredInImage";
import { SectionType } from "@/utility/constants/theme";

/**
 * `SidebarSection` is a layout component that renders a main instructions area
 * alongside a sidebar with helpful links and a "Get Started" call-to-action.
 *
 * It is typically used in onboarding or informational pages to guide users
 * toward key resources such as the code of conduct, new member form, or meeting links.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Main instructional content displayed
 *   in the left section of the layout.
 * @param {string} props.sectionType - A style variant applied to the section container
 *   (e.g., `"light"` or `"dark"`), used to theme the section appropriately.
 * @returns {JSX.Element} A structured section with instructions and a sidebar of resource links.
 * @example
 * ```tsx
<SidebarSection sectionType="light">
  <h2>Welcome to the community!</h2>
  <p>Follow the steps below to get started.</p>
</SidebarSection>
 * ```
 */
export default function SidebarSection({ children, sectionType }) {
  return (
    <section className={`app-color--${sectionType} page-container py-12 lg:py-24 flex flex-col lg:flex-row gap-2`}>
      <div className={`instructions-container`}>{children}</div>
      <div className={`sidebar-container`}>
        <div className={`side-section lg:w-[411px]`}>
          <CenteredInImage
            src="/img/about/rectangle-blue.png"
            alt="rectangle"
            float="right"
          >
            <div className="w-fit mx-auto font text-3xl font-bold">
              <span className={`app-text--${SectionType.invert(sectionType)}`}>Not a volunteer yet?</span>
              <br />
              <Link href="/get-started" className="underline">Get Started</Link>
            </div>
          </CenteredInImage>
        </div>
        <div className={`side-section-anchors-container`}>
          <hr className="mb-2 border-0 h-px bg-(--neutral-400)"/>
          <Link href="/code-of-conduct" className="app-text--primary underline">
            Code of Conduct
          </Link>
          <hr className="my-2 border-0 h-px bg-(--neutral-400)"/>
          <Link
            className="app-text--primary underline"
            href="https://forms.gle/JA3jAV9wE1645i9LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to new member form."
          >
            New Member Form
          </Link>
          <hr className="my-2 border-0 h-px bg-(--neutral-400)"/>
          <Link
            className="app-text--primary underline"
            href="https://www.meetup.com/openfresno/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Meetup."
          >
            Meeting Link
          </Link>
        </div>
      </div>
    </section>
  );
}
