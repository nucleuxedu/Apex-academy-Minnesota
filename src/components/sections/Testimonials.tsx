import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Section from "@/components/common/Section";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <Section>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        What Everyone Is Saying About Veritas
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((quote) => (
          <Grid key={quote.slice(0, 24)} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: "100%", borderLeft: "4px solid", borderColor: "primary.main" }}>
              <CardContent>
                <Typography variant="body1" component="blockquote" sx={{ m: 0, fontStyle: "italic" }}>
                  {quote}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
