import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { distinctivesLinks, whatSetsApart } from "@/data/site";

const distinctive = whatSetsApart[2];
const whoItHelps = [
  "are not being challenged at their current level",
  "need a stronger academic foundation",
  "benefit from a more structured and intentional environment",
];

export default function AcademicPlacementPage() {
  return (
    <PageShell
      title="Academic Placement - Apex Academy Minnesota"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart
      sidebar={<LinkCard title="What Sets Apex Apart" links={distinctivesLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Academic Placement
      </Typography>
      <ContentImage src={distinctive.image} title={distinctive.imageTitle} alt={distinctive.title} sx={{ mb: 3 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, students are placed according to ability and readiness, not simply by age.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This allows each student to be appropriately challenged without being overwhelmed. Some students move ahead in certain subjects, while others receive the time and support needed to build a strong foundation.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Instruction is clear, structured, and purposeful. Students are expected to engage, think carefully, and take responsibility for their work. This leads to steady progress, stronger understanding, and greater confidence over time.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Rather than pushing students forward too quickly or holding them back unnecessarily, we seek to place them where they can grow well, academically and personally.
      </Typography>
      <Typography variant="body1">This approach is especially helpful for students who:</Typography>
      <List>
        {whoItHelps.map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
    </PageShell>
  );
}
