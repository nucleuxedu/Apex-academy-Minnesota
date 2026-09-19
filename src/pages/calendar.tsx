import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import { aboutLinks } from "@/data/site";

const CalendarWiz = dynamic(() => import("@/components/embeds/CalendarWiz"), { ssr: false });

export default function CalendarPage() {
  return (
    <PageShell
      title="School Calendar - Veritas Academy Chisago City MN"
      description="Upcoming events at Veritas Academy."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Upcoming Events" links={aboutLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 1 }}>
        School Calendar
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Upcoming Events
      </Typography>
      <CalendarWiz />
    </PageShell>
  );
}
