import PageHero from "@/components/layout/PageHero";
import { ABOUT } from "@/data/site";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{ABOUT.title}</title>
      </Head>
      <PageHero title={ABOUT.heading} subtitle="Academic Programs" />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ maxWidth: 860, mb: 6 }}>
          {ABOUT.body.map((paragraph) => (
            <Typography
              key={paragraph}
              variant="body1"
              sx={{ mb: 2.5, fontSize: 18, lineHeight: 1.85 }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {ABOUT.missionTitle}
                </Typography>
                <Typography sx={{ fontSize: 17, lineHeight: 1.8 }}>
                  {ABOUT.mission}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {ABOUT.visionTitle}
                </Typography>
                <Typography sx={{ fontSize: 17, lineHeight: 1.8 }}>
                  {ABOUT.vision}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
