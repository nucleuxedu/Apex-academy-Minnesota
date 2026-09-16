import PageHero from "@/components/layout/PageHero";
import { ACADEMICS } from "@/data/site";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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

export default function AcademicsPage() {
  return (
    <>
      <Head>
        <title>{ACADEMICS.title}</title>
      </Head>
      <PageHero title={ACADEMICS.heading} subtitle={ACADEMICS.acellus} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="overline" color="primary">
                  {ACADEMICS.postGradTitle}
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {ACADEMICS.pseoTitle}
                </Typography>
                <Typography sx={{ mb: 3, fontSize: 17, lineHeight: 1.8 }}>
                  {ACADEMICS.pseoBody}
                </Typography>
                <Button
                  href={ACADEMICS.sophiaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                >
                  Sophia Learning
                </Button>
                <Box sx={{ mt: 2 }}>
                  <MuiLink
                    href={ACADEMICS.sophiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ACADEMICS.sophiaUrl}
                  </MuiLink>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", bgcolor: "primary.main", color: "common.white" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {ACADEMICS.internationalTitle}
                </Typography>
                <Typography sx={{ fontSize: 20, lineHeight: 1.7 }}>
                  {ACADEMICS.internationalBody}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
