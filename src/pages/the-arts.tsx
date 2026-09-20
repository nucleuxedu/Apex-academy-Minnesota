import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PageShell from "@/components/layout/PageShell";
import IframeEmbed from "@/components/common/IframeEmbed";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { artsLinks } from "@/data/site";

export default function TheArtsPage() {
  return (
    <PageShell
      title="The Arts - Apex Academy Minnesota"
      description="The arts at Apex are taught with purpose as part of a classical Christian education."
      showWhatSetsApart
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <IframeEmbed src="https://player.vimeo.com/video/734564469?autoplay=0&autopause=0" title="Vimeo video player 1" height={360} />
      <Typography variant="h1" sx={{ mb: 2 }}>
        Arts Defined
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        “The kind of world God made is a model of what artists should strive to make and what all people should delight in.” vs “Art for art’s sake!”
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/07/ArtStudent-225x300.png" alt="Art student" />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            By “art” we mean the renderings, two dimensional and three dimensional, produced by people using painting, drawing, and sculpting tools. Music, drama, dancing, and other fine arts help us train capable worshipers of the Holy Triune God. We are not simply mastering material for a fabulous performance.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The two quotes above show two competing ways to think about art. One treats art as something answerable to God and shaped by His creation. One treats art as independent from any higher authority.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h2" sx={{ mt: 3, mb: 1 }}>
        Biblical Worldview
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Scriptures like I Corinthians 10:31 teach that nothing we do is outside God’s sovereignty, and all we do should be for His glory. The arts are no exception.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        When the Lord speaks about art in His Word, it is often in the context of skilled craftsmen and gifted design work. Philippians 4:8 calls us to dwell on what is true, honorable, and beautiful.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        That is why the arts at Apex are taught with purpose. Students learn skills, discipline, and excellence as part of a classical Christian education, and the work is offered back to God in worship and gratitude.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Our Methods
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex trains students systematically in the foundational skills of art, then builds toward projects that combine skill, practice, and careful observation. Students practice copying from another picture, still life, or design to develop precision and patience.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Music study gives students space to explore gifts God has given them. The grammar stage provides a broad base of introductory knowledge that helps students discover what they enjoy and guides future elective choices.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Musical performances allow students to offer the fruit of their gifts back as worship to the Lord and as enjoyment for the Christian community. Students also learn something important if music is not their strongest gift. They learn appreciation for the talents God gives others and how to support them well.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        A Christian setting should never settle for careless instruction in the arts. When students imitate and relish creation through art, they offer tangible praise for what the Father has made.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2022/07/Artprogram-Award.png" title="Art Program Award" alt="Art Program Award" sx={{ mb: 1 }} />
      <Typography variant="body1">
        Two Apex Academy Minnesota students won the 2022 “My District, My Minnesota” State Senate Art Contest. 2,000 statewide entries were submitted.
      </Typography>
    </PageShell>
  );
}
