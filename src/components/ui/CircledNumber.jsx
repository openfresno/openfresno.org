import { SectionType } from "@/utility/constants/theme";

/**
 * Component for displaying a number in a circle.
 * @param {Object} props
 * @param {number} [props.number] The number to display
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @returns {React.JSX.Element}
 */
export default function CircledNumber({
  number,
  sectionType = SectionType.light,
}) {
  return (
    <div
      className={`circled-number app-color--${SectionType.toColor(sectionType)}`}
    >
      {number}
    </div>
  );
}
