import axios from 'axios';

const BASE_URL =
  'https://63b33b965901da0ab37ab2fa.mockapi.io/contacts/contacts';

export async function fetchContacts() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function addContactApi(contact) {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
}

export async function deleteContactApi(id) {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
}
