import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#004491"
    },
    secondary: {
      main: "#ffc107"
    },
    background: {
      default: "#fffcf5",
      paper: "#fffcf5"
    },
    text: {
      primary: "#060718"
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#004491"
    },
    secondary: {
      main: "#ffc107"
    },
    background: {
      default: "#060718",
      paper: "#060718"
    },
    text: {
      primary: "#fffcf5"
    },
  },
});

export const grayTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#004491"
    },
    secondary: {
      main: "#ffc107"
    },
    background: {
      default: "#72727e",
      paper: "#72727e"
    },
    text: {
      primary: "#fffcf5"
    },
  },
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  gray: grayTheme
};
