import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { programLinks } from "@/data/site";

export default function AthleticsPage() {
  return (
    <PageShell
      title="Athletics - Apex Academy Minnesota"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart
      sidebar={<LinkCard title="Program Overview" links={programLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Apex  and Athletics
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2024/09/Cristian_Victory.png" alt="Athletics victory" sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
        Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize (1 Corinthians 9:24).
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        In the logic and rhetoric stages, students begin to take athletics seriously as their interests and skills become more developed. Our athletics program is relatively young, and our current and future options include:
      </Typography>
      <List>
        {["Basketball", "Rowing", "Soccer", "Swimming", "Volleyball", "and more…"].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Note that some options are seasonal depending on weather. Students not participating in competitive sports are still required to participate in Physical Education.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Philosophy of Athletics at Apex 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Athletics at Apex Academy Minnesota provides opportunities for students to learn sportsmanship within a Biblical context. Since God has seen fit to integrate the material and the immaterial, the visible and the invisible, we strive to teach our students that God is glorified in how they use their bodies, as well as their minds and spirits. Beginning with physical education in the lower grades, we instill in our students the Biblical principles found in the following Scripture verses:
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength (Mark 12:30).
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For whether you eat or sleep, or whatever you do, do it for the glory of God (I Corinthians 10:31)
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2024/09/PrayFirst_Athletics.png" alt="Pray first athletics" sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        Just as children need to learn the sounds of letters before they can read, so children need to learn the skills of movement before they can play a game. Some of these skills are acquired naturally; no one has to teach children how to walk. They learn by observing and experimenting. Other skills such as stability, manipulative, and some locomotion skills, require sound instruction and practice. It is useless for a three-year-old with little dexterity and coordination to ride a bicycle if he hasn’t mastered using his training wheels. A child who cannot stack building blocks at age seven will naturally have difficulty creating more complex projects. Stability skills are movements that help children become oriented to their bodies, “How far can my body stretch? How do I stop my body? Which side is my right, and which side is your right?” Locomotor movements are the fundamental ways the body moves from one point to another. In grades K-2, for example, children are encouraged to perfect their skipping skills. In grades 3-6, proficiency in skipping may translate to a basketball lay-up or dance step. Once children know how to move with a sense of fluidity, they are ready to control an object outside of their body. To control an object requires mastering of manipulative skills.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Locomotor, stability, and manipulative skills are heavily utilized in learning recreational games and achieving overall fitness. Since the emphasis in the grammar school is learning and practicing skills (starting to build muscle memory), nurturing a child’s character in physical education should occur under that principle. Although we encourage students to play intensely, the goal at this stage is not victory, but to honor God through good sportsmanship and skill development. Since it takes consistent, repetitive practice to master these skills, physical education takes place in the grammar stage as often as possible, but as a minimum of twice a week for 30-45 minutes so that the students can warm-up, stretch, receive a lesson, practice, cool down, and properly return equipment to storage.
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2024/09/Watching_Small.png" title="Watching_Small" alt="Watching athletics" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2024/09/Swimming_Small.png" title="Swimming_Small" alt="Swimming" />
        </Grid>
      </Grid>
    </PageShell>
  );
}
