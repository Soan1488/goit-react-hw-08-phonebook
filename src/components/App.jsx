import { Component } from 'react';
import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Andrii Sokolovskyi',
      //   number: '7777777777',
      // },
      // {
      //   id: 2,
      //   name: 'Andrii Sokolovskyi',
      //   number: '7777777777',
      // },
    ],
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
