import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
