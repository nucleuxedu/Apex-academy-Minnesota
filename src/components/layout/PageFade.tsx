import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

export default function PageFade({ children }: { children: ReactNode }) {
  return (
    <Fade in timeout={500}>
      <Box>{children}</Box>
    </Fade>
  );
}
