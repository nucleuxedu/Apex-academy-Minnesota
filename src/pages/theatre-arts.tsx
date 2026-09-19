import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageShell from "@/components/layout/PageShell";
import ContentImage from "@/components/common/ContentImage";
import LinkCard from "@/components/sections/LinkCard";
import { artsLinks, site } from "@/data/site";

export default function TheatreArtsPage() {
  return (
    <PageShell
      title="Theatre Arts - Veritas Academy"
      description="‘Twas The Night Before Christmas at Veritas Chapel."
      sidebar={<LinkCard title="The Arts" links={artsLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 1 }}>
        ‘Twas The Night Before Christmas
      </Typography>
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        Thursday, December 4, 2025
      </Typography>
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        6:30PM
      </Typography>
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        at
      </Typography>
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        Veritas Chapel
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        34888 Kable Avenue
        <br />
        North Branch, MN 55056
      </Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Tickets are $12.00/per person
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        As a nonprofit, the funds we collect will help offset the cost of the production. Anything above the minimum $12.00 per ticket will be appreciated and used toward future productions.
      </Typography>
      <Button variant="contained" href={site.theatreTicketsUrl} target="_blank" rel="noopener noreferrer" sx={{ mb: 3 }}>
        Purchase Tickets
      </Button>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Synopsis
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        It’s four days before Christmas, and the New York Evening Post needs a holiday feature story. President James Monroe is counting on reading it to his family on Christmas Day. But writer Clement Moore has writer’s block. Besides that, he must work at home amongst his five children who are, needless to say, very anxious for St. Nicholas to arrive.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Clement’s frustration mounts, then the magic begins. The sounds of bells, moving toys, and visions of Sugar Plum Fairies all conspire to help Clement as the events from the classic poem come to life.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Interwoven with carolers, a song to St. Nicholas, dancing fairies, and much more, including a visit from the old elf himself, this delightful musical concludes with the complete original poem set to exquisite music. Commissioned and first produced by Stages Theatre Company, this fresh telling of the most popular Christmas poem ever told will delight audiences of all ages.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2021/12/SightsandSounds2018.png" title="Sights and Sounds 2018" alt="Performance" sx={{ mb: 1 }} />
      <Typography variant="h4">Performance</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our annual Christmas Program and our spring Sights and Sounds Open House are the two main opportunities to showcase our work. Using contemporary and classical themes, we integrate language arts into the performing arts to show the value of language, literature and history.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2021/12/Nutcracker.png" title="The Nutcracker" alt="The Nutcracker" sx={{ mb: 1 }} />
      <Typography variant="h4">Production</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We use live actors in our dramatic productions to tell stories that teach us how to live. Through drama, students are introduced to the outstanding literature of the Western world. Our families participate in various roles including costume design and props construction.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2021/12/AllAges.png" title="All Ages" alt="All Ages" sx={{ mb: 1 }} />
      <Typography variant="h4">All Ages</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We consider the age, gender, and maturity levels of our students and carefully select scripts that are appropriate for the understanding of the students and that align with our values. Every child has an opportunity to participate in our productions.
      </Typography>
      <ContentImage src="https://veritasclassical.org/wp-content/uploads/2021/12/Individual-Coaching.png" title="Individual Coaching" alt="Individual Coaching" sx={{ mb: 1 }} />
      <Typography variant="h4">Individual Coaching</Typography>
      <Typography variant="body1">
        We honor each child and carefully attend to their unique strengths, skills and experience as they develop their stage presence. Directors actively guide the students through the reading, analysis, and performance of all materials.
      </Typography>
    </PageShell>
  );
}
