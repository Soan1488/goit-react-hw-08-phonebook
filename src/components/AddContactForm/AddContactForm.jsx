import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

import css from './AddContactForm.module.css';
import Input from 'components/Input/Input';
import Button from '../Button/Button';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const changeHandle = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(item => item.name === name);
    if (isExist) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <span className={css.text}>Name</span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Jane Dou"
          className={css.input}
          handle={changeHandle}
          value={name}
        />
      </label>
      <label className={css.label}>
        <span className={css.text}>Number</span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Your number"
          className={css.input}
          handle={changeHandle}
          value={number}
        />
      </label>
      <Button
        type="submit"
        name="AddContact"
        text="Add contact"
        cssClass="add"
      />
    </form>
  );
}
