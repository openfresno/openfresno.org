/**
 *
 * @param header
 * @param listText
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutSectionPositionList({
                                                   header = "",
                                                   listText = [""]
                                                 }) {
  return (
    <div
      className={`w-[48%] max-lg:ml-[6%] min-w-[400px] max-lg:w-full max-sm:min-w-0 positions-container mb-4`}
    >
      <div className={`position-header text-xl/6 mb-2`}>{header}</div>
      <hr className={`w-[90%] border-0 h-px bg-(--neutral-200)`} />
      <ul className={`positions-list list-disc mt-4 ml-6`}>
        {listText.map((text, i) => {
          return (
            <li key={i} className={`text-(--neutral-200) text-xl/10 `}>
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
