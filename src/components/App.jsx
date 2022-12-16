import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    const isExist = contacts.find(item => item.name === name);
    if (isExist) {
      return alert(`${name} is already in contacts`);
    }
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const filterHandle = e => {
    setFilter(e.currentTarget.value);
  };

  const removeHandle = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <>
      <Section title="Phonebook">
        <AddContactForm AddContact={addNewContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter onFilterChange={filterHandle} filterValue={filter} />

          <ContactList
            contacts={contacts}
            filter={filter}
            onButtonClick={removeHandle}
          />
        </Section>
      )}
    </>
  );
}
