import PageHero from "@/components/layout/PageHero";
import { ADMISSIONS } from "@/data/site";
import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";

export default function AdmissionsPage() {
  return (
    <>
      <Head>
        <title>{ADMISSIONS.title}</title>
      </Head>
      <PageHero title={ADMISSIONS.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography
          variant="body1"
          sx={{ maxWidth: 860, mb: 5, fontSize: 18, lineHeight: 1.85 }}
        >
          {ADMISSIONS.intro}
        </Typography>
        <Stack spacing={3}>
          {ADMISSIONS.steps.map((step, index) => (
            <Card key={step.title}>
              <CardContent sx={{ p: { xs: 3, md: 4 }, display: "flex", gap: 3 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "secondary.main",
                    color: "primary.main",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {index + 1}
                </Box>
                <Box>
                  <Typography variant="h5">{step.title}</Typography>
                  <Typography sx={{ mt: 1.5, fontSize: 17, lineHeight: 1.8 }}>
                    {step.body}
                  </Typography>
                  {"bullets" in step && step.bullets ? (
                    <List sx={{ mt: 1 }}>
                      {step.bullets.map((item) => (
                        <ListItem key={item} sx={{ py: 0.25, pl: 0 }}>
                          <ListItemText primary={`• ${item}`} />
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
