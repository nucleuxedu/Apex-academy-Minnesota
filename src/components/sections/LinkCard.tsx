import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import SiteLink from "@/components/common/SiteLink";
import { colors } from "@/theme/theme";

type Props = {
  title: string;
  links: { label: string; href: string }[];
};

export default function LinkCard({ title, links }: Props) {
  return (
    <Box
      sx={{
        mb: 3,
        bgcolor: colors.paper,
        border: "1px solid",
        borderColor: "divider",
        p: 3,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          bgcolor: "secondary.main",
        },
      }}
    >
      <Typography variant="overline" sx={{ display: "block", mb: 1 }}>
        Explore
      </Typography>
      <Typography variant="h3" sx={{ mb: 1.5, color: "primary.main" }}>
        {title}
      </Typography>
      <List dense disablePadding>
        {links.map((link) => (
          <ListItem key={link.label} sx={{ px: 0, py: 0.7, borderBottom: "1px solid", borderColor: "divider" }}>
            <SiteLink href={link.href} sx={{ fontWeight: 600 }}>
              {link.label}
            </SiteLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
