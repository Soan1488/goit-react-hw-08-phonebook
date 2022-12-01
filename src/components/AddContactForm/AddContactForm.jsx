import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './AddContactForm.module.css';
import Button from './AddButton/AddButton';

export default class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  ChangeHandle = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    if (this.props.contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.props.AddContact({
        name: name,
        number: number,
      });
    }

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.onSubmit}>
        <label className={css.label}>
          <span className={css.text}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Jane Dou"
            className={css.input}
            onChange={this.ChangeHandle}
            value={name}
          />
        </label>
        <label className={css.label}>
          <span className={css.text}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Your number"
            className={css.input}
            onChange={this.ChangeHandle}
            value={number}
          />
        </label>
        <Button type="submit" name="AddContact" text="Add contact" />
      </form>
    );
  }
}

AddContactForm.propTypes = {
  AddContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
