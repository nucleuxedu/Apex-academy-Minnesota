import { HOME, SITE } from "@/data/site";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{HOME.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: 560, md: 680 },
          display: "flex",
          alignItems: "center",
          color: "common.white",
          background: "linear-gradient(135deg, #0A142E 0%, #101F46 45%, #213E8C 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${SITE.images.contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,20,46,0.92) 0%, rgba(16,31,70,0.82) 55%, rgba(33,62,140,0.55) 100%)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 10, md: 14 } }}>
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", letterSpacing: 3, fontWeight: 700 }}
          >
            {HOME.empowerment}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 36, sm: 52, md: 72 }, maxWidth: 900 }}>
            {HOME.welcome}
          </Typography>
          <Typography variant="h5" sx={{ mt: 3, maxWidth: 720, fontWeight: 400, opacity: 0.92 }}>
            {HOME.vision}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
            <Button
              component={Link}
              href="/application-inquiry"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Apply Now
            </Button>
            <Button
              component={Link}
              href="/admissions"
              variant="outlined"
              size="large"
              sx={{ color: "common.white", borderColor: "rgba(255,255,255,0.5)" }}
            >
              Admissions & Enrollment
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={3}>
          {HOME.cards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    {card.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3, minHeight: 72 }}>
                    {card.description}
                  </Typography>
                  <Button
                    component={Link}
                    href={card.href}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {card.title}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "background.paper", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
                {HOME.empowerSuccess}
              </Typography>
              <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>
                {HOME.join}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.8 }}>
                {HOME.intro}
              </Typography>
              <Button
                component={Link}
                href="/support-us"
                variant="contained"
                size="large"
                sx={{ mt: 4 }}
              >
                Support Us
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  minHeight: { xs: 280, md: 380 },
                  backgroundImage: `linear-gradient(180deg, rgba(16,31,70,0.15), rgba(16,31,70,0.55)), url(${SITE.images.support})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
