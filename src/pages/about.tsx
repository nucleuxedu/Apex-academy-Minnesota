import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PageShell from "@/components/layout/PageShell";
import IframeEmbed from "@/components/common/IframeEmbed";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import SiteLink from "@/components/common/SiteLink";
import { aboutLinks, site } from "@/data/site";

export default function AboutPage() {
  return (
    <PageShell
      title="About Apex  - Apex Academy Minnesota Chisago City MN"
      description="Apex Academy Minnesota is a private K-12 school serving Chisago City, MN."
      showWhatSetsApart={false}
      sidebar={
        <>
          <LinkCard title="About" links={aboutLinks} />
          <Box
            sx={{
              p: 3,
              mb: 3,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderLeft: "3px solid",
              borderLeftColor: "secondary.main",
            }}
          >
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>We exist:</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>For students</strong>: We equip students to lead with clarity and virtue, and to become mature adults who value truth, acknowledge God’s beauty, and do good (Daniel 1:4, Ephesians 2:10).
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>For parents</strong>: We collaborate with them in the responsibility of educating their children. (Proverbs 22:6).
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>For our community</strong>: We support our great community while modeling excellence, integrity, and service to others. (Mark 10:45, Zechariah 1:17).
            </Typography>
            <Typography variant="body1">
              <strong>For teachers</strong>: We affirm them in their calling as educators, support their maturing in Christ, and empower them to be effective and productive in the classroom. (2 Peter 1: 3-11).
            </Typography>
          </Box>
          <ContentImage
            src="https://veritasclassical.org/wp-content/uploads/2022/07/Map-of-School-2.png"
            title="Map of School"
            alt="Map of School"
          />
        </>
      }
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        About Apex 
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota is a classical Christian school dedicated to the cultivation of wisdom and virtue.
      </Typography>
      <IframeEmbed src="https://player.vimeo.com/video/508172433?autoplay=0&autopause=0" title="Vimeo video player 1" height={350} />
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex Academy Minnesota, learning is designed to engage both the mind and the heart. Students are challenged to ask thoughtful questions, examine ideas carefully, develop sound reasoning, and communicate clearly.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Rather than focusing solely on the accumulation of information, we seek to cultivate wisdom and virtue through meaningful engagement with enduring ideas, important questions, and the accumulated wisdom of generations who have devoted themselves to the pursuit of truth and a deeper understanding of God, ourselves, and the world around us.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We believe the environment in which students learn matters. Through a{" "}
        <SiteLink href={site.restfulLearningUrl}>restful learning environment</SiteLink>, limited screen use, meaningful relationships, and purposeful use of time, students are given opportunities to develop responsibility, self-management, healthy relationships, and sound judgment. Teachers know their students well and provide both encouragement and challenge as they grow.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Apex , education extends beyond academics. Students are encouraged to develop curiosity, perseverance, ownership, responsibility, and sound judgment while learning to engage thoughtfully with the world around them. Over time, students develop the wisdom, habits, and maturity necessary to thrive in the responsibilities, relationships, and realities of adult life.
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic", mb: 3 }}>
        Then you will understand the fear of the Lord and find the knowledge of God. For the Lord gives wisdom; from His mouth come knowledge and understanding. –Proverbs 2:5-6
      </Typography>
      <ContentImage
        src="https://veritasclassical.org/wp-content/uploads/2025/04/Basketball.png"
        title="Basketball"
        alt="Basketball"
      />
    </PageShell>
  );
}
