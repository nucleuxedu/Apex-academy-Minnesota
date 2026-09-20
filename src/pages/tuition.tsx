import Typography from "@mui/material/Typography";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import TuitionCalculator from "@/components/forms/TuitionCalculator";
import SiteLink from "@/components/common/SiteLink";
import { knowVeritasLinks } from "@/data/site";

export default function TuitionPage() {
  return (
    <PageShell
      title="Tuition & Financial Aid Information - Apex Academy Minnesota"
      description="Apex Academy Minnesota offers indexed tuition, allowing tuition rates to be adjusted based on each family’s financial circumstances."
      showWhatSetsApart
      sidebar={<LinkCard title="Know Apex " links={knowVeritasLinks} />}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Tuition & Financial Information
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota offers indexed tuition, allowing tuition rates to be adjusted based on each family’s financial circumstances. This approach makes a classical Christian education accessible to a wide range of families.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        To estimate your tuition, please use the calculator below.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <SiteLink href="/international-student-cost">International student tuition information is available here.</SiteLink>
      </Typography>
      <TuitionCalculator />
    </PageShell>
  );
}
