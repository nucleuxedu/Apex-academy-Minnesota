import PageHero from "@/components/layout/PageHero";
import { SITE, TUITION } from "@/data/site";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Head from "next/head";

function RateTable({ title }: { title: string }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ px: 3, py: 2.5, bgcolor: "primary.main", color: "common.white" }}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Type</TableCell>
                <TableCell align="right">Annual Tuition</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TUITION.rates.map((rate) => (
                <TableRow key={`${title}-${rate.label}`}>
                  <TableCell>{rate.label}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700 }}>
                    {rate.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default function TuitionAndFeesPage() {
  return (
    <>
      <Head>
        <title>{TUITION.title}</title>
      </Head>
      <PageHero title={TUITION.heading} />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <RateTable title={TUITION.highSchoolTitle} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RateTable title={TUITION.postGradTitle} />
          </Grid>
        </Grid>

        <Typography variant="h4" sx={{ mb: 2 }}>
          {TUITION.additionalTitle}
        </Typography>
        {TUITION.additional.map((item) => (
          <Typography key={item} sx={{ mb: 2, fontSize: 17, lineHeight: 1.8 }}>
            {item}
          </Typography>
        ))}

        <Card sx={{ mt: 4, mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {TUITION.enrollmentTitle}
            </Typography>
            <Typography sx={{ mb: 2, fontSize: 17 }}>{TUITION.enrollmentFee}</Typography>
            <List>
              {TUITION.enrollmentDates.map((date) => (
                <ListItem key={date} sx={{ py: 0.25, pl: 0 }}>
                  <ListItemText primary={`• ${date}`} />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ mt: 1, fontSize: 17, lineHeight: 1.8 }}>
              {TUITION.enrollmentNote}
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="h4" sx={{ mb: 2 }}>
          {TUITION.paymentTitle}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {TUITION.paymentPlans.map((plan) => (
            <Grid key={plan} size={{ xs: 12, md: 6 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{plan}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ fontSize: 17, lineHeight: 1.8, mb: 2 }}>
          {TUITION.paymentNote}
        </Typography>
        <Typography sx={{ fontSize: 17 }}>
          Please contact Donnell Bratton, Administrative Director,{" "}
          <MuiLink href={SITE.phoneHref}>{SITE.phone}</MuiLink> with any questions.
        </Typography>
      </Container>
    </>
  );
}
