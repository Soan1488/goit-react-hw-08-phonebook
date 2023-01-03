import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '../RemoveButton/RemoveButton';
import { getLoading } from 'redux/contacts/contactsSelector';

export default function ContactItem({ name, number, id }) {
  const loading = useSelector(getLoading);
  console.log('🚀 ~ loading', loading);

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
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
