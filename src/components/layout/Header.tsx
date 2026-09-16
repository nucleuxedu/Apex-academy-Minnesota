import LoginDialog from "@/components/auth/LoginDialog";
import { NAV_ITEMS, SITE } from "@/data/site";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  function isActive(href: string) {
    return router.pathname === href;
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.94)",
          color: "text.primary",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 72, md: 84 },
            px: { xs: 2, md: 4 },
            gap: 2,
          }}
        >
          <Box
            component={Link}
            href="/"
            aria-label="MPA"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              mr: { md: 1 },
            }}
          >
          
            {/* <Box
              sx={{
                width: 52,
                height: 52,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={SITE.images.mark}
                alt="Minnesota Preparatory Academy logo"
                fill
                sizes="52px"
                style={{ objectFit: "contain" }}
              />
            </Box> */}
            <Box >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, letterSpacing: 1, lineHeight: 1 }}
              >
                MPA
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Minnesota Prep Academy
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            spacing={0.25}
            sx={{
              display: { xs: "none", lg: "flex" },
              flex: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const active = !item.external && isActive(item.href);
              return (
                <Button
                  key={item.label}
                  component={item.external ? "a" : Link}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  color="inherit"
                  sx={{
                    borderRadius: 0,
                    px: 1.25,
                    minWidth: 0,
                    fontSize: 13,
                    borderTop: "3px solid",
                    borderColor: active ? "primary.main" : "transparent",
                    color: active ? "primary.main" : "text.primary",
                    "&:hover": {
                      borderColor: "secondary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
            <Button
              color="inherit"
              onClick={() => setLoginOpen(true)}
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              Log In
            </Button>
            <Button component={Link} href="/support-us" variant="contained">
              Donate
            </Button>
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, p: 2 }} role="presentation">
          <Stack
            direction="row"
            sx={{ mb: 1, alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton aria-label="Close menu" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.label}
                component={item.external ? "a" : Link}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                selected={!item.external && isActive(item.href)}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => {
              setOpen(false);
              setLoginOpen(true);
            }}
          >
            Log In
          </Button>
        </Box>
      </Drawer>

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
