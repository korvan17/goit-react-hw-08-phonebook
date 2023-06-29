import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogoutMutation } from './redux/contactSlice';
import { getStatusAuth, setAuth } from './redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const styleLink = { color: 'white', margin: '30px', textDecoration: 'none' };

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [logoutPhonebook] = useLogoutMutation();
  const isLoggedIn = useSelector(getStatusAuth);
  const dispatch = useDispatch();

  function handleClick() {
    logoutPhonebook();
    navigate('/login');
    dispatch(setAuth(false))
  }
  // const isLoggedIn = getStatusAuth()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={styleLink}>
              HOME PAGE
            </NavLink>
          </Typography>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login" style={styleLink}>
                Login
              </NavLink>
              <NavLink to="/registraton" style={styleLink}>
                Registraton
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/phonebook" style={styleLink}>
                Phonebook
              </NavLink>
              <Button
                color="inherit"
                onClick={handleClick}
                startIcon={<LogoutIcon />}
              ></Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
