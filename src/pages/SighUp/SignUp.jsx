import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import Button from '../../components/Button/Button';
import Input from 'components/Input/Input';

import css from './SignUp.module.css';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandle = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value.trim(' '));
    } else if (name === 'email') {
      setEmail(value.trim(' '));
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <p className={css.title}>
        {' '}
        Please write your name, email and password to sign up
      </p>
      <label className={css.label}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          handle={formHandle}
          required
          placeholder="Jane Dou"
        />
      </label>
      <label className={css.label}>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          handle={formHandle}
          required
          placeholder="jane111@email.com"
        />
      </label>
      <label className={css.label}>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          handle={formHandle}
          required
        />
      </label>
      <Button type="submit" text="Sign Up" cssClass="add" />
    </form>
  );
}
