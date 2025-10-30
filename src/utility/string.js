export const upperFirstOneWord = (s) => s.charAt(0).toUpperCase() + s.slice(1);
/**
 * Uppercases the first letter of every word of a string that is separated by splitter
 *
 * @param {string} s
 * @param splitter
 * @returns string
 */
export const upperFirst = (s, splitter = " ") =>
  s.split(splitter).map(upperFirstOneWord).join(splitter);

export function titleCase(toTitleCase) {
  if (
    !toTitleCase ||
    !(typeof toTitleCase === "string" || toTitleCase instanceof String)
  )
    return "";
  switch (toTitleCase) {
    case "css":
      return "CSS";
    case ".":
      return "Loading";
    default:
      return toTitleCase
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
  }
}
