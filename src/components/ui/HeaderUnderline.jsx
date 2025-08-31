import { SectionType } from "../../utils/constants/theme";

/**
 * Header with underline styling.
 * @returns {JSX.Element}
 */
export default function HeaderUnderline({
  children,
  className,
  sectionType,
  title,
  description,
  large,
}) {
  return (
    <>
      <div
        className={`${className} underline-header-container heading-underline ${sectionType === SectionType.dark && "underline-alt"}`}
      >
        <h1
          className={`general-heading-section ${sectionType === SectionType.dark && "general-heading-section-alt"}`}
        >
          {title}
        </h1>
        <h2 className={`${large ? "sub-heading-large" : "sub-heading"}`}>
          {description}
        </h2>
      </div>
      {children && (
        <p
          className={`heading-paragraph-large ${sectionType === SectionType.dark && "heading-paragraph-color-dark"}`}
        >
          {children}
        </p>
      )}
    </>
  );
}
