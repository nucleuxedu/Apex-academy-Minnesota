import NewsletterForm from "@/components/forms/NewsletterForm";
import { QUICK_LINKS, SITE } from "@/data/site";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        background:
          "linear-gradient(180deg, #0A142E 0%, #101F46 60%, #0A142E 100%)",
        color: "common.white",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">{SITE.name}</Typography>
            <Typography sx={{ mt: 1.5, opacity: 0.86 }}>
              {SITE.address}
            </Typography>
            <Typography sx={{ mt: 1, opacity: 0.86 }}>
              Phone:{" "}
              <MuiLink href={SITE.phoneHref} color="secondary">
                {SITE.phone}
              </MuiLink>
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
              {SITE.social.map((item) => {
                const Icon = socialIcons[item.label];
                return (
                  <IconButton
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    sx={{ color: "common.white" }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {QUICK_LINKS.map((link) => (
                <MuiLink
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  color="inherit"
                  sx={{ opacity: 0.88, width: "fit-content" }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <NewsletterForm dark />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.16)" }} />

        <Typography variant="body2" sx={{ opacity: 0.78 }}>
          © 2024. All Rights Reserved Minnesota Preparatory Academy |{" "}
          <MuiLink component={NextLink} href={SITE.termsUrl} color="inherit">
            Terms of Use
          </MuiLink>{" "}
          |{" "}
          <MuiLink component={NextLink} href={SITE.privacyUrl} color="inherit">
            Privacy Policy
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
