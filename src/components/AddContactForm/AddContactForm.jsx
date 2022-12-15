import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './AddContactForm.module.css';
import Button from './AddButton/AddButton';

export default function AddContactForm({ AddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandle = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    AddContact({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
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
          onChange={changeHandle}
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
          onChange={changeHandle}
          value={number}
        />
      </label>
      <Button type="submit" name="AddContact" text="Add contact" />
    </form>
  );
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
