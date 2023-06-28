import {
  Box,
  Container,
  List,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useGetContactsQuery } from './redux/contactSlice';
import Contact from './Contact';
const defaultTheme = createTheme();

export default function ContactList() {
  const { data } = useGetContactsQuery();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            List of contacts
          </Typography>
          <List>
            {data && data.map(contact => <Contact name={contact.name} key={contact.id}/>)}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
