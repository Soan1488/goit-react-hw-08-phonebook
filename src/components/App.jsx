import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const isExist = this.state.contacts.find(item => item.name === name);
    if (isExist) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  filterHandle = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  removeHandle = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm AddContact={this.addNewContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter onFilterChange={this.filterHandle} filterValue={filter} />

            <ContactList
              contacts={contacts}
              filter={filter}
              onButtonClick={this.removeHandle}
            />
          </Section>
        )}
      </>
    );
  }
}
