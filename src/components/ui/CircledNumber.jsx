import { SectionType } from "@/utility/constants/theme";
import { forwardRef } from "react";

/**
 * Component for displaying a number in a circle.
 * @param {Object} props
 * @param {number} [props.number] The number to display
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @param {React.Ref} ref - Optional ref forwarded to the root element
 * @returns {React.JSX.Element}
 */
const CircledNumber = forwardRef(function CircledNumber(
  { number, sectionType = SectionType.light },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`circled-number app-color--${SectionType.toColor(sectionType)}`}
    >
      {number}
    </div>
  );
});

export default CircledNumber;
