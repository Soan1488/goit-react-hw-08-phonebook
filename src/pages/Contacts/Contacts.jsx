import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';

import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <>
      <div className={css.wraper}>
        <Section title="Find contacts by name">
          <Filter />
        </Section>
        <Section title="Phonebook">
          <AddContactForm />
        </Section>
      </div>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
}
