import SiteForm from "@/components/forms/SiteForm";
import PageHero from "@/components/layout/PageHero";
import { CONTACT, SITE } from "@/data/site";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{CONTACT.title}</title>
      </Head>
      <PageHero title={CONTACT.heading} subtitle={CONTACT.reach} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                minHeight: 280,
                mb: 3,
              }}
            >
              <Image
                src={SITE.images.contact}
                alt="Minnesota Preparatory Academy"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography variant="h6">{SITE.name}</Typography>
            <Typography sx={{ mt: 1 }}>{SITE.address}</Typography>
            <Typography sx={{ mt: 1 }}>
              <MuiLink href={`mailto:${SITE.emails.contact}`}>
                {SITE.emails.contact}
              </MuiLink>{" "}
              |{" "}
              <MuiLink href={SITE.phoneHref}>{SITE.phone}</MuiLink>
            </Typography>
            <Card sx={{ mt: 4, bgcolor: "primary.main", color: "common.white" }}>
              <CardContent>
                <Typography variant="h5">{CONTACT.supportCta}</Typography>
                <Button
                  component={Link}
                  href="/support-us"
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                >
                  {CONTACT.contribute}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  {CONTACT.reach}
                </Typography>
                <SiteForm
                  fields={CONTACT.fields}
                  submitLabel="Submit"
                  successMessage={CONTACT.success}
                  endpoint="/api/contact"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
