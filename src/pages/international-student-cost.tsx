import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import ExperienceVeritas from "@/components/sections/ExperienceVeritas";
import Attractions from "@/components/sections/Attractions";
import { exploreLinks } from "@/data/site";

export default function InternationalStudentCostPage() {
  return (
    <PageShell
      title="International Students Cost - Veritas Academy"
      description="The international student program cost is broken down below."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Explore Veritas" links={exploreLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Cost of Studying at Veritas
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        The international student program cost is broken down below:
      </Typography>
      <List>
        {[
          "$18,500/year: International students’ tuition.",
          "$15,000/year: Room and board for on campus living.",
          "$2,400/year: Medical insurance premium.",
          "$1,000: Uniform, personal school supplies and any additional items such as winter boots and coat).",
          "$3,000: Activities Fee.",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Total: $39,900
      </Typography>
      <ExperienceVeritas />
      <Attractions title="Most Popular Attractions" useAltLabels />
    </PageShell>
  );
}
