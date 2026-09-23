import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { distinctivesLinks, whatSetsApart } from "@/data/site";

const distinctive = whatSetsApart[3];
const teacherQualities = [
  "Are trained in classical Christian education",
  "Have experience working with children and adolescents",
  "Are committed to clear instruction, strong relationships, and consistent expectations",
];

export default function IntentionalTeachingPage() {
  return (
    <PageShell
      title="Intentional Teaching - Apex Academy Minnesota"
      description="At Apex Academy Minnesota, teachers know their students and teach with both care and clarity."
      showWhatSetsApart
      sidebar={<LinkCard title="What Sets Apex Apart" links={distinctivesLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Intentional Teaching
      </Typography>
      <ContentImage src={distinctive.image} title={distinctive.imageTitle} alt={distinctive.title} sx={{ mb: 3 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, teachers know their students and teach with both care and clarity.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students are supported, challenged, and held accountable in a structured environment. Teachers build strong relationships with students while maintaining clear expectations for behavior, effort, and responsibility.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Instruction is purposeful and consistent. Teachers guide students to think carefully, work diligently, and take ownership of their learning. This combination of relationship and structure allows students to grow in both understanding and maturity.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Families are an essential part of this process. Teachers communicate regularly with parents and work together to support each student’s development.
      </Typography>
      <Typography variant="body1">Our teachers:</Typography>
      <List>
        {teacherQualities.map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
    </PageShell>
  );
}
