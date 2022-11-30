import PropTypes from 'prop-types';
import css from './AddContactForm.module.css';
import AddContactButton from './AddContactButton';

export default function AddContactForm(props) {
  return (
    <form className={css.form}>
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
        />
      </label>
      <AddContactButton type="submit" name="AddContact" text="Add contact" />
    </form>
  );
}
