import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import Attractions from "@/components/sections/Attractions";
import Pillars from "@/components/sections/Pillars";
import InternationalInquiryForm from "@/components/forms/InternationalInquiryForm";
import { useInquiry } from "@/components/common/InquiryDialog";
import { colors } from "@/theme/theme";

const why = [
  {
    title: "Develop English Fluency",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Learn-English.png",
    imageTitle: "Learn English",
    body: "Students grow in English not just through instruction, but through daily life, learning, speaking, and thinking alongside native speakers in the classroom, in study halls, and in community. Language becomes a tool for real understanding, not just academic performance.",
  },
  {
    title: "Experience Life in America",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Major-League.png",
    imageTitle: "Major League",
    body: "Students are immersed in American life through school rhythms, local experiences, and meaningful activities, not just as observers, but as participants. From classrooms to community events, they gain a genuine understanding of culture and daily life.",
  },
  {
    title: "Belong to a Strong Community",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Lasting-Relationships.png",
    imageTitle: "Lasting Relationships",
    body: "At Veritas, students are known. They build meaningful friendships with American students and are supported by staff who are deeply invested in their growth. This consistent structure and care help students feel secure, supported, and at home.",
  },
  {
    title: "Prepare for What Comes Next",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/UCLA.png",
    imageTitle: "UCLA",
    body: "Students receive personalized guidance as they consider their future, whether that includes American colleges or other paths. With thoughtful advising, campus visits, and exposure to different fields, students are equipped to move forward with clarity and confidence.",
  },
];

export default function InternationalStudentsPage() {
  const { openInquiry } = useInquiry();
  return (
    <PageShell
      title="Apex Academy Minnesota International Students - Apex Academy Minnesota Chisago City MN"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart={false}
      showTestimonials
      below={
        <>
          <Attractions />
          <Pillars />
        </>
      }
    >
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        Apex Academy Minnesota
      </Typography>
      <Typography variant="h3" sx={{ mb: 3, fontStyle: "italic" }}>
        Grounded in Truth. Guided by Wisdom. Marked by Virtue.
      </Typography>
      <Box sx={{ bgcolor: colors.burgundy, color: "white", p: 3, borderRadius: 1, mb: 3 }}>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h2" sx={{ color: "white", fontSize: "1.3rem" }}>
              A classical Christian, K-12 school that grounds students in Biblical truth, providing academic and spiritual foundations for college bound students.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Button variant="contained" color="secondary" onClick={openInquiry}>
              Request Information
            </Button>
          </Grid>
        </Grid>
      </Box>
      <InternationalInquiryForm />
      <Typography variant="h2" sx={{ mb: 3 }}>
        Why Apex 
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {why.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
            <Card>
              <ContentImage src={item.image} title={item.imageTitle} alt={item.title} sx={{ borderRadius: 0 }} />
              <CardContent>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Experience Apex  International
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students at Apex  don’t just study in the United States, they live, learn, and grow within a structured, supportive community. From the classroom to daily life, they are immersed in language, relationships, and meaningful experiences that shape both character and understanding.
      </Typography>
      <Button variant="contained" href="/get-started-international" sx={{ mb: 4 }}>
        LET’S GET STARTED
      </Button>
    </PageShell>
  );
}
