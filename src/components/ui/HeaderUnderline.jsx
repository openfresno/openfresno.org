import { SectionType } from "@/utility/constants/theme";
import HeadingPair from "@/components/ui/HeadingPair";

/**
 *  `HeaderUnderline` renders a header that introduces a major section of a page or layout.
 * It adapts to light/dark themes, supports larger descriptions, and ensures consistent typography across sections.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - Optional supporting content displayed
 *   below the headings. Typically used for explanatory text or sub-paragraphs.
 * @param {string} [props.className] - Additional CSS class names to apply to the
 *   container for layout or custom styling.
 * @param {SectionType} [props.sectionType] - Determines the theme variant of the
 *   header. When set to `SectionType.dark`, alternate dark styles are applied.
 * @param {string} props.title - The main heading text, rendered inside an `h1`.
 * @param {string} props.description - The secondary heading text, rendered inside an `h2`.
 * @param {boolean} [props.large=false] - If `true`, applies a larger style to the
 *   description (`h2`) for emphasis.
 * @returns {JSX.Element} A styled header block with underline, description, and optional supporting text.
 * @example
 * ```tsx
<HeaderUnderline
  title="Our Services"
  description="We provide scalable solutions for modern businesses."
  sectionType={SectionType.dark}
  large
>
  Trusted by startups and enterprises worldwide.
</HeaderUnderline>
 * ```
 */
export default function HeaderUnderline({
  children,
  className = "",
  sectionType,
  title,
  description,
  large,
}) {
  return (
    <div
      className={`${className} underline-header-container heading-underline ${sectionType === SectionType.dark && "underline-alt"}`}
    >
      <HeadingPair
        heading={title}
        subHeading={description}
        subHeadingWidth={"100%"}
        sectionType={sectionType}
        className="lg:mb-4"
      />
      {children && (
        <p
          className={`heading-paragraph-large ${sectionType === SectionType.dark && "heading-paragraph-color-dark"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
