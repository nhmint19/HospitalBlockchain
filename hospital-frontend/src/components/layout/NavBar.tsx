import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Hospital Collaboration</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
