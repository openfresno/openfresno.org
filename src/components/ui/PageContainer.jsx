import { SectionType } from "@/utility/constants/theme";

/**General use Page Container used throughout the website.
 *
 * @param {Object} [props]
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @param {JSX.Element} [props.children] Elements to display within the container
 * @param {boolean} [props.noFlex] Optionally disables flex formatting
 * @param {boolean} [props.noPadding] Optionally disables padding
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageContainer({
  className = "",
  divClassName = "",
  sectionType = SectionType.light,
  children = (<></>),
  noFlex = false,
  noPadding = false,
}) {
  return(
    <section className={`${noPadding ? "" : "py-6 lg:py-12"} app-color--${sectionType} ${className}`}>
      <div className={`page-container ${noFlex ? "" : `flex flex-col`} ${divClassName}`}>
        {children}
      </div>
    </section>
  )
}