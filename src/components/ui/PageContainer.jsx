import { SectionType } from "@/utility/constants/theme";

/**General use Page Container used throughout the website.
 *
 * @param {Object} [props]
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @param {JSX.Element} [props.children] Elements to display within the container
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageContainer({
  className = "",
  divClassName = "",
  sectionType = SectionType.light,
  children = (<></>),
  noFlex,
  noPadding
}) {
  return(
    <section className={`${noPadding ? "" : "py-6 lg:py-12"} app-color--${sectionType} ${className}`}>
      <div className={`page-container ${noFlex ? "" : "flex flex-col lg:flex-row"} ${divClassName}`}>
        {children}
      </div>
    </section>
  )
}