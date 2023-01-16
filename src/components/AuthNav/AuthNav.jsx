import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';
import ClipLoader from 'react-spinners/ClipLoader';
import { getIsLoading, getIsLoggedIn, getUser } from 'redux/auth/authSelector';

import css from './AuthNav.module.css';

export default function AuthNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      {isLoading ? (
        <>
          <ClipLoader
            color={css.color}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={{
              display: 'block',
              margin: '0',
              marginLeft: 'auto',
              marginRight: '150',
            }}
          />
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </button>
        </>
      ) : isLoggedIn ? (
        <>
          <p className={css.text}>
            {`Welkome`}
            <span className={css.userName}>{user.email}</span>
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
                Sign in
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/register"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
