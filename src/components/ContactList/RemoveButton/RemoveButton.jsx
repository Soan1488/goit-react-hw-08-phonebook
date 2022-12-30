import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsSlice';
import css from './RemoveButton.module.css';

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        dispatch(removeContact(id));
      }}
    >
      Delete
    </button>
  );
}

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};
