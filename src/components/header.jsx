import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const styleLink = { color: 'white', margin: '30px', textDecoration: 'none' };

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={styleLink}>
              HOME PAGE
            </NavLink>
          </Typography>
          <NavLink to="/phonebook" style={styleLink}>
            Phonebook
          </NavLink>
          <NavLink to="/login" style={styleLink}>
            Login
          </NavLink>
          <NavLink to="/registraton" style={styleLink}>
            Registraton
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
