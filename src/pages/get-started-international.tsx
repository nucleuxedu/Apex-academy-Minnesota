import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import ExperienceVeritas from "@/components/sections/ExperienceVeritas";
import SiteLink from "@/components/common/SiteLink";
import { lifeAtVeritasLinks, site } from "@/data/site";

export default function GetStartedInternationalPage() {
  return (
    <PageShell
      title="International Student Get Started - Apex Academy Minnesota"
      description="Follow the steps below to begin the international student admissions process."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Life at Apex" links={lifeAtVeritasLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Get Started
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Follow the steps below to begin the international student admissions process.
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 1: Apply.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Complete your <SiteLink href={site.internationalApplicationUrl}>international student application</SiteLink> form below. The goals for this initial steps are:
      </Typography>
      <List>
        {[
          "To learn more about you and your family",
          "To learn about what is important to your family in regards to education (your essay will help us know you)",
          "To provide the information we will need for your I20 form",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Button variant="contained" href={site.internationalApplicationUrl} target="_blank" rel="noopener noreferrer" sx={{ mb: 2 }}>
        Apply Now
      </Button>
      <Typography variant="body1" sx={{ mb: 3 }}>
        You may also access our <SiteLink href={site.internationalFaqUrl}>Frequently Asked Questions</SiteLink> (FAQs) here.
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 2: Receive a Form I-20.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        This is an important step in your application process. To receive the Form I-20, you need the following:
      </Typography>
      <List>
        {[
          "Complete your application form (Step 1).",
          "Complete an affidavit of Financial Financial Support (you will receive the form through email after we receive your application in SEVP Step 1).",
          "Provide evidence of English Language proficiency either through TOEFL (Test of English as a Foreign Language) or iTEP (International Test of English Proficiency), or demonstrate proficiency through a video conference.",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Expect this step to take 2 – 4 weeks.
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Step 3: Apply for Student Visa
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Visa processing times vary by country. You may check your estimated Visa Appointment Wait Times for your city{" "}
        <SiteLink href={site.visaWaitTimesUrl}>here</SiteLink>. Before you apply, you will need:
      </Typography>
      <List>
        {[
          "Check your I-20 Form to be sure everything is accurate and that the name on the form matches your passport.",
          "Pay the I-901 SEVIS Fee here.",
          "Schedule your visa appointment at your nearest US embassy or consulate office.",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item === "Pay the I-901 SEVIS Fee here." ? (
              <>
                Pay the I-901 SEVIS Fee <SiteLink href={site.sevisFeeUrl}>here</SiteLink>.
              </>
            ) : (
              item
            )}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        As a member of the Association of Classical & Christian Schools (ACCS), Apex Academy Minnesota is committed to providing the best possible education to help your child reach their God-given potential. As our society faces unending challenges that threaten the fabric of our culture and long held values, Apex Academy Minnesota is committed to ensuring that every person that comes to us knows that they have infinite value and worth and that they are seen, loved, cared for, and protected.
      </Typography>
      <ExperienceVeritas title="Why Choose Apex?" />
    </PageShell>
  );
}
