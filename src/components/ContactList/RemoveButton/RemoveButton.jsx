import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './RemoveButton.module.css';

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        dispatch(deleteContact(id));
      }}
    >
      Delete
    </button>
  );
}

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};
