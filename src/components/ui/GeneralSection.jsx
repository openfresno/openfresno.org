import { SectionType } from "@/utility/constants/theme"

/**
 * a
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
    subHeading = "",
    sectionType = SectionType.light,
    children= (<></>),
}) {
    return(
        <section className={`app-color--${sectionType} py-12 lg:py-24`}>
          <div className="page-split">
            <div>
              <h1 className={`heading-main app-color--${SectionType.invert(sectionType)}`}>{heading}</h1>
              <h2 className="sub-heading-main w-[70%]">
                {subHeading}
              </h2>
            </div>
            <p className="paragraph-large">
                {children}
            </p>
          </div>
        </section>
    )
}