import { getFilter } from 'redux/filter/filterSelector';
import { filtered } from 'redux/filter/filterSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h3 className={css.text}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        placeholder="Start write name"
        className={css.input}
        value={filter}
        onChange={e => {
          dispatch(filtered(e.currentTarget.value));
        }}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
