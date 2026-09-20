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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { mainNav, site, type NavChild, type NavItem } from "@/data/site";
import { isInternalHref, toAppHref } from "@/utils/links";
import { useInquiry } from "@/components/common/InquiryDialog";
import { colors } from "@/theme/theme";

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
      {/* <Box sx={{ bgcolor: colors.ink, color: "#f4efe6", borderBottom: "1px solid", borderColor: "secondary.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            py: 0.7,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2.5 }, flexWrap: "wrap" }}>
            <Button
              color="inherit"
              href={`tel:${site.phoneTel}`}
              startIcon={<PhoneIcon sx={{ fontSize: 16 }} />}
              sx={{ minWidth: 0, fontSize: "0.82rem", letterSpacing: "0.04em" }}
            >
              {site.phoneDisplay}
              <Chip
                label="24hrs"
                size="small"
                sx={{ ml: 1, bgcolor: "secondary.main", color: colors.ink, height: 18, fontWeight: 700, fontSize: "0.65rem" }}
              />
            </Button>
            <Typography variant="body2" sx={{ display: { xs: "none", md: "block" }, color: "rgba(244,239,230,0.72)", fontSize: "0.8rem" }}>
              {site.hours}
            </Typography>
            <Button
              color="inherit"
              startIcon={<EmailIcon sx={{ fontSize: 16 }} />}
              onClick={openInquiry}
              href={`mailto:${site.email}`}
              sx={{ fontSize: "0.82rem" }}
            >
              Inquire
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
            <IconButton color="inherit" href={site.social[0].href} target="_blank" rel="noreferrer" aria-label="Facebook" size="small">
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href={site.social[1].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" size="small">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" href={site.social[2].href} aria-label="Email" size="small">
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Container>
      </Box> */}

      <AppBar position="static" elevation={0} sx={{ bgcolor: colors.ink, color: colors.platinum, borderBottom: "1px solid", borderColor: "rgba(197,201,209,0.22)" }}>
        <Toolbar
          sx={{
            minHeight: { xs: 84, md: 104 },
            px: { xs: 2, md: 3 },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Box component={NextLink} href="/" sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Box
              component="img"
              src={site.logo.src}
              srcSet={`${site.logo.src} 1x, ${site.logo.retina} 2x`}
              alt={site.logo.alt}
              sx={{ height: { xs: 64, md: 84 }, width: "auto" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.25, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {mainNav.map((item) => {
              const active = router.pathname === item.href || (item.href !== "/" && router.pathname.startsWith(item.href));
              const isDonate = item.label === "Donate";
              return (
                <Button
                  key={item.label}
                  color="inherit"
                  endIcon={item.children ? <KeyboardArrowDownIcon sx={{ fontSize: 16 }} /> : undefined}
                  onClick={(e) => {
                    if (item.children) {
                      setActiveMenu(item);
                      setMenuAnchor(e.currentTarget);
                    } else {
                      go(item.href);
                    }
                  }}
                  sx={{
                    color: isDonate ? colors.ink : active ? "secondary.main" : colors.platinum,
                    bgcolor: isDonate ? "secondary.main" : "transparent",
                    fontWeight: active || isDonate ? 700 : 600,
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    px: 1.4,
                    minWidth: 0,
                    borderBottom: active && !isDonate ? "2px solid" : "2px solid transparent",
                    borderColor: active && !isDonate ? "secondary.main" : "transparent",
                    borderRadius: 0,
                    "&:hover": { bgcolor: isDonate ? "#dfe3ea" : "rgba(197,201,209,0.12)" },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
          <IconButton sx={{ display: { xs: "inline-flex", lg: "none" }, color: "secondary.main" }} onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        slotProps={{ paper: { sx: { minWidth: 260, borderRadius: 0, border: "1px solid", borderColor: "divider", mt: 1 } } }}
      >
        {activeMenu?.children?.map((child) => (
          <Box key={child.label}>
            <MenuItem onClick={() => go(child.href)} sx={{ fontFamily: "inherit" }}>
              {child.label}
            </MenuItem>
            {child.children?.map((grandchild) => (
              <MenuItem key={grandchild.label} sx={{ pl: 4 }} onClick={() => go(grandchild.href)}>
                {grandchild.label}
              </MenuItem>
            ))}
          </Box>
        ))}
      </Menu>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 320,
              bgcolor: colors.ink,
              color: "secondary.main",
              "& .MuiListItemText-primary": {
                color: "secondary.main",
                fontWeight: 600,
              },
              "& .MuiListItemText-secondary": {
                color: "secondary.main",
              },
              "& .MuiSvgIcon-root": {
                color: "secondary.main",
              },
            },
          },
        }}
      >
        <Box sx={{ pt: 3 }} role="presentation">
          <Typography variant="overline" sx={{ px: 3, display: "block", color: "secondary.main" }}>
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
