import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <p>Hello user</p>
      <ul>
        <li>
          <NavLink to="/login">Sigh in</NavLink>
        </li>
        <li>
          <NavLink to="/register">Sigh up</NavLink>
        </li>
      </ul>
      <button type="button">Sign out</button>
    </div>
  );
}
