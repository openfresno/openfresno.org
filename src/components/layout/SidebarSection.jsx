import Link from 'next/link'

/**
 * Get started instructions section.
 * @returns {JSX.Element}
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
  )
}
