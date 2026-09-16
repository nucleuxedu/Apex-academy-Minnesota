import { createTheme } from "@mui/material/styles";

const navy = "#101F46";
const navyMid = "#213E8C";
const gold = "#FFCB05";
const ink = "#111111";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: navy,
      dark: "#0A142E",
      light: navyMid,
      contrastText: "#ffffff",
    },
    secondary: {
      main: gold,
      contrastText: navy,
    },
    background: {
      default: "#F7F8FB",
      paper: "#ffffff",
    },
    text: {
      primary: ink,
      secondary: "#404040",
    },
    divider: "rgba(16, 31, 70, 0.12)",
  },
  typography: {
    fontFamily: [
      "var(--font-body)",
      "Georgia",
      "Times New Roman",
      "Times",
      "serif",
    ].join(","),
    h1: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
    subtitle1: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
    },
    subtitle2: {
      fontFamily: "var(--font-display), Poppins, sans-serif",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
          transition:
            "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 24px rgba(16, 31, 70, 0.22)",
          },
        },
        outlined: {
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(16, 31, 70, 0.08)",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 18px 40px rgba(16, 31, 70, 0.14)",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});

export default theme;
