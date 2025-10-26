/**General use Page Container used throughout the website.
 *
 * @param {Object} [props]
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @param {JSX.Element} [props.children] Elements to display within the container
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageContainer({ className, sectionType, children, noFlex, noPadding}) {
  return(
    <section className={`${noPadding ? "" : "py-6 lg:py-12"} app-color--${sectionType} ${className}`}>
      <div className={`page-container ${noFlex ? "" : "flex flex-col"}`}>
        {children}
      </div>
    </section>
  )
}