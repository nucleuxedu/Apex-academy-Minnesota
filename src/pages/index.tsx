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
        <title>Veritas Academy Classical Education - Veritas Academy Chisago City MN</title>
        <meta
          name="description"
          content="Veritas Academy is a private school, in Chisago City, MN, where we love well in pursuit of Excellence, through a classical education."
        />
      </Head>

      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 420, md: 560 },
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
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(10,19,35,0.28)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", pb: 6 }}>
          <Box
            sx={{
              ml: { md: "auto" },
              maxWidth: { xs: "100%", md: 640 },
              bgcolor: "rgba(58,58,58,0.7)",
              p: { xs: 2.5, md: 4 },
              textAlign: "center",
            }}
          >
            <Typography variant="h1" sx={{ color: "white", mb: 1.5, fontSize: { xs: "1.7rem", md: "2.4rem" } }}>
              <strong>Classical Education at Veritas Academy</strong>
            </Typography>
            <Typography variant="h2" sx={{ color: "white", fontStyle: "italic", fontSize: { xs: "1.15rem", md: "1.5rem" } }}>
              Grounded in Truth. Guided by Wisdom. Marked by Virtue.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: colors.burgundy, color: "white", py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 9 }}>
              <Typography variant="h2" sx={{ color: "white", fontSize: { xs: "1.2rem", md: "1.45rem" } }}>
                A classical Christian, K-12 school that grounds students in Biblical truth, providing academic and spiritual foundations for college bound students.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: "left", md: "center" } }}>
              <Button variant="contained" color="secondary" onClick={openInquiry}>
                Start the Conversation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <WhatSetsApart />

      <Box sx={{ py: 4, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hear from a Veritas parent about why their family chose a classical Christian education.
          </Typography>
          <IframeEmbed src="https://player.vimeo.com/video/725494617?autoplay=0&autopause=0" title="Vimeo video player 1" height={360} />
        </Container>
      </Box>

      <Pillars />
      <Testimonials />
    </PageFade>
  );
}
