import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/site";
import { colors } from "@/theme/theme";

export default function Testimonials() {
  return (
    <Section bg={colors.ink} color="#f4efe6">
      <SectionHeading kicker="Voices" light>
        What Everyone Is Saying About Veritas
      </SectionHeading>
      <Grid container spacing={3}>
        {testimonials.map((quote) => (
          <Grid key={quote.slice(0, 24)} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                height: "100%",
                p: 3,
                border: "1px solid rgba(196,162,101,0.35)",
                bgcolor: "rgba(252,250,245,0.04)",
              }}
            >
              <Typography sx={{ color: "secondary.main", fontSize: "2.4rem", lineHeight: 1, mb: 1, fontFamily: "Georgia, serif" }}>
                “
              </Typography>
              <Typography variant="body1" component="blockquote" sx={{ m: 0, fontStyle: "italic", color: "#f4efe6" }}>
                {quote}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
