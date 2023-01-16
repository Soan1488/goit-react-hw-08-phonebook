import PropTypes from 'prop-types';

import Button from '../RemoveButton/RemoveButton';

import css from './ContactItem.module.css';

export default function ContactItem({ name, number, id }) {
  return (
    <>
      <div className={css.box}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <Button id={id} />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
