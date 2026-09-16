import { Box, Container, Typography } from "@mui/material";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "common.white",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #0A142E 0%, #101F46 48%, #213E8C 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(255, 203, 5, 0.18), transparent 42%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 3, color: "secondary.main", fontWeight: 700 }}
        >
          Minnesota Preparatory Academy
        </Typography>
        <Typography variant="h2" component="h1" sx={{ mt: 1, maxWidth: 820 }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="h6"
            sx={{ mt: 2, maxWidth: 720, fontWeight: 400, opacity: 0.92 }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Container>
    </Box>
  );
}
