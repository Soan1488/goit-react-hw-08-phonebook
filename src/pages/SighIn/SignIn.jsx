import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import css from './SignIn.module.css';

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
    <form onSubmit={formHandle} className={css.form}>
      <p className={css.title}>
        Please write your email and password to log in
      </p>
      <label className={css.label}>
        Email{' '}
        <Input
          type="email"
          name="email"
          handle={changeHandle}
          value={email}
          required
        />
      </label>
      <label className={css.label}>
        Password{' '}
        <Input
          type="password"
          name="password"
          handle={changeHandle}
          value={password}
          required
        />
      </label>
      <Button type="submit" text="Sign In" cssClass="add" />
    </form>
  );
}
