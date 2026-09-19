import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bg?: string;
  color?: string;
  id?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
  sx?: object;
};

export default function Section({ children, bg, color, id, maxWidth = "xl", sx }: Props) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        backgroundColor: bg || "transparent",
        color,
        ...sx,
      }}
    >
      {maxWidth === false ? children : <Container maxWidth={maxWidth}>{children}</Container>}
    </Box>
  );
}
