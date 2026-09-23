import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import PageFade from "@/components/layout/PageFade";
import WhatSetsApart from "@/components/sections/WhatSetsApart";
import Testimonials from "@/components/sections/Testimonials";
import Pillars from "@/components/sections/Pillars";
import IframeEmbed from "@/components/common/IframeEmbed";
import { site } from "@/data/site";
import { useInquiry } from "@/components/common/InquiryDialog";
import { colors } from "@/theme/theme";

export default function HomePage() {
  const { openInquiry } = useInquiry();

  return (
    <PageFade>
      <Head>
        <title>Apex Academy Minnesota Classical Education - Apex Academy Minnesota Chisago City MN</title>
        <meta
          name="description"
          content="Apex Academy Minnesota is a private school, in Chisago City, MN, where we love well in pursuit of Excellence, through a classical education."
        />
      </Head>

      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "78vh", md: "86vh" },
          display: "flex",
          alignItems: "flex-end",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: { xs: "block", md: "none" },
          }}
        >
          <source src={site.homepageVideoMobile} type="video/mp4" />
        </Box>
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: { xs: "none", md: "block" },
          }}
        >
          <source src={site.homepageVideoDesktop} type="video/mp4" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(23,20,17,0.15) 0%, rgba(23,20,17,0.35) 40%, rgba(23,20,17,0.82) 100%)",
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", pb: { xs: 6, md: 9 } }}>
          <Box sx={{ maxWidth: 760 }}>
            <Typography variant="overline" sx={{ display: "block", mb: 2 }}>
              Classical Christian · K–12
            </Typography>
            <Box sx={{ width: 72, height: 2, bgcolor: "secondary.main", mb: 2.5 }} />
            <Typography
              variant="h1"
              sx={{ color: "#fbf6ee", mb: 2, fontSize: { xs: "2.4rem", md: "4rem" }, fontWeight: 500 }}
            >
              Classical Education at Apex Academy Minnesota
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "secondary.main",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: { xs: "1.2rem", md: "1.7rem" },
                mb: 3,
              }}
            >
              Grounded in Truth. Guided by Wisdom. Marked by Virtue.
            </Typography>
            <Button variant="contained" color="secondary" onClick={openInquiry} size="large">
              Start the Conversation
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.ink, color: "#f4efe6", py: { xs: 4, md: 5 }, borderTop: "1px solid", borderColor: "secondary.main" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 9 }}>
              <Typography variant="h2" sx={{ color: "#f4efe6", fontSize: { xs: "1.35rem", md: "1.85rem" }, fontWeight: 400 }}>
              
Apex Academy Minnesota is an exclusive K-12 and Post Graduate institution that provides quality education and elite training for students. Our knowledgeable staff is committed to the success of our students and their future. We welcome you to explore what we do and how Apex Academy Minnesota can help you achieve your goals.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Button variant="outlined" onClick={openInquiry} sx={{ color: "secondary.main", borderColor: "secondary.main" }}>
                Start the Conversation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <WhatSetsApart />

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ display: "block", textAlign: "center", mb: 1 }}>
            Parent story
          </Typography>
          <Box sx={{ width: 48, height: 2, bgcolor: "secondary.main", mx: "auto", mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
            Hear from a Apex parent about why their family chose a classical Christian education.
          </Typography>
          <IframeEmbed src="https://player.vimeo.com/video/725494617?autoplay=0&autopause=0" title="Vimeo video player 1" height={360} />
        </Container>
      </Box>

      <Pillars />
      <Testimonials />
    </PageFade>
  );
}
