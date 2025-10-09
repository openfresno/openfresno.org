import Link from "next/link";

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
    <section className={`section-${sectionType} section-container2`}>
      <div className={`instructions-container`}>{children}</div>
      <div className={`sidebar-container`}>
        <div className={`side-section w-[411px]`}>
          <img src="/img/about/rectangle.png" alt="rectangle" />
          <p className={`side-section-get-started-anchor`}>
            Not a volunteer yet?
            <br />
            <Link href="/get-started">Get Started</Link>
          </p>
        </div>
        <div className={`side-section-anchors-container`}>
          <Link href="/code-of-conduct" className={`side-section-anchor`}>
            Code of Conduct
          </Link>
          <Link
            className={`side-section-anchor`}
            href="https://forms.gle/JA3jAV9wE1645i9LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to new member form."
          >
            New Member Form
          </Link>
          <Link
            className={`side-section-anchor`}
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
