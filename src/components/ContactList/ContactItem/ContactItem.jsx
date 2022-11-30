import PropTypes from 'prop-types';
import Button from '../RemoveButton/RemoveButton';

export default function ContactItem({ name, number, onButtonClick, id }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <Button onButtonClick={onButtonClick} id={id} />
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
