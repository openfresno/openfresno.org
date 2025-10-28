import Link from "next/link";
import { SectionType } from "@/utility/constants/theme";

/**
 * Frequently-asked questions navigation section.
 * @returns {JSX.Element}
 */
export default function FaqSectionNav({ topics, sectionType }) {
  return (
    <section className={`faq-container app-color--${SectionType.toColor(sectionType)} px-6 py-6`}>
      <nav
        className={`mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between`}
      >
        {topics.map((item) => (
          <Link
            key={item.slug}
            className="nav-link underline"
            href={`#${item.slug}`}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </section>
  );
}
