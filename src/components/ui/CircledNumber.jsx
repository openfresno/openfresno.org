import { SectionType } from "@/utility/constants/theme";
import React from "react";

/**
 * Component for displaying a number in a circle.
 * @param {Object} props
 * @param {number} [props.number] The number to display
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @returns {React.JSX.Element}
 * @constructor
 */
export default function CircledNumber({
  number,
  sectionType = SectionType.light,
}) {
  return (
    <div className="h-[2.5rem] w-[2.5rem] lg:h-[5rem] lg:w-[5rem]">
      <div
        className={`circled-number app-color--${SectionType.toColor(sectionType)}`}
      >
        {number}
      </div>
    </div>
  );
}
