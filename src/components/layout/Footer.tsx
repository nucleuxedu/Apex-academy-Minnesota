import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { site } from "@/data/site";
import SiteLink from "@/components/common/SiteLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box sx={{ bgcolor: "#faf9f8", py: { xs: 5, md: 7 }, borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: "1.05rem", letterSpacing: 0.6 }}>
                CONTACT US
              </Typography>
              <Stack spacing={1.5}>
                {site.locations.map((loc) => (
                  <Box key={loc.title} sx={{ display: "flex", gap: 1.25 }}>
                    <HomeIcon color="primary" fontSize="small" sx={{ mt: 0.4 }} />
                    <Typography variant="body2" color="text.primary">
                      <strong>{loc.title}</strong>
                      <br />
                      {loc.lines[0]}
                      <br />
                      {loc.lines[1]}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                  <PhoneIcon color="primary" fontSize="small" />
                  <SiteLink href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</SiteLink>
                </Box>
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                  <EmailIcon color="primary" fontSize="small" />
                  <SiteLink href={`mailto:${site.email}`}>{site.email}</SiteLink>
                </Box>
                <Box sx={{ display: "flex", gap: 1.25 }}>
                  <AccessTimeIcon color="primary" fontSize="small" sx={{ mt: 0.3 }} />
                  <Typography variant="body2">{site.hours}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: "1.05rem", letterSpacing: 0.6 }}>
                Download Android App
              </Typography>
              <SiteLink href={site.apps.android.href}>
                <Box
                  component="img"
                  src={site.apps.android.image}
                  alt={site.apps.android.alt}
                  sx={{ width: "100%", maxWidth: 220, display: "block", mx: "auto" }}
                />
              </SiteLink>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: "1.05rem", letterSpacing: 0.6 }}>
                Download iOS App
              </Typography>
              <SiteLink href={site.apps.ios.href}>
                <Box
                  component="img"
                  src={site.apps.ios.image}
                  alt={site.apps.ios.alt}
                  sx={{ width: "100%", maxWidth: 220, display: "block", mx: "auto" }}
                />
              </SiteLink>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, fontSize: "1.05rem", letterSpacing: 0.6 }}>
                LET’S CONNECT
              </Typography>
              <Box>
                <IconButton color="primary" href={site.social[0].href} aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" href={site.social[1].href} aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" href={site.social[2].href} aria-label="Mail">
                  <EmailIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 2, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.92)" }}>
            © {year} · {site.copyright} |{" "}
            <SiteLink href="/privacy-policy" sx={{ color: "white" }}>
              Privacy Policy
            </SiteLink>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
