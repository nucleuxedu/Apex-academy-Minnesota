import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import { aboutLinks } from "@/data/site";

const statements = [
  {
    title: "God",
    body: "We believe in one Triune God: Father, Son, Holy Spirit. He is the Creator of all things and He is the only Supreme Being.",
  },
  {
    title: "Jesus Christ",
    body: "We believe that Jesus Christ is God incarnate, one person, fully God and fully man.",
  },
  {
    title: "The Holy Spirit",
    body: "We believe that The Holy Spirit indwells believers and continues to work in them to bring about sanctification.",
  },
  {
    title: "The Bible",
    body: "We believe that all Scripture (The Bible) is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness. The Bible consists of 66 books: 39 in the Old Testament and 27 in the New Testament.",
  },
  {
    title: "The Human Condition",
    body: "We believe that by nature, we are all sinners and turn from God. But through Jesus’s love and faithfulness, sin is atoned for. And through the fear of the Lord, evil is avoided.",
  },
  {
    title: "Sanctity of Life",
    body: "We believe that all human life is sacred and created by God in his image.",
  },
];

export default function StatementOfFaithPage() {
  return (
    <PageShell
      title="Statement of Faith - Apex Academy Minnesota"
      description="The statement of faith of Apex Academy Minnesota."
      showWhatSetsApart
      sidebar={<LinkCard title="About" links={aboutLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 3 }}>
        Statement of Faith
      </Typography>
      {statements.map((item) => (
        <Typography key={item.title} variant="body1" sx={{ mb: 2 }}>
          <strong>{item.title}</strong>
          <br />
          {item.body}
        </Typography>
      ))}
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Marriage, Gender, and Sexuality</strong>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We believe that God creates each person as male or female (Gen. 1:26-27).
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We believe that Biblically the term “marriage” means the uniting of one man and one woman in a single, exclusive union, as delineated in Scripture. (Gen. 2:18-25.)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We believe that every person must be afforded compassion, love, kindness, respect, and dignity. (Mark 12:28-31; Luke 6:31.) Hateful and harassing behavior or attitudes directed toward any individual are to be repudiated and are not in accord with Scripture nor the doctrines of Apex Chapel, Apex Academy Minnesota and all Apex related ministries.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Christ’s Return</strong>
        <br />
        We believe in the return of our Lord Jesus Christ at a time known only to God.
      </Typography>
      <Typography variant="body1">
        <strong>Response and Eternal Destiny</strong>
        <br />
        We believe that eternal life is a gift from God given to those who receive it through faith in Jesus Christ (1 John 5:11-12).
      </Typography>
    </PageShell>
  );
}
