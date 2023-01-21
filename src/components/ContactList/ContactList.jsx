import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from './ContactItem/ContactItem';
import { getContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelector';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';

import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const FilteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

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
