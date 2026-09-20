import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { exploreLinks } from "@/data/site";

export default function AcademicsPage() {
  return (
    <PageShell
      title="Academics at Apex  - Apex Academy Minnesota"
      description="A classical Christian education that develops clear thinking, strong habits, and a well-ordered life."
      showWhatSetsApart
      sidebar={<LinkCard title="Explore Apex " links={exploreLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Academics at Apex 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, we provide a classical Christian education that develops clear thinking, strong habits, and a well-ordered life.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students are taught to read carefully, think logically, and communicate clearly. Through the study of the liberal arts and the pursuit of what is true, good, and beautiful, they grow in both understanding and maturity.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our approach is structured, intentional, and time-tested, equipping students not only for academic success, but for life.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Our Approach
      </Typography>
      <List>
        {[
          "Classical education rooted in the liberal arts",
          "Instruction grounded in Biblical truth",
          "Small class sizes that allow for clear and responsive teaching",
          "Study of Latin and engagement with great works of literature and history",
          "Consistent expectations for effort, responsibility, and growth",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
        The Three Stages of Classical Education
      </Typography>
      <List>
        {["Grammar School (Grades K-5)", "Logic School (Grades 6-8)", "Rhetoric School (Grades 9-12)"].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>

      <Box id="grammar" sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Grammar School: K-5th Grade
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          In the early years, students build a strong foundation in language, knowledge, and core academic skills.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          They learn to read and write well, develop vocabulary, and acquire a broad base of knowledge across subjects.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Subjects include:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Bible, English Language Arts, History, Geography, Math, Science, and Fine Arts
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Students are also introduced to Latin and begin developing habits of attention, memory, and discipline.
        </Typography>
        <ContentImage
          src="https://veritasclassical.org/wp-content/uploads/2023/01/GrammarSchoolProgram.png"
          title="Grammar School Program"
          alt="Grammar School Program"
        />
      </Box>

      <Box id="logic" sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Logic School: Grades 6-8
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          As students mature, they begin to ask deeper questions and develop the ability to reason carefully.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          They learn how to think logically, analyze information, and understand the relationships between ideas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Subjects include:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          English Language Arts, History, Math, Science, Fine Arts, and Latin
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Instruction focuses on developing clear thinking, sound reasoning, and intellectual responsibility.
        </Typography>
        <ContentImage
          src="https://veritasclassical.org/wp-content/uploads/2021/02/LogicProgram-copy-1.png"
          title="Logic Program"
          alt="Logic Program"
        />
      </Box>

      <Box id="rhetoric" sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Rhetoric School: Grades 9-12
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          In the upper grades, students learn to communicate clearly and persuasively.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          They engage in thoughtful discussion, formal writing, and public speaking, developing the ability to articulate and defend their ideas.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Subjects include:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Rhetoric, Logic, Advanced Math, Science, History, Fine Arts, Theology, and Apologetics
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Students complete significant research and writing projects, culminating in a senior thesis.
        </Typography>
        <Typography variant="h1" sx={{ mt: 3, mb: 1 }}>
          What This Leads To
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Students who graduate from Apex Academy Minnesota are able to:
        </Typography>
        <List>
          {[
            "Think clearly and reason well",
            "Communicate effectively in speech and writing",
            "Take responsibility for their work and decisions",
            "Live with purpose, discipline, and conviction",
          ].map((item) => (
            <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
              {item}
            </ListItem>
          ))}
        </List>
        <ContentImage
          src="https://veritasclassical.org/wp-content/uploads/2021/02/RhetoricProgram.png"
          title="Rhetoric Program"
          alt="Rhetoric Program"
        />
      </Box>
    </PageShell>
  );
}
