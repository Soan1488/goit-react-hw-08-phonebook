import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
  const response = await axios.post('/users/signup', user);
  return response;
}
