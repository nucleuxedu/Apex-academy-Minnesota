import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { distinctivesLinks, whatSetsApart } from "@/data/site";

const distinctive = whatSetsApart.find((item) => item.href === "/class-size") ?? {
  title: "Small Class Sizes",
  image: "https://veritasclassical.org/wp-content/uploads/2024/09/Small-Class-Sizes.png",
  imageTitle: "Small Class Sizes",
};

export default function ClassSizePage() {
  return (
    <PageShell
      title="Class Size - Apex Academy Minnesota"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart
      sidebar={<LinkCard title="What Sets Apex Apart" links={distinctivesLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Small Class Size
      </Typography>
      <ContentImage src={distinctive.image} title={distinctive.imageTitle} alt={distinctive.title} sx={{ mb: 3 }} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, small class sizes allow teachers to know students well and teach with intention.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students are not lost in a crowd. Teachers understand their strengths, gaps, and progress, allowing instruction to be clear, direct, and responsive. This leads to stronger understanding, better habits, and steady growth over time.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Smaller classes also shape the culture of the classroom. Students participate more fully, build meaningful relationships, and are held accountable for their work and conduct.
      </Typography>
      <Typography variant="body1">
        While research consistently supports the benefits of small class sizes, what matters most is what we see every day: students who are known, challenged, and steadily growing in both understanding and responsibility.
      </Typography>
    </PageShell>
  );
}
