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

export default function Section({ children, bg, color, id, maxWidth = "lg", sx }: Props) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: bg || "transparent",
        color: color,
        ...sx,
      }}
    >
      {maxWidth === false ? children : <Container maxWidth={maxWidth}>{children}</Container>}
    </Box>
  );
}
