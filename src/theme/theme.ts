import { createTheme } from "@mui/material/styles";
import { Lato, Libre_Baskerville } from "next/font/google";

export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const burgundy = "#86191b";
const gold = "#e58926";
const ink = "#333333";
const muted = "#747474";
const cream = "#f2f1f0";
const navy = "#333c4e";

const theme = createTheme({
  palette: {
    primary: { main: burgundy, contrastText: "#ffffff" },
    secondary: { main: gold, contrastText: "#ffffff" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: ink, secondary: muted },
    divider: "#e0dede",
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontFamily: libreBaskerville.style.fontFamily,
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.2,
      color: burgundy,
    },
    h2: {
      fontFamily: libreBaskerville.style.fontFamily,
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: 1.25,
      color: burgundy,
    },
    h3: {
      fontFamily: libreBaskerville.style.fontFamily,
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.3,
      color: navy,
    },
    h4: {
      fontFamily: libreBaskerville.style.fontFamily,
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.35,
      color: burgundy,
    },
    body1: { fontSize: "1rem", lineHeight: 1.7, color: ink },
    body2: { fontSize: "0.95rem", lineHeight: 1.7, color: muted },
    button: { textTransform: "none", fontWeight: 700, letterSpacing: 0.2 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 7,
          padding: "10px 22px",
          transition: "background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
          "&:hover": { transform: "translateY(-1px)" },
        },
        contained: {
          boxShadow: "none",
          "&:hover": { boxShadow: "0 8px 18px rgba(134,25,27,0.25)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 24px rgba(51,60,78,0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 14px 32px rgba(51,60,78,0.14)",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: burgundy, fontWeight: 700 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: cream },
        a: { color: burgundy },
        img: { maxWidth: "100%", height: "auto" },
      },
    },
  },
});

export default theme;
export const colors = { burgundy, gold, ink, muted, cream, navy };
