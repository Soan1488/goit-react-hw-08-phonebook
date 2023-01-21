import PropTypes from 'prop-types';

import css from './Input.module.css';

export default function Input({
  type,
  name,
  handle,
  value,
  required,
  placeholder,
  pattern,
  title,
}) {
  return (
    <input
      type={type}
      name={name}
      onChange={handle}
      value={value}
      required={required}
      className={css.input}
      placeholder={placeholder}
      pattern={pattern}
      title={title}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  handle: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};
