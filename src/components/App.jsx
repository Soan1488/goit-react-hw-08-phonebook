import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddNewContact = data => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
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
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm
            AddContact={this.AddNewContact}
            contacts={this.state.contacts}
          />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Filter
              onFilterChange={this.FilterHandle}
              filterValue={this.state.filter}
            />

            <ContactList
              contacts={this.state.contacts}
              filter={this.state.filter}
              onButtonClick={this.RemoveHandle}
            />
          </Section>
        )}
      </>
    );
  }
}
