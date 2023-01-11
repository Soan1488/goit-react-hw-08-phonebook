import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
      <AuthNav />
    </nav>
  );
}
