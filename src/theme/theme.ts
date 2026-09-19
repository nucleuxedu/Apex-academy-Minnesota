import { createTheme } from "@mui/material/styles";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const oxblood = "#6b1c22";
const gold = "#c4a265";
const ink = "#171411";
const muted = "#6b6258";
const parchment = "#f3ece1";
const paper = "#fcfaf5";
const bone = "#e4d8c4";
const navy = "#2a2420";

const theme = createTheme({
  palette: {
    primary: { main: oxblood, contrastText: "#fbf6ee" },
    secondary: { main: gold, contrastText: "#171411" },
    background: { default: parchment, paper },
    text: { primary: ink, secondary: muted },
    divider: bone,
  },
  typography: {
    fontFamily: sourceSans.style.fontFamily,
    h1: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 500,
      fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
      color: oxblood,
    },
    h2: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 500,
      fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)",
      lineHeight: 1.2,
      color: oxblood,
    },
    h3: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.45rem",
      lineHeight: 1.3,
      color: ink,
    },
    h4: {
      fontFamily: cormorant.style.fontFamily,
      fontWeight: 600,
      fontSize: "1.28rem",
      lineHeight: 1.35,
      color: oxblood,
    },
    overline: {
      fontFamily: sourceSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "0.72rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: gold,
    },
    body1: { fontSize: "1.05rem", lineHeight: 1.8, color: ink },
    body2: { fontSize: "0.95rem", lineHeight: 1.7, color: muted },
    button: {
      fontFamily: sourceSans.style.fontFamily,
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.04em",
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
        contained: { boxShadow: "none", "&:hover": { boxShadow: "none", backgroundColor: "#54151a" } },
        outlined: {
          borderColor: gold,
          color: oxblood,
          "&:hover": { borderColor: oxblood, backgroundColor: "rgba(196,162,101,0.12)" },
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
            borderColor: gold,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: oxblood, fontWeight: 700, textUnderlineOffset: 3 },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: parchment,
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(196,162,101,0.12), transparent 55%), linear-gradient(180deg, #f7f1e8 0%, #f3ece1 100%)",
        },
        a: { color: oxblood },
        img: { maxWidth: "100%", height: "auto" },
        blockquote: { margin: 0 },
      },
    },
  },
});

export default theme;
export const colors = {
  burgundy: oxblood,
  oxblood,
  gold,
  ink,
  muted,
  cream: parchment,
  parchment,
  paper,
  bone,
  navy,
};
