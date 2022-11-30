import PropTypes from 'prop-types';
import css from './AddContactButton.module.css';

// To props give type, name, text
// To props give type, name, text

export default function AddContactButton({ type, name, text }) {
  return (
    <button type={type} name={name} className={css.button}>
      {text}
    </button>
  );
}

AddContactButton.proptype = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};
