"use client";
import ContactSectionLanding from "./contactSectionLanding";
import ContactSectionMission from "./contactSectionMission";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: "light",
  dark: "dark",
  invert: (type) => {
    if(type === "light") return "dark";
    if(type === "dark") return "light";
  }
};

/**
 * About page.
 * @returns {JSX.Element}
 */
export default function Contact() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
      button: {
        // Here is where you can customise the button
        fontSize: 16,
        fontWeight: 600,
        lineHeight: "18px",
        textTransform: "none",
      },
    },
  });
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <ContactSectionLanding sectionType={SectionType.light} />
        <ContactSectionMission sectionType={SectionType.dark} />
      </ThemeProvider>
    </div>
  );
}
