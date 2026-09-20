import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import FacultyGrid from "@/components/sections/FacultyGrid";
import SiteForm from "@/components/forms/SiteForm";
import { artsLinks } from "@/data/site";

export default function OrchestraPage() {
  return (
    <PageShell
      title="Apex Conservatory of Music - Apex Academy Minnesota"
      description="Students grow in skill and confidence as they learn from internationally recognized musicians."
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Apex Conservatory of Music
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students grow in skill and confidence as they learn from internationally recognized musicians in a conservatory style program that fits within a classical Christian education.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Students’ appreciation and mastery of music
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Music at Apex is both rigorous and welcoming. Students build strong foundations, develop musicianship, and gain the discipline that supports learning in every subject.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Learn from an internationally renowned musician, Givi Sarkisian
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        About Givi:
      </Typography>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/01/Givi-Sarkisian-in-Action_WP-400x268.png" alt="Givi Sarkisian" />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <List>
            {[
              "Givi Sarkisian is a laureate of an international competition among performers on brass instrument.",
              "He graduated from the Lyceum at the St. Petersburg Conservatory in the class of brass instruments and piano.",
              "He studied at the St. Petersburg Conservatory, majoring as an orchestra artist and music teacher.",
              "He performed at the St. Petersburg Opera as a soloist of the orchestra and concertmaster of the trumpet group.",
              "He was one of the organizers and soloists of the Horn Orchestra, which was nominated for entry into the Guinness Book of Records.",
              "He was a French Horn orchestra artist in the St. Petersburg Symphony Orchestra.",
              "He was admitted to the State Pedagogical University in St. Petersburg at the Faculty of Opera Vocals of Professor Dumtsev.",
            ].map((item) => (
              <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/01/Givi-Sarkisian-in-Action-2_WP.png" alt="Givi Sarkisian in action" sx={{ mb: 2 }} />
      <Typography variant="body1">Beginner Students Receive:</Typography>
      <List>
        {[
          "Fundamentals of Music Literacy such as music theory and history",
          "Ear music training",
          "Private instrumental and voice lessons",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">Advanced Students Receive:</Typography>
      <List>
        {[
          "Participation in an ensemble/orchestra",
          "Development of performance skills through musicianship",
          "Private instrumental and voice lessons",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">Benefits of Music:</Typography>
      <List>
        {[
          "Cognitive development skills",
          "Emotional and mental well-being",
          "Growth in self-confidence",
          "Physical development in motor skills and coordination",
          "Creativity and Imagination",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">Interested? Complete the form below.</Typography>
      <SiteForm
        title="Orchestra and More Inquiry Form"
        endpoint="/api/inquiry"
        fields={[
          { kind: "text", name: "first", label: "First", required: true },
          { kind: "text", name: "last", label: "Last", required: true },
          { kind: "email", name: "email", label: "Email", required: true },
          { kind: "tel", name: "phone", label: "Phone", required: true },
        ]}
      />
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/01/Brass-Lesson.png" title="Brass Lesson" alt="Brass Lesson" sx={{ mb: 2 }} />
      <Typography variant="body1" sx={{ mb: 3 }}>
        In 2022, the American Guild of Musical Artists (AGMA) recognized Givi Sarkisian as an internationally acclaimed multi-instrumentalist and educator with extraordinary abilities. And now at Apex Academy Minnesota, he is inviting musicians of all skill levels and all ages to join him to make music as part of an orchestra, choir, laureates of various music competitions, or beginning and exploration. Givi takes an individual approach for each student and selects the most suitable musical instrument based on the strengths of each student.
      </Typography>
      <FacultyGrid />
    </PageShell>
  );
}
