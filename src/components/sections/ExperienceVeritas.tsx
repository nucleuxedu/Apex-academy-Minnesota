import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section";
import ContentImage from "@/components/common/ContentImage";
import { experienceCards } from "@/data/site";

type Props = { title?: string };

export default function ExperienceVeritas({ title = "Experience Veritas" }: Props) {
  return (
    <Section>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {experienceCards.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <ContentImage src={item.image} title={item.imageTitle} alt={item.title} sx={{ borderRadius: 0 }} />
              <CardContent>
                <Typography variant="h4" align="center" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
