import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/filterSelector';
import { filtered } from 'redux/filter/filterSlice';

import Input from 'components/Input/Input';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <Input
        type="text"
        name="filter"
        placeholder="Start write name"
        value={filter}
        handle={e => {
          dispatch(filtered(e.currentTarget.value));
        }}
      />
    </>
  );
}
