import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ContentImage from "@/components/common/ContentImage";
import { experienceCards } from "@/data/site";

type Props = { title?: string };

export default function ExperienceVeritas({ title = "Experience Apex" }: Props) {
  return (
    <Box sx={{ mt: 5, mb: 1 }}>
      <Container maxWidth="xl" disableGutters>
        <SectionHeading kicker="Campus life" align="left">
          {title}
        </SectionHeading>
        <Grid container spacing={3}>
        {experienceCards.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: "100%" }}>
              <ContentImage
                src={item.image}
                title={item.imageTitle}
                alt={item.title}
                sx={{ borderRadius: 0, aspectRatio: "4/3", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Container>
    </Box>
  );
}
