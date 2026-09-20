import { createTheme } from "@mui/material/styles";
import { Cinzel, Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const black = "#0a0a0a";
const ink = "#0b0b0d";
const silver = "#c5c9d1";
const platinum = "#666B75";
const muted = "#6a6f78";
const frost = "#f3f4f6";
const paper = "#ffffff";
const bone = "#d5d8de";
const navy = "#121316";

const theme = createTheme({
  palette: {
    primary: { main: black, contrastText: platinum },
    secondary: { main: silver, contrastText: black },
    background: { default: frost, paper },
    text: { primary: ink, secondary: muted },
    divider: bone,
  },
  typography: {
    fontFamily: sourceSans.style.fontFamily,
    h1: {
      fontFamily: cinzel.style.fontFamily,
      fontWeight: 500,
      fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
      lineHeight: 1.12,
      letterSpacing: "0.04em",
      color: black,
    },
    h2: {
      fontFamily: cinzel.style.fontFamily,
      fontWeight: 500,
      fontSize: "clamp(1.55rem, 2.5vw, 2.2rem)",
      lineHeight: 1.22,
      letterSpacing: "0.03em",
      color: black,
    },
    h3: {
      fontFamily: cinzel.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: 1.3,
      letterSpacing: "0.02em",
      color: ink,
    },
    h4: {
      fontFamily: cinzel.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.22rem",
      lineHeight: 1.35,
      letterSpacing: "0.02em",
      color: black,
    },
    overline: {
      fontFamily: cinzel.style.fontFamily,
      fontWeight: 600,
      fontSize: "0.7rem",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: silver,
    },
    body1: { fontSize: "1.05rem", lineHeight: 1.8, color: ink },
    body2: { fontSize: "0.95rem", lineHeight: 1.7, color: muted },
    button: {
      fontFamily: sourceSans.style.fontFamily,
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.06em",
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "11px 22px",
          transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none", backgroundColor: "#1c1c1e" },
        },
        outlined: {
          borderColor: silver,
          color: black,
          "&:hover": { borderColor: black, backgroundColor: "rgba(197,201,209,0.16)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: paper,
          border: `1px solid ${bone}`,
          boxShadow: "none",
          borderRadius: 0,
          transition: "transform 0.35s ease, border-color 0.35s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: silver,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: black, fontWeight: 700, textUnderlineOffset: 3 },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: frost,
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(197,201,209,0.28), transparent 55%), linear-gradient(180deg, #f7f8fa 0%, #f3f4f6 100%)",
        },
        a: { color: black },
        img: { maxWidth: "100%", height: "auto" },
        blockquote: { margin: 0 },
      },
    },
  },
});

export default theme;
export const colors = {
  burgundy: black,
  oxblood: black,
  gold: silver,
  ink,
  muted,
  cream: frost,
  parchment: frost,
  paper,
  bone,
  navy,
  black,
  silver,
  platinum,
};
