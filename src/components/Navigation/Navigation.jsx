import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <AuthNav />
    </nav>
  );
}
