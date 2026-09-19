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
          <Card>
            <ContentImage src={person.image} title={person.imageTitle} alt={person.name} sx={{ borderRadius: 0 }} />
            <CardContent>
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
