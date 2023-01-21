import PropTypes from 'prop-types';

import css from './Button.module.css';

export default function AddContactButton({
  type = 'button',
  name = 'button',
  text = 'Button',
  handle = null,
  cssClass = 'button',
}) {
  return (
    <button type={type} name={name} className={css[cssClass]} onClick={handle}>
      {text}
    </button>
  );
}

AddContactButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  handle: PropTypes.func,
  cssClass: PropTypes.string,
};
