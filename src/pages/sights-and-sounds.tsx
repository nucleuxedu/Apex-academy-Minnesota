import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { artsLinks } from "@/data/site";

const shows = [
  "May the 4th Be With You: 2017",
  "Wakanda: 2018",
  "The Lion King: 2019",
  "A Tale of Two Cities – The Musical: 2022",
  "A Red, White , and Blue Concert: 2024",
  "Esther: The Musical: 2025",
  "The Adventures of Oliver Twist: 2026",
];

export default function SightsAndSoundsPage() {
  return (
    <PageShell
      title="Sights and Sounds - Apex Academy Minnesota"
      description="Sights and Sounds is a highlight of the spring season at Apex."
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Sights and Sounds at Apex Through the Years
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Sights and Sounds is a highlight of the spring season at Apex. Theatre and music are integral to this time of year, as students bring stories to life on stage through both classic and contemporary productions that engage, delight, and inspire.
      </Typography>
      <Typography variant="body1">Past shows include:</Typography>
      <List>
        {shows.map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Be part of Sights and Sounds at Apex!!!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Join us each first week of May as Apex students bring stories to life through theatre and music. Come and experience an afternoon that engages, delights, and inspires.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/04/Narnia-Witch.png" title="The Narnia Witch" alt="The Narnia Witch" sx={{ mb: 1 }} />
      <Typography variant="h4">Performance Opportunities</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our annual Christmas program and spring Sights and Sounds production provide two primary opportunities to showcase student work. Through both classical and contemporary themes, we integrate language arts with the performing arts, allowing students to bring literature, history, and ideas to life on stage.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/04/Production-TOTC.png" title="Rehearsal" alt="Rehearsal" sx={{ mb: 1 }} />
      <Typography variant="h4">Theatrical Production</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our productions use live performance to tell meaningful stories that shape understanding and character. Through drama, students encounter the great works of the Western tradition while developing confidence, expression, and collaboration. Families are an important part of this process, contributing through areas such as costume design and props.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/04/Nutcracker-All-Ages.png" title="Nutcracker All Ages" alt="Nutcracker All Ages" sx={{ mb: 1 }} />
      <Typography variant="h4">All Ages Participation</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We thoughtfully consider the age, maturity, and readiness of each student when selecting material. Scripts are chosen to be both appropriate and meaningful, aligning with our values. Every student is given the opportunity to participate and grow through the experience of performance.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/04/Individual-Coaching.png" title="Individual Coaching" alt="Individual Coaching" sx={{ mb: 1 }} />
      <Typography variant="h4">Individual Coaching</Typography>
      <Typography variant="body1">
        We honor each student as an individual, recognizing their unique strengths and areas for growth. Directors guide students through the full process—reading, analysis, and performance, helping them develop confidence, skill, and a strong stage presence.
      </Typography>
    </PageShell>
  );
}
