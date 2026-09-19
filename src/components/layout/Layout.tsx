import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { InquiryProvider } from "@/components/common/InquiryDialog";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <InquiryProvider>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
        <Fab
          color="primary"
          size="small"
          aria-label="Go to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ position: "fixed", right: 16, bottom: 16, zIndex: 1100 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </InquiryProvider>
  );
}
