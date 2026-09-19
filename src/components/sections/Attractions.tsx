import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section";
import ContentImage from "@/components/common/ContentImage";
import { attractions } from "@/data/site";

type Props = {
  title?: string;
  useAltLabels?: boolean;
};

export default function Attractions({ title = "Life Beyond the Classroom", useAltLabels = false }: Props) {
  return (
    <Section>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {attractions.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <ContentImage src={item.image} title={item.imageTitle} alt={item.title} sx={{ borderRadius: 0 }} />
              <CardContent>
                <Typography variant="h4">{useAltLabels && item.altTitle ? item.altTitle : item.title}</Typography>
                <Typography variant="body2">{useAltLabels && item.altPlace ? item.altPlace : item.place}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
