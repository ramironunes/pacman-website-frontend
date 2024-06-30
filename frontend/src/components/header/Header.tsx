/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-22 19:04:13
 * @Info:   A brief description of the file
 * ===========================================================================
 */

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          PACMAN
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Game</Button>
        <Button color="inherit">Analysis</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;