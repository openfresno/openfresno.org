import React from "react";
import { SectionType } from "@/utility/constants/theme";

/**
 *
 * @component
 * @param {Object} props
 * @param {number} [props.number] The number to display
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @returns {React.JSX.Element}
 * @constructor
 */
export default function CircledNumber({
                                        number,
                                        sectionType = SectionType.light
                                      }) {
  return (
    <div className="w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem]">
      <div
        className={`circled-number app-color--${SectionType.toColor(sectionType)}`}
      >
        {number}
      </div>
    </div>
  );
}
