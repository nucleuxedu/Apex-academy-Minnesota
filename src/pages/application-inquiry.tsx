import SiteForm from "@/components/forms/SiteForm";
import PageHero from "@/components/layout/PageHero";
import { INQUIRY, SITE } from "@/data/site";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";

const socialIcons = [
  { label: "Facebook", href: "https://www.facebook.com/wix", Icon: FacebookIcon },
  { label: "Twitter", href: "https://www.twitter.com/wix", Icon: TwitterIcon },
  { label: "YouTube", href: "https://www.youtube.com/user/Wix", Icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/wix", Icon: InstagramIcon },
];

export default function ApplicationInquiryPage() {
  return (
    <>
      <Head>
        <title>{INQUIRY.title}</title>
      </Head>
      <PageHero title={INQUIRY.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography sx={{ fontSize: 18, lineHeight: 1.85, mb: 3 }}>
              {INQUIRY.intro}
            </Typography>
            <Typography variant="h6">{SITE.name}</Typography>
            <Typography sx={{ mt: 1 }}>{SITE.address}</Typography>
            <Typography sx={{ mt: 1 }}>
              <MuiLink href={SITE.phoneHref}>{SITE.phone}</MuiLink>
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <MuiLink href={`mailto:${SITE.emails.inquiry}`}>
                {SITE.emails.inquiry}
              </MuiLink>
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {socialIcons.map(({ label, href, Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  color="primary"
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <SiteForm
                  fields={INQUIRY.fields}
                  submitLabel="Send"
                  successMessage={INQUIRY.success}
                  endpoint="/api/inquiry"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
