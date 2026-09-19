import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";
import Head from "next/head";
import PageFade from "@/components/layout/PageFade";
import WhatSetsApart from "@/components/sections/WhatSetsApart";
import Testimonials from "@/components/sections/Testimonials";
import { site } from "@/data/site";
import { colors } from "@/theme/theme";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
  sidebar?: ReactNode;
  showWhatSetsApart?: boolean;
  showTestimonials?: boolean;
  below?: ReactNode;
};

export default function PageShell({
  title,
  description,
  children,
  sidebar,
  showWhatSetsApart = false,
  showTestimonials = true,
  below,
}: Props) {
  return (
    <PageFade>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <link rel="canonical" href={site.url} />
      </Head>
      <Box sx={{ py: { xs: 4, md: 7 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: sidebar ? 8 : 12 }}>
              <Box
                sx={{
                  bgcolor: colors.paper,
                  border: "1px solid",
                  borderColor: "divider",
                  px: { xs: 2.5, md: 5 },
                  py: { xs: 3, md: 5 },
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    bgcolor: "secondary.main",
                  },
                }}
              >
                {children}
              </Box>
            </Grid>
            {sidebar ? (
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ position: { md: "sticky" }, top: 120 }}>{sidebar}</Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
      {below}
      {showWhatSetsApart ? <WhatSetsApart /> : null}
      {showTestimonials ? <Testimonials /> : null}
    </PageFade>
  );
}
