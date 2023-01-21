import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

import Button from '../../Button/Button';

import css from './ContactItem.module.css';

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.box}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <Button
        handle={() => {
          dispatch(deleteContact(id));
        }}
        text="Delete"
      />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
