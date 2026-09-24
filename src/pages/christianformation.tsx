import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { distinctivesLinks, whatSetsApart } from "@/data/site";

const distinctive = whatSetsApart[1];

export default function ChristianFormationPage() {
  return (
    <PageShell
      title="Christian Formation - Apex Academy Minnesota"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart
      sidebar={<LinkCard title="What Sets Apex Apart" links={distinctivesLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Christian Formation
      </Typography>
      <ContentImage src={distinctive.image} title={distinctive.imageTitle} alt={distinctive.title} sx={{ mb: 3 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, Christian formation is not an addition to education, it is foundational to it.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students are taught to see all of life in light of Biblical truth and to live with wisdom and virtue. Faith is not confined to a single class or moment, but is woven throughout the day—in instruction, relationships, expectations, and daily life together.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students are guided to think clearly, act responsibly, and develop habits that reflect a life ordered toward what is true, good, and beautiful. They are known, challenged, and encouraged to grow in both understanding and maturity.
      </Typography>
      <Typography variant="body1">
        In a culture that often pulls in competing directions, Apex provides clarity, consistency, and direction—helping students develop a steady foundation for both learning and life.
      </Typography>
    </PageShell>
  );
}
