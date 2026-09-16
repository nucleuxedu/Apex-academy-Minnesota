import PageHero from "@/components/layout/PageHero";
import { ABOUT } from "@/data/site";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

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

        <Box sx={{ mb: { xs: 7, md: 9 } }}>
          {/* <Typography variant="overline" sx={{ letterSpacing: 3, color: "secondary.main", fontWeight: 700 }}>
            Minnesota Preparatory Academy
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 1.5 }}>
            {ABOUT.galleryTitle}
          </Typography>
          <Typography sx={{ mb: 4, fontSize: 18, lineHeight: 1.85, maxWidth: 720 }}>
            {ABOUT.galleryIntro}
          </Typography> */}

          <Box
            sx={{
              display: "grid",
              gap: { xs: 1.25, md: 1.5 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1.15fr 1fr 1fr",
              },
              gridTemplateRows: {
                xs: "320px 240px 240px 240px 240px 320px",
                sm: "260px 240px 260px",
                md: "280px 240px 280px",
              },
              gridTemplateAreas: {
                xs: `
                  "dunk"
                  "team"
                  "contest"
                  "drive"
                  "huddle"
                  "focus"
                `,
                sm: `
                  "dunk team"
                  "contest drive"
                  "huddle focus"
                `,
                md: `
                  "dunk team team"
                  "dunk contest drive"
                  "huddle huddle focus"
                `,
              },
            }}
          >
            {ABOUT.gallery.map((image, index) => (
              <Box
                key={image.src}
                sx={{
                  gridArea: image.area,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  bgcolor: "primary.dark",
                  "&:hover img": {
                    transform: "scale(1.06)",
                  },
                  "&:hover .gallery-overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 40vw"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(10, 20, 46, 0.55) 100%)",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Typography variant="h5" sx={{  lineHeight: 1.85, textAlign: "center", mt: 4 }}>
            {ABOUT.quote}
          </Typography>
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
