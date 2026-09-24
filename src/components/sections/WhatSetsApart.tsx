import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import ContentImage from "@/components/common/ContentImage";
import SiteLink from "@/components/common/SiteLink";
import { whatSetsApart } from "@/data/site";

export default function WhatSetsApart() {
  return (
    <Section sx={{ bgcolor: "background.paper" }}>
      <SectionHeading kicker="Distinctives">What Sets Apex  Apart?</SectionHeading>
      <Grid container spacing={3}>
        {whatSetsApart.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <ContentImage
                  src={item.image}
                  title={item.imageTitle}
                  alt={item.title}
                  sx={{ borderRadius: 0, aspectRatio: "16/10", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    bgcolor: "secondary.main",
                    color: "text.primary",
                    px: 1,
                    py: 0.25,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                  }}
                >
                  0{index + 1}
                </Box>
              </Box>
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h4" sx={{ mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.body}{" "}
                  <SiteLink href={item.href}>
                    Learn more{item.title === "Small Class Sizes" ? "" : "."}
                  </SiteLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
