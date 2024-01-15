import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const NavBar: React.FC = () => {  
  return (
    <AppBar className="opacity-50 " position="sticky">
      <Toolbar className='navbar bg-primaryLight'>
        <Typography variant="h6" className="text-textLight">Hospital Collaboration</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
