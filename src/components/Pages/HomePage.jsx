import { Typography } from '@mui/material';
import ButtonAppBar from 'components/header';

export default function HomePage() {
  return (
    <>
      <ButtonAppBar />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Welcome to your phonebook
      </Typography>
    </>
  );
}
