import { AppBar, Box, Button, Container, Divider, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import ResponsiveMenu from './ResponsiveMenu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Notes', path: '/notes' }
];

const SiteHeader = () => {

  return (<AppBar elevation={0} position="sticky" sx={{
    height: 60,
    py: 2,
    pt: 0
  }} component="nav">
    <Container max-width="lg" sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <Link href="/" underline="none" color="inherit">
        <Paper elevation={0} sx={{
          p: 1, bgcolor: 'text.primary', width: 80, height: 80, left: 0, display: "flex", alignItems: 'center', alignSelf: "self-start", justifyContent: 'center', borderRadius: 0, transition: 'background 0.5s ease', '&:hover': {
            bgcolor: 'primary.dark'
          }
        }}>
          <Typography component="h1" variant="h6" color="white" margin="0">
            Juan Ojeda
          </Typography>
        </Paper>
      </Link>

      <Box sx={{ display: { xs: 'none', sm: 'block' }, pt: 1 }}>
        {navItems.map((item) => (
          <Link key={item.name} href={item.path} variant="h6" color="primary.contrastText" sx={{
            mx: 1,
            '&:after': {
              backgroundColor: 'primary.light',
            }
          }}>
            {item.name}
          </Link>
        ))}
      </Box>

      <ResponsiveMenu navItems={navItems} />

    </Container>
  </AppBar >)
}

export default SiteHeader;