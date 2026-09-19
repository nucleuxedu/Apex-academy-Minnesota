import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { mainNav, site, type NavChild, type NavItem } from "@/data/site";
import { isInternalHref, toAppHref } from "@/utils/links";
import { useInquiry } from "@/components/common/InquiryDialog";

export default function Header() {
  const router = useRouter();
  const { openInquiry } = useInquiry();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<NavItem | null>(null);

  const go = (href: string) => {
    const mapped = toAppHref(href);
    setDrawerOpen(false);
    setMenuAnchor(null);
    if (isInternalHref(mapped)) router.push(mapped);
    else window.open(mapped, mapped.startsWith("http") ? "_blank" : "_self");
  };

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 1200 }}>
      <Box sx={{ bgcolor: "primary.main", color: "white" }}>
        <Container maxWidth="lg" sx={{ py: 0.75, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              color="inherit"
              href={`tel:${site.phoneTel}`}
              startIcon={<PhoneIcon />}
              sx={{ minWidth: 0 }}
            >
              {site.phoneDisplay}
              <Chip label="24hrs" size="small" sx={{ ml: 1, bgcolor: "secondary.main", color: "white", height: 20 }} />
            </Button>
            <Button color="inherit" startIcon={<EmailIcon />} onClick={openInquiry} href={`mailto:${site.email}`}>
              Inquire
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton color="inherit" href={site.social[0].href} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href={site.social[1].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href={site.social[2].href} aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <AppBar position="static" color="inherit" elevation={3} sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ flexDirection: "column", py: 1.5 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{ display: "flex", justifyContent: "center", mb: { xs: 0, md: 1 } }}
          >
            <Box
              component="img"
              src={site.logo.src}
              srcSet={`${site.logo.src} 1x, ${site.logo.retina} 2x`}
              alt={site.logo.alt}
              sx={{ height: { xs: 64, md: 88 }, width: "auto" }}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: { xs: "flex-end", md: "center" } }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: "wrap", justifyContent: "center", gap: 0.5 }}>
              {mainNav.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={(e) => {
                    if (item.children) {
                      setActiveMenu(item);
                      setMenuAnchor(e.currentTarget);
                    } else {
                      go(item.href);
                    }
                  }}
                  sx={{
                    color: router.pathname === item.href ? "primary.main" : "text.primary",
                    fontWeight: router.pathname === item.href ? 800 : 600,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }} onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        slotProps={{ paper: { sx: { minWidth: 240 } } }}
      >
        {activeMenu?.children?.map((child) => (
          <Box key={child.label}>
            <MenuItem onClick={() => go(child.href)}>{child.label}</MenuItem>
            {child.children?.map((grandchild) => (
              <MenuItem key={grandchild.label} sx={{ pl: 4 }} onClick={() => go(grandchild.href)}>
                {grandchild.label}
              </MenuItem>
            ))}
          </Box>
        ))}
      </Menu>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, pt: 2 }} role="presentation">
          <Typography variant="h4" sx={{ px: 2, mb: 1 }}>
            Menu
          </Typography>
          <List>
            {mainNav.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                open={!!openGroups[item.label]}
                onToggle={() => setOpenGroups((s) => ({ ...s, [item.label]: !s[item.label] }))}
                onGo={go}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

function MobileItem({
  item,
  open,
  onToggle,
  onGo,
}: {
  item: NavItem | NavChild;
  open: boolean;
  onToggle: () => void;
  onGo: (href: string) => void;
}) {
  if (!item.children?.length) {
    return (
      <ListItemButton onClick={() => onGo(item.href)}>
        <ListItemText primary={item.label} />
      </ListItemButton>
    );
  }
  return (
    <>
      <ListItemButton onClick={onToggle}>
        <ListItemText primary={item.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {item.children.map((child) => (
            <Box key={child.label}>
              <ListItemButton sx={{ pl: 4 }} onClick={() => onGo(child.href)}>
                <ListItemText primary={child.label} />
              </ListItemButton>
              {child.children?.map((grandchild) => (
                <ListItemButton key={grandchild.label} sx={{ pl: 6 }} onClick={() => onGo(grandchild.href)}>
                  <ListItemText primary={grandchild.label} />
                </ListItemButton>
              ))}
            </Box>
          ))}
        </List>
      </Collapse>
    </>
  );
}
