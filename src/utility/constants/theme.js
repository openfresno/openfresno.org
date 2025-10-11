/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
  grey: "grey",
  /**
   * Returns the inverse of the given section type.
   * @param {toInvert: string}
   * @returns {string}
   */
  invert: (toInvert)=> {
    if(toInvert === "light") return "dark";
    //if(toInvert === "grey") return "gray";
    //if(toInvert === "gray") return "grey";
    if(toInvert === "grey") return "grey";
    if(toInvert === "dark") return "light";
  },
};
