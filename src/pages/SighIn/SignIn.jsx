import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandle = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const changeHandle = ({ target: { value, name } }) => {
    switch (name) {
      case 'email':
        return setEmail(value.trim(' '));
      case 'password':
        return setPassword(value.trim(' '));
      default:
        return;
    }
  };

  return (
    <form onSubmit={formHandle}>
      <label>
        Email{' '}
        <input
          type="email"
          name="email"
          onChange={changeHandle}
          value={email}
          required
        />
      </label>
      <label>
        Password{' '}
        <input
          type="password"
          name="password"
          onChange={changeHandle}
          value={password}
          required
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
