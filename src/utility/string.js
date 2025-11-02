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

/**
 Same as above, but with added exceptions.
 * @param {string} [toTitleCase] The input to title case.
 * @param {string|regex} [splitter] A string or regex expression to split the given string by; " " by default
 * @returns string
 */
export function titleCase(toTitleCase, splitter = " ") {
  if (
    !toTitleCase ||
    !(typeof toTitleCase === "string" || toTitleCase instanceof String)
  )
    return "";
  switch (toTitleCase) {
    case ".":
      return "Loading";
    default:
      return toTitleCase
        .split(splitter)
        .map((word) => {
          switch (word) {
            case "html":
              return "HTML";
            case "nodejs":
              return "Node.js";
            case "javascript":
              return "JavaScript";
            case "css":
              return "CSS";
            default:
              return word.charAt(0).toUpperCase() + word.slice(1);
          }
        })
        .join(" ");
  }
}
