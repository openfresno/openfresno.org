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
 * @param {boolean} [props.underlined] Decides display of the sub heading underline; defaults to true
 * @param {boolean} [props.large=false] - If `true`, applies a larger style to the
 *   sub-heading (`h2`) for emphasis.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HeadingPair({
                                      heading = "",
                                      subHeading = <></>,
                                      subHeadingWidth = "70%",
                                      className = "",
                                      sectionType = SectionType.light,
                                      underlined = true,
                                      large = false
                                    }) {
  return (
    <div className={className}>
      <h1
        className={`heading-main app-color--${SectionType.invert(sectionType)}`}
      >
        {heading}
      </h1>
      <h2
        className={`sub-heading-main${large ? "-large" : ""} w-[${subHeadingWidth}]`}
      >
        {subHeading}
      </h2>
      {underlined ? (
        <div
          className={`my-2 h-1 w-10 app-color--${SectionType.invert(sectionType)}`}
        />
      ) : (
        ""
      )}
    </div>
  );
}
