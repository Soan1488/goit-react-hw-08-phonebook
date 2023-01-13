import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContactApi(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContactApi(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}

export async function signUpUser(user) {
  const { data } = await axios.post('/users/signup', user);
  token.set(data.token);
  return data;
}

export async function signInUser(user) {
  const { data } = await axios.post('/users/login', user);
  token.set(data.token);
  return data;
}

export async function loguotUser(token) {
  axios.post('/users/logout');
  token.unset();
}

export async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
