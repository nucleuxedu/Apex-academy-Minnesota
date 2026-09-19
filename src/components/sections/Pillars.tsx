import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Section from "@/components/common/Section";
import { pillars } from "@/data/site";

const icons = {
  psychology: PsychologyIcon,
  directions_run: DirectionsRunIcon,
  palette: PaletteIcon,
  menu_book: MenuBookIcon,
};

export default function Pillars() {
  return (
    <Section bg="primary.main" color="white">
      <Grid container spacing={4}>
        {pillars.map((item) => {
          const Icon = icons[item.icon];
          return (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 84,
                    height: 84,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "white",
                    color: "primary.main",
                    border: "4px solid white",
                    boxShadow: "inset 0 0 0 4px #86191b",
                  }}
                >
                  <Icon fontSize="large" />
                </Avatar>
                <Typography variant="h2" sx={{ color: "white", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "white" }} align="center">
                  {item.subtitle}
                  <br />
                  {item.body}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
