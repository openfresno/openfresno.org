/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
  gray: "gray",
  /**
   * Returns the inverse of the given section type.
   * @param {toInvert: string}
   * @returns {string}
   */
  invert: (toInvert)=> {
    if(toInvert === "light") return "dark";
    if(toInvert === "gray") return "gray";
    if(toInvert === "dark") return "light";
  },
  toColor: (toConvert) => {
    if(toConvert === "light") return "primary";
    if(toConvert === "gray") return "secondary";
    if(toConvert === "dark") return "secondary";
  }
};
