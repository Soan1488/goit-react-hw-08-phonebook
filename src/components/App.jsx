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

  AddNewContact = ({ name, number }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  FilterHandle = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  RemoveHandle = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm AddContact={this.AddNewContact} contacts={contacts} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter onFilterChange={this.FilterHandle} filterValue={filter} />

            <ContactList
              contacts={contacts}
              filter={filter}
              onButtonClick={this.RemoveHandle}
            />
          </Section>
        )}
      </>
    );
  }
}
