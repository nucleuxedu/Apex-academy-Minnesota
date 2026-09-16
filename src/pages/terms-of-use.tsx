import PageHero from "@/components/layout/PageHero";
import { TERMS } from "@/data/site";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>{TERMS.title}</title>
      </Head>
      <PageHero title="Terms of Use" subtitle={TERMS.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              {TERMS.heading}
            </Typography>
            <Typography sx={{ fontSize: 18, lineHeight: 1.85, maxWidth: 860 }}>
              {TERMS.body}
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {TERMS.supportTitle}
              </Typography>
              <Button
                component={Link}
                href={TERMS.supportHref}
                variant="contained"
                size="large"
              >
                {TERMS.supportCta}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
