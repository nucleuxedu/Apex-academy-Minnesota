import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";
import Head from "next/head";
import PageFade from "@/components/layout/PageFade";
import WhatSetsApart from "@/components/sections/WhatSetsApart";
import Testimonials from "@/components/sections/Testimonials";
import { site } from "@/data/site";

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
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: sidebar ? 8 : 12 }}>{children}</Grid>
            {sidebar ? (
              <Grid size={{ xs: 12, md: 4 }}>{sidebar}</Grid>
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
