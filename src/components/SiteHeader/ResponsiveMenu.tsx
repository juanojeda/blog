"use client";

import React, { use } from 'react';
import { AppBar, Box, Container, Divider, Drawer, Icon, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type NavItem = {
  name: string;
  path: string;
};

type ResponsiveMenuProps = {
  navItems: NavItem[];
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ navItems }) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box role="presentation">
      <IconButton
        color='inherit'
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' }
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box component="nav" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Drawer anchor='right' variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{
          display: { xs: 'block', sm: 'none' }
        }}>
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <Link href={item.path} variant='h5'>{item.name}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveMenu;