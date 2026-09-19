import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import SiteLink from "@/components/common/SiteLink";

type Props = {
  title: string;
  links: { label: string; href: string }[];
};

export default function LinkCard({ title, links }: Props) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h2" sx={{ mb: 1, fontSize: "1.5rem" }}>
          {title}
        </Typography>
        <List dense>
          {links.map((link) => (
            <ListItem key={link.label} sx={{ px: 0 }}>
              <SiteLink href={link.href}>{link.label}</SiteLink>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
