import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Section from "@/components/common/Section";
import { pillars } from "@/data/site";
import { colors } from "@/theme/theme";

const icons = {
  psychology: PsychologyIcon,
  directions_run: DirectionsRunIcon,
  palette: PaletteIcon,
  menu_book: MenuBookIcon,
};

export default function Pillars() {
  return (
    <Section
      bg={colors.oxblood}
      color="#fbf6ee"
      sx={{
        backgroundImage: "linear-gradient(180deg, rgba(23,20,17,0.18), rgba(23,20,17,0.08))",
      }}
    >
      <Grid container spacing={0}>
        {pillars.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Grid
              key={item.title}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                px: 3,
                py: { xs: 3, md: 1 },
                borderRight: { md: index < 3 ? "1px solid rgba(196,162,101,0.28)" : "none" },
                borderBottom: { xs: index < 3 ? "1px solid rgba(196,162,101,0.28)" : "none", md: "none" },
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                  mb: 2,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid",
                  borderColor: "secondary.main",
                  color: "secondary.main",
                }}
              >
                <Icon />
              </Box>
              <Typography variant="overline" sx={{ display: "block", mb: 0.5 }}>
                {item.subtitle}
              </Typography>
              <Typography variant="h2" sx={{ color: "#fbf6ee", mb: 1.5 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "rgba(251,246,238,0.88)" }} align="center">
                {item.body}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
