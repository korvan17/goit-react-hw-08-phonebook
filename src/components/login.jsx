import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { useLoginMutation } from './redux/contactSlice';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/authSlice';

const defaultTheme = createTheme();

export default function SignIn() {
  const [login, { isSuccess }] = useLoginMutation();
  const dispatch = useDispatch()
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    try {
      await login({ email: user.get('email'), password: user.get('password') });
      dispatch(setAuth(true))
    } catch (error) {}
  }

  return (
    <>
    {isSuccess && <Navigate to="/phonebook" />}
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <NavLink to="/registraton">
                  {"Don't have an account? Registration"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}
