import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import FacultyGrid from "@/components/sections/FacultyGrid";
import SiteForm from "@/components/forms/SiteForm";
import { artsLinks } from "@/data/site";

export default function OrchestraLessonsPage() {
  return (
    <PageShell
      title="Orchestra & More Lessons | Music Instruction & Programs"
      description="Develop your musical skills at Veritas Conservatory with Orchestra and More Lessons, from basics to ensemble performance for all ages."
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Veritas Conservatory of Music Classes
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Begin your journey to develop mastery of music and grow as you learn from an internationally renown musician.
      </Typography>
      <SiteForm
        title="Orchestra and More"
        endpoint="/api/inquiry"
        fields={[
          { kind: "text", name: "first", label: "First", required: true },
          { kind: "text", name: "last", label: "Last", required: true },
          { kind: "email", name: "email", label: "Email", required: true },
          { kind: "tel", name: "phone", label: "Phone", required: true, placeholder: "(999) 999-9999" },
          {
            kind: "checkboxes",
            name: "programs",
            label: "Orchestra and More",
            options: ["Piano", "Choir", "Trumpet", "French Horn", "Baritone", "Euphonium", "Tuba", "Block Flute", "Saxophone", "Flute", "Clarinet"],
          },
          {
            kind: "checkboxes",
            name: "grade",
            label: "Grade Level",
            options: ["K - 5th Grade", "6th - 8th Grade", "9th - 12th Grade", "18 years and older"],
          },
          {
            kind: "select",
            name: "bestTime",
            label: "Best time to contact you?",
            options: ["Morning", "Afternoon", "Evening", "Weekend"],
          },
          {
            kind: "select",
            name: "hearAbout",
            label: "How did you hear about Veritas Academy?",
            options: ["Friend", "Google Search", "Google Ad", "Other"],
          },
        ]}
      />
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2023/07/French-Horn-Group.png" title="French Horn Group" alt="French Horn Group" sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ mb: 3 }}>
        In 2022, the American Guild of Musical Artists (AGMA) recognized Givi Sarkisian as an internationally acclaimed multi-instrumentalist and educator with extraordinary abilities. And now at Veritas Academy, he is inviting musicians of all skill levels and all ages to join him to make music as part of an orchestra, choir, laureates of various music competitions, or beginning and exploration. Givi takes an individual approach for each student and selects the most suitable musical instrument based on the strengths of each student.
      </Typography>
      <FacultyGrid />
    </PageShell>
  );
}
