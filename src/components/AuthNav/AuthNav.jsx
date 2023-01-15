import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';
import { getIsLoggedIn, getUser } from 'redux/auth/authSelector';

import css from './AuthNav.module.css';

export default function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isLoading = useSelector(getIsLoading);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      {isLoggedIn ? (
        <>
          <p className={css.text}>
            {`Hello`}
            <span className={css.userName}>{user.name}</span>
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/login"
              >
                Sigh in
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/register"
              >
                Sigh up
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
