import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelector';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const FilteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {FilteredContacts.map(item => {
            return (
              <li key={item.id} className={css.item}>
                <ContactItem
                  name={item.name}
                  number={item.number}
                  id={item.id}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
