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
