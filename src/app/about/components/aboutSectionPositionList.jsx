/**
 *
 * @param header
 * @param listText
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutSectionPositionList({
  header = "",
  listText = [""],
}) {
  return (
    <div
      className={`positions-container mb-4 w-[48%] min-w-100 max-lg:ml-[6%] max-lg:w-full max-sm:min-w-0`}
    >
      <div className={`position-header mb-2 text-xl/6`}>{header}</div>
      <hr className={`h-px w-[90%] border-0 bg-(--neutral-200)`} />
      <ul className={`mt-4 ml-3 list-inside list-disc`}>
        {listText.map((text, i) => {
          return (
            <li key={i} className={`text-xl/10 text-(--neutral-200)`}>
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
