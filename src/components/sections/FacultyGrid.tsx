import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentImage from "@/components/common/ContentImage";
import { faculty } from "@/data/site";

export default function FacultyGrid() {
  return (
    <Grid container spacing={3} sx={{ mt: 1 }}>
      {faculty.map((person) => (
        <Grid key={person.name} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%" }}>
            <ContentImage
              src={person.image}
              title={person.imageTitle}
              alt={person.name}
              sx={{ borderRadius: 0, aspectRatio: "4/3", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="overline" sx={{ display: "block", mb: 0.5 }}>
                Faculty
              </Typography>
              <Typography variant="h4" sx={{ mb: 1 }}>
                {person.name}
              </Typography>
              <Typography variant="body1">{person.bio}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
