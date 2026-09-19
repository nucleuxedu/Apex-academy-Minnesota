import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SectionHeading from "@/components/common/SectionHeading";
import ContentImage from "@/components/common/ContentImage";
import { attractions } from "@/data/site";

type Props = {
  title?: string;
  useAltLabels?: boolean;
};

export default function Attractions({ title = "Life Beyond the Classroom", useAltLabels = false }: Props) {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 0 } }}>
      <Box sx={{ maxWidth: 1536, mx: "auto", px: { md: 3 } }}>
        <SectionHeading kicker="Beyond campus" align="left">
          {title}
        </SectionHeading>
      <Grid container spacing={3}>
        {attractions.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box sx={{ position: "relative", overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
              <ContentImage
                src={item.image}
                title={item.imageTitle}
                alt={item.title}
                sx={{ borderRadius: 0, aspectRatio: "2/3", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  p: 2,
                  background: "linear-gradient(transparent, rgba(23,20,17,0.88))",
                }}
              >
                <Typography variant="h4" sx={{ color: "#fbf6ee" }}>
                  {useAltLabels && item.altTitle ? item.altTitle : item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "secondary.main" }}>
                  {useAltLabels && item.altPlace ? item.altPlace : item.place}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
}
