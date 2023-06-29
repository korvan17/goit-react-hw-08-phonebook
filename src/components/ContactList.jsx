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
import { useSelector } from 'react-redux';
import { getStatusFilter } from './redux/filterSlice';
const defaultTheme = createTheme();

export default function ContactList() {
  const { data } = useGetContactsQuery();
  const statusFilter = useSelector(getStatusFilter);

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
            {data &&
              data
                .filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(statusFilter.toLowerCase())
                )
                .map(contact => <Contact Contact={contact} key={contact.id} />)}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
