import { SectionType } from "@/utility/constants/theme"
import HeadingPair from "@/components/ui/HeadingPair";

/**
 * A general section, with a heading and sub heading pair on the left, and a child section on the right.
 *
 * @param {object} props
 * @param {string} [props.heading] The heading to display
 * @param {JSX.Element} [props.subHeading] The sub-heading to display
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @param {JSX.Element} [props.children] The body of the section
 * @returns {JSX.Element}
 */
export default function GeneralSection({
    heading = "",
    subHeading = (<></>),
    sectionType = SectionType.light,
    children = (<></>),
                                       }) {
  return(
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className="page-split">
        <HeadingPair
          heading={heading}
          subHeading={subHeading}
          sectionType={sectionType}
        />
        <p className="paragraph-large">
          {children}
        </p>
      </div>
    </section>
  )
}