import PropTypes from 'prop-types';
import css from './RemoveButton.module.css';

export default function AddContactButton({ onButtonClick, id }) {
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => {
        onButtonClick(id);
      }}
    >
      Delete
    </button>
  );
}

AddContactButton.propTypes = {
  onButtonClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};
