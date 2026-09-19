import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

type Props = {
  kicker?: string;
  children: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ kicker, children, align = "center", light = false }: Props) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 5 } }}>
      {kicker ? (
        <Typography
          variant="overline"
          sx={{ display: "block", mb: 1.25, color: "secondary.main" }}
        >
          {kicker}
        </Typography>
      ) : null}
      <Box
        sx={{
          width: 56,
          height: 2,
          bgcolor: "secondary.main",
          mb: 2,
          mx: align === "center" ? "auto" : 0,
        }}
      />
      <Typography variant="h2" sx={{ color: light ? "#fbf6ee" : undefined }}>
        {children}
      </Typography>
    </Box>
  );
}
