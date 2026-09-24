import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { aboutLinks } from "@/data/site";

const values = [
  {
    title: "Grace",
    lead: "God’s love and holiness lived harmoniously.",
    body: "Grace shapes how we treat one another. It shows up in patience, mercy, and accountability, with a commitment to truth and compassion.",
  },
  {
    title: "Excellence",
    lead: "Noble living.",
    body: "Excellence at Apex  is not perfectionism. It is doing what is right, doing it well, and honoring God through steady effort and integrity.",
  },
  {
    title: "Character",
    lead: "Blameless in God’s eyes.",
    body: "Character is built through daily choices. Students are taught to take responsibility, pursue what is good, and grow in virtue.",
  },
  {
    title: "Knowledge",
    lead: "Cultivating wisdom in pursuit of Truth.",
    body: "Knowledge is more than information. It is learning how to think, how to discern, and how to recognize truth, goodness, and beauty.",
  },
  {
    title: "Ownership",
    lead: "Active stewardship, personal responsibility.",
    body: "Students learn to lead their work, manage commitments, and contribute with purpose. Ownership prepares them for life beyond school, in college, in career, and in service.",
  },
];

export default function CoreValuesPage() {
  return (
    <PageShell
      title="Core Values - Apex Academy Minnesota"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart
      sidebar={<LinkCard title="About" links={aboutLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Core Values
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Core values shape how we teach, how we lead, and how we care for students. At Apex Academy Minnesota, these values guide daily life in the classroom, on campus, and in community.
      </Typography>
      <Grid container spacing={3} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <ContentImage
            src="https://veritasclassical.org/wp-content/uploads/2023/01/GeckoBible2022-184x300.png"
            title="Gecko Bible"
            alt="Gecko Bible"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          {values.map((value) => (
            <Typography key={value.title} variant="body1" sx={{ mb: 2 }}>
              <strong>{value.title}:</strong> {value.lead}
              <br />
              {value.body}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </PageShell>
  );
}
