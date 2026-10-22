import { createTheme, type ThemeOptions } from "@mui/material/styles";

const baseTheme = createTheme();

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"DM Sans", sans-serif',

    h1: {
      color: "#fff",
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: "24px",
      textShadow: "0 2px 10px rgba(0,0,0,0.3)",

      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "2rem",
      },

      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "2.8rem",
      },

      [baseTheme.breakpoints.only("md")]: {
        fontSize: "3.5rem",
      },

      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "4rem",
      },
    },

    h2: {
      fontWeight: 600,
      color: "#555",

      [baseTheme.breakpoints.down("md")]: {
        fontSize: "28px",
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: "36px",
      },
    },

    body1: {
      color: "#666",
      lineHeight: 1.9,

      [baseTheme.breakpoints.down("md")]: {
        fontSize: "15px",
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },

    p: {
      color: "#fff",
      fontWeight: 400,
      lineHeight: 1.5,
      textShadow: "0 2px 8px rgba(0,0,0,0.3)",

      [baseTheme.breakpoints.only("xs")]: {
        fontSize: "1.1rem",
      },

      [baseTheme.breakpoints.only("sm")]: {
        fontSize: "1.5rem",
      },

      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
  },
};

export const theme = createTheme(themeOptions);
