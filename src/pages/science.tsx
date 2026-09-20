import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { programLinks } from "@/data/site";

export default function SciencePage() {
  return (
    <PageShell
      title="SCIENCE at Apex - Apex Academy Minnesota Chisago City MN"
      description="Apex balances rigorous core science and math instruction within a broad array of reasoning-based classical subjects."
      showWhatSetsApart
      sidebar={<LinkCard title="Program Overview" links={programLinks} />}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Science at Apex
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex balances rigorous core science and math instruction within a broad array of reasoning-based classical subjects. Students are taught to study the “why” of science and math. This fosters a learning disposition when the techniques and information of a field change – creating true scientists. This readiness to “ask the why” is part of the reason classically trained students score higher than any other type of school, including independent preparatory schools, in math and science. And, they are better trained to excel in college.
      </Typography>
      <Typography variant="body1">Science seeks explanations of the natural world. Teaching science consists of the following main components:</Typography>
      <List>
        {["Body of knowledge", "Inquiry process skills", "Values and attitudes associated with scientific inquiry"].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
        Space Inspired SCIENCE Opportunities
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Students at Apex Academy Minnesota have an opportunity to conduct experiments aboard the International Space Station. Each of the three program levels will inspire and challenge students through:
      </Typography>
      <List>
        {[
          "Electrical Engineering for logic and rhetoric students (6th through 12th grade) – design PCB board functionality to run heat experiments on the ISS.",
          "Coding ISS experiments for logic students – code in Arduino to run heat experiments on earth and on the ISS.",
          "Block Programming Space activities for grammar school students",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">Integrated with math and science, the curriculum includes:</Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/07/AstronautonISS-300x300.png" alt="Astronaut on ISS" />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>ISS Apprentice (Level 2):</strong> A hands-on experience for students 7th to 12th grade. It builds on the Level 1 Inspiration Station experience and prepares them for the aspiration of the Level 3 Research Lab program (coming soon) by taking them deeper into the tools necessary for space research. Students perform different engineering roles to develop the technical skills in electrical, mechanical and software engineering in order to run an automated experiment on the ISS.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>ISS Inspiration Station (Level 1):</strong> A hands-on experience for students in 5th and 6th grades. The mystery of Space engages students as they build the heat experimentation platform, during which they learn grade appropriate concepts in mechanical, electrical and software engineering. They then create and run heat transfer experiments on earth and hypothesize what will happen in microgravity. Their software is then uploaded to the ISS and the results are returned for analysis.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>ISS Quester (Level 0):</strong> A Quester is one who seeks. We inspire the Quester in our students by using block coding to create unique Space Art with Ferrofluids and Iron Filings in microgravity and personalized video messages on BMO to send to their friends and family from space.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Drones
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students in the logic and rhetoric stage enjoy dealing with real life scenarios. As they refine their critical thinking skills, this program focuses on high-value solutions and in-demand skills that prepare students for the real world of drone operation. Students may choose a semester long class for recreation only or a longer commitment for FAA Remote Pilot Certification. Part time students are welcome!
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Remote Pilot Certification Curriculum
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Integrated with high school physics, the curriculum includes:
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/05/Drone-Class-in-Action-300x300.png" alt="Drone Class in Action" />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Intro to Drones:</strong> Students will receive a basic overview of drones, how they function and fly, while also learning to fly effectively without GPS, and discuss how drones are currently being deployed for commercial and public safety use.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Part 107 Test Prep:</strong> Students will gain an understanding of the safety and operational requirements necessary to successfully complete the FAA Unmanned Aircraft – General test and become fully-licensed drone pilots.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Hands-On Drone Flight Training – DJI Phantom 4 Pro:</strong> Students will receive comprehensive outdoor flight training on the versatile DJI Phantom 4 Pro including all of its advanced features.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Drone Photo and Video Production:</strong> Students will use their flight skills to capture outstanding aerial imagery (pictures and video) and then be taught how to manage and manipulate that data in popular digital editing software to create video productions.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Intro to Autonomous Drone Apps with Hands-On Flight Training:</strong> Students will learn to program autonomous missions, becoming proficient in the execution of the autonomous flight protocols which enable many commercial drone deployments.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Intro to Pix4D:</strong> Students will learn how to use an advanced photogrammetry software package to turn raw data into actionable intelligence as they are introduced to orthomosaic mapping, 3D modeling, point clouds, Normalized Difference Vegetation Index (NDVI), Geographic Information Systems (GIS) and more.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        These six elements feature over 300 hours of instruction and will completely prepare students to become FAA-certified drone operators and begin a career. They will also be prepared to continue with degree programs in colleges and universities. Part time students may participate if seats are available, but they would be required to adhere to our policies and covenant of life statement.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Biblical Worldview
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota approaches all of its teaching from a Biblical worldview. Therefore, our values and attitudes associated with scientific inquiry are shaped by a Biblical worldview. As such, we recognize that the nature and source of knowledge is God’s revelation, both general and specific. He [God] is before all things, and in him all things hold together ( Col. 1:17 New International Version). The following statements are critical to our approach in teaching science:
      </Typography>
      <List>
        {[
          "There is no conflict between scientific investigation and discoveries with a biblical world view (Gen. 1:1, Heb. 11:3)",
          "Biblical morality and ethics must guide our scientific investigation (Rom. 1:21-25, Prov. 12:10, Matt. 10:31, Prov. 25:2)",
          "A basic education includes a fundamental understanding of scientific investigation as well as foundational history of scientific development through the ages (1 Kings 4:29-34)",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
        Our Methods
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Habits of mind are crucial in our teaching because they force us to recognize that teaching science involves helping students to understand and adopt values and attitudes associated with what we are teaching (Reddy, et al., 1998). Reddy (1998) argues that good thinking involves knowledge, skills, and dispositions of thoughtfulness. Thoughtfulness at Apex Academy Minnesota must align with a Biblical worldview. There is not enough time to acquire all knowledge in the 13-14 years of a student’s life at Apex Academy Minnesota, or the rest of their life. Therefore, our goal is not to limit them to the content we provide, but to teach them to develop good thinking skills through inquiry. Inquiry is the careful and systematic method of asking questions and seeking explanations (Abruscato & DeRosa, 2010, p. 43). Our strategies are influenced by this assumption, and they include the following inquiry methods based on the National Science Education Standards:
      </Typography>
      <List>
        {[
          "Observations",
          "Questions",
          "Research",
          "Investigations",
          "Reviewing experimental evidence",
          "Using tools to gather, analyze, and interpret data",
          "Proposing answers, explanations and predictions",
          "Identifying assumptions, using critical and logical thinking, and considering alternative explanations",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
    </PageShell>
  );
}
