import PropTypes from 'prop-types';

import css from './AddButton.module.css';

export default function AddContactButton({ type, name, text }) {
  return (
    <button type={type} name={name} className={css.button}>
      {text}
    </button>
  );
}

AddContactButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};
