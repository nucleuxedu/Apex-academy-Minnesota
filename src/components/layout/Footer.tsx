import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NextLink from "next/link";
import { site } from "@/data/site";
import SiteLink from "@/components/common/SiteLink";
import { colors } from "@/theme/theme";
import { useInquiry } from "@/components/common/InquiryDialog";

export default function Footer() {
  const year = new Date().getFullYear();
  const { openInquiry } = useInquiry();

  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box
        sx={{
          bgcolor: colors.ink,
          color: "#f4efe6",
          pt: { xs: 6, md: 8 },
          pb: { xs: 5, md: 6 },
          borderTop: "3px solid",
          borderColor: "secondary.main",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                component={NextLink}
                href="/"
                sx={{
                  display: "inline-flex",
                  mb: 2.5,
                }}
              >
                <Box
                  component="img"
                  src={site.logo.src}
                  srcSet={`${site.logo.src} 1x, ${site.logo.retina} 2x`}
                  alt={site.logo.alt}
                  sx={{ height: 52, width: "auto" }}
                />
              </Box>
              <Typography
                variant="h3"
                sx={{ color: "#fbf6ee", fontStyle: "italic", fontWeight: 400, mb: 2, fontSize: "1.35rem" }}
              >
                {site.tagline}
              </Typography>
              <Button variant="contained" color="secondary" onClick={openInquiry} href={`mailto:${site.email}`}>
                Inquire
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="overline" sx={{ display: "block", mb: 2 }}>
                CONTACT US
              </Typography>
              <Stack spacing={2}>
                {site.locations.map((loc) => (
                  <Box
                    key={loc.title}
                    sx={{
                      pl: 1.5,
                      borderLeft: "2px solid",
                      borderColor: "secondary.main",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#fbf6ee", fontWeight: 700, mb: 0.25 }}>
                      {loc.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(244,239,230,0.78)" }}>
                      {loc.lines[0]}
                      <br />
                      {loc.lines[1]}
                    </Typography>
                  </Box>
                ))}
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                  <PhoneIcon sx={{ color: "secondary.main", fontSize: 18 }} />
                  <SiteLink href={`tel:${site.phoneTel}`} sx={{ color: "#f4efe6" }}>
                    {site.phoneDisplay}
                  </SiteLink>
                </Box>
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
                  <EmailIcon sx={{ color: "secondary.main", fontSize: 18 }} />
                  <SiteLink href={`mailto:${site.email}`} sx={{ color: "#f4efe6" }}>
                    {site.email}
                  </SiteLink>
                </Box>
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                  <AccessTimeIcon sx={{ mt: 0.25, color: "secondary.main", fontSize: 18 }} />
                  <Typography variant="body2" sx={{ color: "rgba(244,239,230,0.8)" }}>
                    {site.hours}
                  </Typography>
                </Box>
              </Stack>
            </Grid>


            <Grid size={{ xs: 12, md: 2 }}>
              <Typography variant="overline" sx={{ display: "block", mb: 2 }}>
                LET’S CONNECT
              </Typography>
              <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap" }}>
                {site.social.map((item) => (
                  <IconButton
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    sx={{
                      color: colors.ink,
                      bgcolor: "secondary.main",
                      borderRadius: 0,
                      width: 42,
                      height: 42,
                      "&:hover": { bgcolor: "#dfe3ea" },
                    }}
                  >
                    {item.label === "Facebook" ? <FacebookIcon /> : item.label === "Instagram" ? <InstagramIcon /> : <EmailIcon />}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#050505",
          color: "rgba(232,234,238,0.72)",
          py: 2.25,
          borderTop: "1px solid",
          borderColor: "rgba(197,201,209,0.22)",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" sx={{ color: "inherit", fontSize: "0.85rem", lineHeight: 1.7 }}>
            © {year} · {site.copyright} |{" "}
            <SiteLink href="/privacy-policy" sx={{ color: "secondary.main" }}>
              Privacy Policy
            </SiteLink>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
