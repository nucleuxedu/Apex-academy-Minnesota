import PageHero from "@/components/layout/PageHero";
import { PRIVACY } from "@/data/site";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>{PRIVACY.title}</title>
      </Head>
      <PageHero title={PRIVACY.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {PRIVACY.heading}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.85, mb: 2.5, maxWidth: 860 }}>
                  {PRIVACY.intro}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.85, maxWidth: 860 }}>
                  {PRIVACY.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {PRIVACY.securityTitle}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.85, mb: 2.5, maxWidth: 860 }}>
                  {PRIVACY.securityIntro}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.85, maxWidth: 860 }}>
                  {PRIVACY.securityBody}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    href={PRIVACY.supportHref}
                    variant="contained"
                    size="large"
                  >
                    {PRIVACY.supportCta}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
