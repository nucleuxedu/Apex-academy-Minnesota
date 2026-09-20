import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import dynamic from "next/dynamic";
import PageShell from "@/components/layout/PageShell";
import LinkCard from "@/components/sections/LinkCard";
import SiteLink from "@/components/common/SiteLink";
import { programLinks, site } from "@/data/site";

const GivebutterWidget = dynamic(() => import("@/components/embeds/GivebutterWidget"), { ssr: false });

export default function DonatePage() {
  return (
    <PageShell
      title="Donate - Apex Academy Minnesota"
      description="Invest in students at Apex Academy Minnesota who are being intentionally prepared to lead with clarity and virtue."
      showWhatSetsApart={false}
      sidebar={<LinkCard title="Program" links={programLinks} />}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Invest in Our Youth
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Students at Apex Academy Minnesota are being intentionally prepared to lead with clarity and virtue. Guided by Biblical principles, we combine academic rigor with love and compassion, to equip young people with an exceptional, Christ centered education that will transform our world.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        As an independent, non profit, classical Christian school, we are not subsidized by any church, government, or religious organization. We are funded through tuition and program fees, annual charitable contributions, occasional capital campaigns and monthly contributions.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        When you give to Apex Academy Minnesota, you are making a lifetime investment in the lives of students who have chosen an exceptional education.
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Ways to Give
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You may use the link on this page to make a one time donation or monthly gifts through a direct and secure donation or by check, to Apex Academy Minnesota. We appreciate your support.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex donors choose from several levels of giving:
      </Typography>
      <GivebutterWidget />
      <Typography variant="h4" sx={{ mt: 3, mb: 1 }}>
        Legacy Society
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        When you make a planned gift to Apex Academy Minnesota through your will or estate plan, you become a member of the Legacy Society – a special group of our strongest supporters – that helps sustain quality programming for future generations. Other options include:
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Planned Giving
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Even people of modest means can make a big difference through a planned gift! Including Apex Academy Minnesota in your will or trust allows you to make a gift that costs you nothing during your lifetime. By making a planned gift through your will or estate plan, you ensure Apex Academy Minnesota’s commitment to excellence and the advancement of the Gospel of Jesus Christ and His Kingdom endures for future generations.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Members of Apex Academy Minnesota’s Legacy Society are individuals who’ve demonstrated forethought and generosity to ensure that as part of their legacy, more children in our community will have access to Apex Academy Minnesota’s Christ-centered education. These commitments allow Apex Academy Minnesota to plan – and build – into the future.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Please consider this information as a starting point. With all charitable gifts, it is important to consult with your attorney or financial advisor to ensure that you comply with state laws, receive maximum tax benefits, and that your wishes are accurately reflected in necessary legal documents.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Sample bequest language:
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Cash Bequest Will or Trust Language:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I give, devise, and bequeath to Apex Academy Minnesota, a non-profit corporation located at 34888 Kable Avenue, North Branch, Minnesota, the sum of $___________ as an unrestricted gift. Tax ID: {site.taxId}.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Estate Percentage Will or Trust Bequest Language:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I give, devise, and bequeath to Apex Academy Minnesota, a non-profit corporation located at 34888 Kable Avenue, North Branch,, Minnesota, _____ percent of my estate as an unrestricted gift. Tax ID: {site.taxId}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Contact Susie Brooks, EdD at <SiteLink href={`mailto:${site.presidentEmail}`}>{site.presidentEmail}</SiteLink> for additional assistance or questions about planned gifts to Apex Academy Minnesota.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Donor-Advised Fund
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You can recommend your donor-advised fund to make a gift on your behalf – even during a multi-year time frame – provided the commitment comes from the fund itself. You can also establish a memorial fund in honor of someone through a donor-advised fund. It could be a new fund altogether, or granting in memoriam out of an existing fund.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota
        <br />
        34888 Kable Avenue
        <br />
        North Branch, MN 55056
        <br />
        Tax ID: {site.taxId}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Please check with your fund advisor for additional information on IRS restrictions on gifts from a donor-advised fund.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Qualified Charitable Distribution
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Make a difference today through Qualified Charitable Distribution (QCD) and save on taxes. You can give any amount (up to a maximum of $100,000) per year from your IRA directly to Apex Academy Minnesota without having to pay income taxes on the money. This popular gift option is commonly called the IRA charitable rollover, but you may also see it referred to as a qualified charitable distribution, or QCD for short. Gifts of any value $100,000 or less are eligible for this benefit.
      </Typography>
      <Typography variant="body1">Advantages of a Qualified Charitable Distribution from your Retirement Assets include:</Typography>
      <List>
        {[
          "Your gift will be put to use today, allowing you to see the difference your donation is making.",
          "Beginning at age 70.5, you can use your gift to satisfy all or part of your required minimum distribution (RMD).",
          "You pay no income taxes on the gift. The transfer generates neither taxable income nor a tax deduction, so you benefit even if you do not itemize your deductions.",
        ].map((item) => (
          <ListItem key={item} sx={{ display: "list-item", listStyleType: "disc", ml: 3, px: 0 }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Please contact your financial advisor and/or retirement plan administrator to complete your gift. Also, please also inform Apex Academy Minnesota’s President Susie Brooks, EdD at <SiteLink href={`mailto:${site.presidentEmail}`}>{site.presidentEmail}</SiteLink> of your gift intention. We would love to talk further about your intentions to ensure they are followed.
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Kingdom Builder ($100,000+)
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        When you make a commitment at the Kingdom Builder level, you join a select group of dedicated donors who support Apex Academy Minnesota’s mission to make an impactful difference. This can be a one-time gift or it can be spread over a period of time.
      </Typography>
      <Typography variant="body1">Guarantor: $250K+</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Innovator: $100K-$249K
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Leadership Circle ($1,000-$$99,000)
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        When you make a commitment at the Leadership Circle level, you become a partner in strengthening our commitment to provide quality, Christ-centered education, through strong leadership and quality resources while transforming lives.
      </Typography>
      <Typography variant="body1">Benefactor: $50K-$99K</Typography>
      <Typography variant="body1">Investor: $25K-$49K</Typography>
      <Typography variant="body1">Champion: $10K-$24K</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Partner: $1K-$9K
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Thank you for supporting Apex Academy Minnesota! We appreciate your partnership with us.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Send checks to:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Apex Academy Minnesota
        <br />
        Invest in Our Youth
        <br />
        34888 Kable Ave.
        <br />
        North Branch, MN 55056
      </Typography>
      <Typography variant="body1">
        Apex Academy Minnesota is registered as a 501 (c) 3 nonprofit and your contribution is tax deductible to the full extent of tax law.
      </Typography>
    </PageShell>
  );
}
