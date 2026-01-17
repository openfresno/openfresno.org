import { SectionType } from "@/utility/constants/theme";

/**General use Page Container used throughout the website.
 *
 * @param {Object} [props]
 * @param {string} [props.sectionType] The SectionType to modify display styling
 * @param {JSX.Element} [props.children] Elements to display within the container
 * @param {string} [props.display] Optionally changes the display type; default is a flex column
 * @param {boolean} [props.noPadding] Optionally disables padding
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageContainer({
  className = "",
  divClassName = "",
  sectionType = SectionType.light,
  children = <></>,
  display = `flex flex-col`,
  noPadding = false,
}) {
  return (
    <section
      className={`${noPadding ? "" : "py-6 lg:py-12"} app-color--${sectionType} ${className}`}
    >
      <div className={`page-container ${display} ${divClassName}`}>
        {children}
      </div>
    </section>
  );
}
