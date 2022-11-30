import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ onFilterChange, filterValue }) {
  return (
    <>
      <h3 className={css.text}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        placeholder="Start write name"
        className={css.input}
        value={filterValue}
        onChange={onFilterChange}
      />
    </>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.string,
};
