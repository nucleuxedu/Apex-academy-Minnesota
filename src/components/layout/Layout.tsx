import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageFade from "@/components/layout/PageFade";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <PageFade>{children}</PageFade>
      </Box>
      <Footer />
    </Box>
  );
}
