import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';

import { getIsLoggedIn, getUser } from 'redux/auth/authSelector';

export default function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{`Hello ${user.name}`}</p>
          <button type="button" onClick={() => dispatch(logout())}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <ul>
            <li>
              <NavLink to="/login">Sigh in</NavLink>
            </li>
            <li>
              <NavLink to="/register">Sigh up</NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
