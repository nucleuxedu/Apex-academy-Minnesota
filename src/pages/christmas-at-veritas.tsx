import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { artsLinks } from "@/data/site";

const shows = [
  "Christmas Around the World: 2015",
  "A Christmas Carol: 2016",
  "Christmas in Egypt: 2017",
  "The Nutcracker: 2018",
  "Charlie Brown: 2019",
  "A Twisted Christmas Carol: 2020",
  "The Jingle Bell Mystery: 2021",
  "Narnia: 2022",
  "Journey Through Time: 2023",
  "Another Christmas Story: 2024",
  "‘Twas The Night Before Christmas: 2025",
];

export default function ChristmasPage() {
  return (
    <PageShell
      title="Christmas at Apex  - Apex Academy Minnesota"
      description="Christmas is a magical time at Apex . Music and drama are an integral part of our Christmas season."
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Christmas at Apex  Through the Years
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Christmas is a magical time at Apex . Music and drama are an integral part of our Christmas season, and students travel through time as they become part of both traditional and contemporary programs that remind us of the reason for the season
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
        Be part of Christmas at Apex !!!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Join us every first week of December as Apex  students awaken the Christmas spirit through a selection of timeless music and drama. Come celebrate with us as we reflect on the reason for Christmas.
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
        We honor each student as an individual, recognizing their unique strengths and areas for growth. Directors guide students through the full process—reading, analysis, and performance—helping them develop confidence, skill, and a strong stage presence.
      </Typography>
    </PageShell>
  );
}
