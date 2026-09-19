import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PageShell from "@/components/layout/PageShell";
import IframeEmbed from "@/components/common/IframeEmbed";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import SiteLink from "@/components/common/SiteLink";
import { programLinks, site, whyChooseVeritasAlt } from "@/data/site";

const quotes = [
  "“The minute I walked through the doors of Veritas, I knew things would be different this time. I don’t have to worry about bullying here. We are all like a family. The teachers truly and honestly care about us.”",
  "“Class sizes were small, instruction was differentiated to the individual students.”",
  "“The school recognized my children’s abilities right away, and taught them at their skill level instead of their ages. Today, my 8 year old is taking 5th grade math and my 10 year old is taking pre-algebra.”",
];

const videos = [
  "https://player.vimeo.com/video/725494577?autoplay=0&autopause=0",
  "https://player.vimeo.com/video/725494603?autoplay=0&autopause=0",
  "https://player.vimeo.com/video/725494617?autoplay=0&autopause=0",
  "https://player.vimeo.com/video/725494631?autoplay=0&autopause=0",
  "https://player.vimeo.com/video/725494667?autoplay=0&autopause=0",
];

export default function TestimonialsPage() {
  return (
    <PageShell
      title="What Parents Are Saying - Veritas Academy"
      description="Hear why other parents are choosing Veritas."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Academic Levels" links={programLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 3 }}>
        Hear why other parents are choosing Veritas
      </Typography>
      {quotes.map((quote) => (
        <Typography key={quote} variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
          {quote}
        </Typography>
      ))}
      <Grid container spacing={2} sx={{ my: 2 }}>
        {videos.map((src, i) => (
          <Grid key={src} size={{ xs: 12, md: 6 }}>
            <IframeEmbed src={src} title={`Vimeo video player ${i + 1}`} height={320} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" sx={{ mt: 2, mb: 1 }}>
        STEP 1
      </Typography>
      <Typography variant="body1">Call us at {site.admissionsPhoneDisplay}. The goals for this initial call are:</Typography>
      <List>
        {[
          "To learn more about you and your family",
          "To learn about what is important to your family in regards to education",
          "For you to ask us any questions you have",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You may also access our <SiteLink href={site.faqUrl}>Frequently Asked Questions</SiteLink> (FAQs) here.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <SiteLink href="https://veritasclassical.org/step-2/">Step 2</SiteLink>
      </Typography>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Why Choose Veritas?
      </Typography>
      <Grid container spacing={3}>
        {whyChooseVeritasAlt.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
            <Card>
              <ContentImage src={item.image} title={item.imageTitle} alt={item.title} sx={{ borderRadius: 0 }} />
              <CardContent>
                <Typography variant="h4" align="center" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.body} <SiteLink href={item.href}>Learn more.</SiteLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageShell>
  );
}
