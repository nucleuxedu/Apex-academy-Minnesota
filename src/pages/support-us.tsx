import PageHero from "@/components/layout/PageHero";
import { SITE, SUPPORT } from "@/data/site";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function SupportUsPage() {
  return (
    <>
      <Head>
        <title>{SUPPORT.title}</title>
      </Head>
      <PageHero title={SUPPORT.heading} subtitle={SUPPORT.join} />
      <Box
        sx={{
          minHeight: 280,
          backgroundImage: `linear-gradient(180deg, rgba(16,31,70,0.35), rgba(16,31,70,0.55)), url(${SITE.images.support})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography sx={{ maxWidth: 860, mb: 3, fontSize: 18, lineHeight: 1.85 }}>
          {SUPPORT.intro}
        </Typography>
        <Button
          component={Link}
          href="/tuition-and-fees"
          variant="outlined"
          size="large"
          sx={{ mb: 6 }}
        >
          {SUPPORT.eventsCta}
        </Button>

        <Typography variant="h4" sx={{ mb: 1 }}>
          {SUPPORT.involved}
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 400 }}>
          {SUPPORT.waysTitle}
        </Typography>
        <Grid container spacing={3}>
          {SUPPORT.ways.map((way) => (
            <Grid key={way.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {way.title}
                  </Typography>
                  <Typography sx={{ whiteSpace: "pre-line", mb: 3, lineHeight: 1.8 }}>
                    {way.body}
                  </Typography>
                  {"cta" in way && way.cta && "href" in way && way.href ? (
                    <Button
                      href={way.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                    >
                      {way.cta}
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
