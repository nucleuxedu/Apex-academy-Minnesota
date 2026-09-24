import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import NextLink from "next/link";
import { site } from "@/data/site";
import { colors } from "@/theme/theme";

function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found - Apex Academy Minnesota</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          bgcolor: colors.ink,
          color: colors.platinum,
        }}
      >
        <Container maxWidth="sm" sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
          <Box
            component={NextLink}
            href="/"
            sx={{ display: "inline-flex", mb: 4 }}
          >
            <Box
              component="img"
              src={site.logo.src}
              alt={site.logo.alt}
              sx={{ height: { xs: 72, md: 96 }, width: "auto" }}
            />
          </Box>
          <Typography
            variant="overline"
            sx={{ display: "block", mb: 1.5, color: "secondary.main" }}
          >
            Error
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "#f4f5f7",
              letterSpacing: "0.18em",
              mb: 2,
              fontSize: { xs: "4.5rem", md: "6.5rem" },
            }}
          >
            404
          </Typography>
          <Box sx={{ width: 56, height: 2, bgcolor: "secondary.main", mx: "auto", mb: 3 }} />
          <Typography variant="h2" sx={{ color: "#f4f5f7", mb: 2, fontSize: { xs: "1.4rem", md: "1.75rem" } }}>
            This page could not be found
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(232,234,238,0.72)", mb: 4 }}>
            The page you requested is not available. Return home or contact Apex Academy Minnesota and we will help you find the right place.
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
            <Button component={NextLink} href="/" variant="contained" color="secondary">
              Return Home
            </Button>
            <Button
              component={NextLink}
              href="/contact-us"
              variant="outlined"
              sx={{ color: "secondary.main", borderColor: "secondary.main" }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

NotFoundPage.hideChrome = true;

export default NotFoundPage;
