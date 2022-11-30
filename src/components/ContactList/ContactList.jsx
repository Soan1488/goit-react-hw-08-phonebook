import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ contacts, filter, onButtonClick }) {
  const FilteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.list}>
        {FilteredContacts.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <ContactItem
                name={item.name}
                number={item.number}
                onButtonClick={onButtonClick}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
