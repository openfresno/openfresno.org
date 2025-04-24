import Link from 'next/link'

/**
 * Frequently-asked questions navigation section.
 * @returns {JSX.Element}
 */
export default function FaqSectionNav({ topics, sectionType }) {
  return (
    <section className="faq-container" >
      <nav className={`faq-nav faq-nav-${sectionType}`}> 
        {topics.map((item) => (
          <Link key={item.slug} className="nav-link"  href={`#${item.slug}`}>
            {item.text}
          </Link>
        ))}
      </nav>
    </section>
  )
}
