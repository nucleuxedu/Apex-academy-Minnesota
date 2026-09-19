import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section";
import ContentImage from "@/components/common/ContentImage";
import SiteLink from "@/components/common/SiteLink";
import { whatSetsApart } from "@/data/site";

export default function WhatSetsApart() {
  return (
    <Section>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        What Sets Veritas Apart?
      </Typography>
      <Grid container spacing={3}>
        {whatSetsApart.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <ContentImage src={item.image} title={item.imageTitle} alt={item.title} sx={{ borderRadius: 0 }} />
              <CardContent>
                <Typography variant="h4" align="center" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.body}{" "}
                  <SiteLink href={item.href}>Learn more{item.title === "Small Class Sizes" || item.title === "Christian Formation" ? "" : "."}</SiteLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
