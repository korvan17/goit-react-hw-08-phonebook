import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/filterSlice';

const defaultTheme = createTheme();

export default function Filter() {

  const dispatch = useDispatch()

  function handleSubmit(e){
    dispatch(setFilter(e.target.value))
  };

  return (
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
          <Typography component="h1" variant="h5">
            Find contacts by name
          </Typography>
          <Box
            component="form"
            onChange={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
