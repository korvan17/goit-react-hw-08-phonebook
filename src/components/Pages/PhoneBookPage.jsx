import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ButtonAppBar from 'components/header';

export default function PhoneBookPage() {
  return (
    <>
      <ButtonAppBar />
      <ContactForm />
      <Filter />
    </>
  );
}
