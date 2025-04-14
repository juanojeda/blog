"use client";
import { AppBar, Box, Container, Link, Paper, Typography } from "@mui/material";
import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Notes", path: "/notes" },
  { name: "Recipes", path: "/recipes" },
];

const isActive = (path, currentPath) => {
  if (currentPath.startsWith(path)) {
    return true;
  }
  return false;
};

const SiteHeader = () => {
  const currentPath = usePathname();

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        height: 60,
        py: 2,
        pt: 0,
      }}
      component="nav"
    >
      <Container
        max-width="lg"
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" underline="none" color="inherit">
          <Paper
            elevation={0}
            sx={{
              p: 1,
              bgcolor: "text.primary",
              width: 80,
              height: 80,
              left: 0,
              display: "flex",
              alignItems: "center",
              alignSelf: "self-start",
              justifyContent: "center",
              borderRadius: 0,
              transition: "background 0.5s ease",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <Typography component="h1" variant="h6" color="white" margin="0">
              Juan Ojeda
            </Typography>
          </Paper>
        </Link>

        <Box sx={{ display: { xs: "none", sm: "block" }, pt: 1 }}>
          {navItems.map((item) => {
            const isActiveLink = isActive(item.path, currentPath);
            return (
              <Link
                key={item.name}
                href={item.path}
                variant="h6"
                color="primary.contrastText"
                sx={{
                  mx: 1,
                  ...(isActiveLink
                    ? {
                        fontStyle: "italic",
                        "&:after": {
                          width: "100%",
                          backgroundColor: "primary.contrastText",
                        },
                      }
                    : {
                        "&:after": {
                          backgroundColor: "primary.light",
                        },
                      }),
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </Box>

        <ResponsiveMenu navItems={navItems} />
      </Container>
    </AppBar>
  );
};

export default SiteHeader;
