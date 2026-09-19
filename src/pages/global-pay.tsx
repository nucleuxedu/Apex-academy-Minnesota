import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import ExperienceVeritas from "@/components/sections/ExperienceVeritas";
import SiteLink from "@/components/common/SiteLink";
import { lifeAtVeritasLinks, site } from "@/data/site";

const walkthroughs = [
  { label: "English", href: "https://youtu.be/gZN_JUp9kHM" },
  { label: "Korean", href: "https://www.youtube.com/watch?v=uWzQxTGslOk" },
  { label: "Cantonese", href: "https://youtu.be/1VBFBYa1LbU" },
  { label: "Mandarin", href: "https://youtu.be/ATRFyrm4tIk" },
  { label: "French", href: "https://youtu.be/wgnpaUV98NI" },
  { label: "Spanish", href: "https://youtu.be/wQIQH5bATXM" },
  { label: "Indonesian", href: "https://youtu.be/kMfkVqyawmY" },
  { label: "Hindi", href: "https://youtu.be/WQu4rdzZt7g" },
  { label: "Japanese", href: "https://youtu.be/y487x4VoUAw" },
  { label: "French Canadian", href: "https://youtu.be/JJdXize4daE" },
  { label: "Arabic", href: "https://youtu.be/isxUiD2_zGI" },
];

export default function GlobalPayPage() {
  return (
    <PageShell
      title="Global Pay - Veritas Academy"
      description="Veritas Academy and Convera GlobalPay for Students have partnered through FACTS to provide a convenient way for you to make payments."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Life at Veritas" links={lifeAtVeritasLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Global Pay
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Veritas Academy and Convera GlobalPay for Students have partnered through FACTS to provide a convenient way for you to make payments for your tuition and other fees. This allows you to pay in your home currency, either online or by bank transfer, with competitive exchange rates and takes the stress and uncertainty out of paying for your tuition.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You can make a payment from a wide selection of payment methods that are popular in your home country including: WeChat Pay, ALIPAY, UnionPay, ChinaPay and many more.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2023/03/GlobalPaymentOptions.png" alt="Global payment options" sx={{ mb: 2 }} />
      <Typography variant="body1">Benefits of Convera GlobalPay for Students:</Typography>
      <List>
        {[
          "Pay tuition in your local currency.",
          "Pay online from your mobile, tablet, desktop devices or by bank transfer.",
          "Rest assured knowing your payments are received in full by Veritas Academy.",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
        <ListItem sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
          Make your payment every step of the way with status updates by text or email.{" "}
          <SiteLink href={site.converaPayUrl}>Make your payment</SiteLink>
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Enjoy our step-by-step walkthrough video for GlobalPay for Students (payment portal) in your native language.
      </Typography>
      <Stack direction="row" useFlexGap sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
        {walkthroughs.map((item) => (
          <Button key={item.label} size="small" variant="outlined" href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </Button>
        ))}
      </Stack>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Need Help?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If you are unable to make a payment using Convera GlobalPay for Students, email <SiteLink href="mailto:joeste@convera.com">joeste@convera.com</SiteLink> or call 1-877-218-8829 toll free for assistance.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3, alignItems: "center" }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2023/03/Global-Price-Promise-200x96.png" alt="Global Price Promise" />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="body1">
            Receive best rate guarantee via WU® GlobalPay for Students Price Promise. *Disclaimer: If you find a lower price from your bank, we will match it. Email{" "}
            <SiteLink href="mailto:pricepromise@westernunion.com">pricepromise@westernunion.com</SiteLink> with GlobalPay for Students reference plus screenshots of the quote from your bank. Terms and Conditions apply.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/07/PoolTable-1024x768.png" title="Pool Table" alt="Pool Table" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/07/Brinks-1024x768.png" title="Brinks" alt="Brinks" />
        </Grid>
      </Grid>
      <ExperienceVeritas />
    </PageShell>
  );
}
