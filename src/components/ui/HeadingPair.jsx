import { SectionType } from "@/utility/constants/theme";

/**
 * A reusable element for display heading, subheading pairs
 * @component
 * @param {Object} [props]
 * @param {string} [props.heading] The heading to display
 * @param {JSX.Element} [props.subHeading] The sub-heading to display
 * @param {CSS.width} [props.subHeadingWidth] The width value for the sub-heading
 * @param {string} [props.className] Passes the classname down to the parent div
 * @param {SectionType} [props.sectionType] The SectionType of the parent to modify display styling
 * @returns {JSX.Element}
 * @constructor
 */
export default function HeadingPair({
  heading = "",
  subHeading = <></>,
  subHeadingWidth = "70%",
  className = "",
  sectionType = SectionType.light,
}) {
  return (
    <div className={className}>
      <h1
        className={`heading-main app-color--${SectionType.invert(sectionType)}`}
      >
        {heading}
      </h1>
      <h2 className={`sub-heading-main w-[${subHeadingWidth}]`}>
        {subHeading}
      </h2>
    </div>
  );
}
