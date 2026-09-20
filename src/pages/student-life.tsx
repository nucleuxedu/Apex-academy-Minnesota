import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import Attractions from "@/components/sections/Attractions";

const gallery = [
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Structured-2.png", title: "Graduation" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Student-Life-Side-Bar-2.png", title: "Lily" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Random.png", title: "Random" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Celebration.png", title: "Celebration" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Dorm-Life.png", title: "Dorm Life" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Student-Life-Side-Bar-3.png", title: "Student Life 3" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/CandyStore.png", title: "Candy Store" },
  { src: "https://veritasclassical.org/wp-content/uploads/2026/03/Winter-Life.png", title: "Winter Life" },
];

export default function StudentLifePage() {
  return (
    <PageShell
      title="Student Life - Apex Academy Minnesota"
      description="Life at Apex Academy Minnesota is shaped by structure, responsibility, and meaningful relationships."
      showWhatSetsApart={false}
      showTestimonials={false}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Student Life at Apex 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Life at Apex Academy Minnesota is shaped by structure, responsibility, and meaningful relationships.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students live within a consistent daily rhythm that supports both academic growth and personal development. Expectations are clear, routines are steady, and students are guided to take ownership of their time, their work, and their conduct.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This environment helps students develop habits of discipline, attention, and responsibility that extend beyond the classroom.
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        A Structured and Supportive Environment
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Students benefit from a setting where expectations are consistent and clearly communicated.
      </Typography>
      <List>
        {[
          "Daily routines that support focus and stability",
          "Guidance in time management and personal responsibility",
          "Faculty and staff who know students and provide both support and accountability",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This structure allows students to grow in independence while remaining within a supportive and well-ordered community.
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Residential Life (Boarding Option)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota offers an optional residential program for both domestic and international students who desire a structured living environment.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Residential life extends the same principles found in the classroom into daily living.
      </Typography>
      <Typography variant="body1">Students are guided in:</Typography>
      <List>
        {["Establishing consistent routines", "Managing responsibilities", "Developing strong study habits", "Living respectfully within a community"].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        On-site staff provide supervision, guidance, and support, helping students grow in maturity and independence.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2026/03/Student-Life-1024x256.png" alt="Student Life" sx={{ mb: 3 }} />

      <Typography variant="h2" sx={{ mb: 1 }}>
        Dormitory and Campus Life
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students live in a safe and well-maintained environment designed to support both study and community.
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Dormitory Features
      </Typography>
      <List>
        {[
          "Secure, gender-specific wings",
          "Controlled access to entrances and rooms",
          "Shared living spaces and student lounges",
          "Laundry facilities and dining access",
          "Indoor and outdoor recreation opportunities",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Student Rooms
      </Typography>
      <List>
        {[
          "Two- to four-person accommodations",
          "Furnished with a bed, desk, chair, closet, and storage",
          "Basic essentials provided, including bedding and a dresser",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>

      <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
        Daily Life Beyond the Classroom
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Student life at Apex  extends beyond academics.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Students have opportunities to build friendships, participate in activities, and enjoy the surrounding community in appropriate and structured ways.
      </Typography>
      <Typography variant="body1">The campus is located near:</Typography>
      <List>
        {["Grocery stores and local shops", "A public library", "Lakes and outdoor recreation", "Walking and biking trails"].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Students also participate in organized outings and local events.
      </Typography>

      <Typography variant="h2" sx={{ mb: 1 }}>
        Communication and Oversight
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        We maintain clear communication with families and provide appropriate supervision for all students.
      </Typography>
      <List>
        {[
          "Activities are monitored in alignment with family expectations",
          "Regular communication keeps parents informed",
          "Students are guided in making responsible decisions in both structured and unstructured time",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>

      <Grid container spacing={2} sx={{ my: 3 }}>
        {gallery.map((img) => (
          <Grid key={img.src} size={{ xs: 12, sm: 6, md: 3 }}>
            <ContentImage src={img.src} title={img.title} alt={img.title} />
          </Grid>
        ))}
      </Grid>
      <Attractions />
    </PageShell>
  );
}
