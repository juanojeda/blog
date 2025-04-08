"use client";

import React, { use } from 'react';
import { AppBar, Box, Container, Divider, Drawer, Icon, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    <Box>
      <IconButton
        color='inherit'
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          alignItems: 'center',
          mt: 1
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box component="nav" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Drawer anchor='top' variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 'auto', backgroundColor: 'primary.dark' }
        }}>
          <IconButton color='inherit' aria-label="close drawer" onClick={handleDrawerToggle} sx={{ position: 'absolute', right: 0, top: 0, m: 2, zIndex: 1 }}>
            <CloseIcon sx={{ color: 'primary.contrastText' }} />
          </IconButton>
          <List sx={{ textAlign: 'left', py: 4, px: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.path} variant='h5' color="primary.contrastText">{item.name}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveMenu;