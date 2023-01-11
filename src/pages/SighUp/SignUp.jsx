import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandle = ({ target: { value, name } }) => {
    console.log(value, name);
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={formHandle} />
      </label>
      <label>
        Email
        <input type="email" name="email" value={email} onChange={formHandle} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={formHandle}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
