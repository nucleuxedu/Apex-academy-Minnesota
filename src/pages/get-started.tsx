import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import SiteLink from "@/components/common/SiteLink";
import { knowVeritasLinks, site } from "@/data/site";

export default function GetStartedPage() {
  return (
    <PageShell
      title="Get Started - Veritas Academy"
      description="Follow the steps below to begin the admissions process."
      showWhatSetsApart
      sidebar={<LinkCard title="Know Veritas" links={knowVeritasLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Get Started
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Follow the steps below to begin the admissions process.
      </Typography>

      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 1: Start the Conversation
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Call us at {site.phoneDisplay} to begin the conversation.
      </Typography>
      <Typography variant="body1">During this call, we will:</Typography>
      <List>
        {[
          "Learn more about your student and your family",
          "Understand what you are looking for in a school",
          "Answer any questions you may have",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        You may also access our <SiteLink href={site.faqUrl}>Frequently Asked Questions</SiteLink> (FAQs) for additional information.
      </Typography>

      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 2: Visit Veritas
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Contact us to schedule a time to visit our campus.
      </Typography>
      <Typography variant="body1">During your visit, you will:</Typography>
      <List>
        {[
          "See what your child can expect in daily life at Veritas",
          "Tour the campus",
          "Ask questions and learn more about our approach",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Visits typically last 30–60 minutes.
      </Typography>

      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 3: Complete the Application.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Complete the Intent to Enroll form and setup your Family Account in FACTS.
      </Typography>
      <List>
        <ListItem sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
          Complete the <SiteLink href={site.intentToEnrollUrl}>Intent to Enroll</SiteLink> form
        </ListItem>
        <ListItem sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
          Setup your Family Account in <SiteLink href={site.factsUrl}>FACTS</SiteLink> and pay the enrollment fee
        </ListItem>
      </List>
      <Typography variant="body1">
        After the enrollment fee is received you will receive your payment agreement information and you can setup your payment plan.
      </Typography>
    </PageShell>
  );
}
