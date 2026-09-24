import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PageShell from "@/components/layout/PageShell";
import IframeEmbed from "@/components/common/IframeEmbed";
import LinkCard from "@/components/sections/LinkCard";
import SiteLink from "@/components/common/SiteLink";
import { knowVeritasLinks, site } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us - Apex Academy Minnesota Chisago City MN"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      sidebar={<LinkCard title="Know Apex " links={knowVeritasLinks} />}
    >
      <Typography variant="h1" align="center" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 1 }}>
        Call us at {site.phoneDisplay} or complete the inquiry form below. We will follow up with you shortly.
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 3 }}>
        You may also review our{" "}
        <SiteLink href={site.faqUrl}>Frequently Asked Questions</SiteLink> (FAQ).
      </Typography>
      <Typography variant="h2" align="center" sx={{ mb: 2 }}>
        Inquiry Form
      </Typography>
      <Box sx={{ minHeight: 625 }}>
        <IframeEmbed src={site.contactFormSrc} title="Contact Form Website" height={625} />
      </Box>
    </PageShell>
  );
}
