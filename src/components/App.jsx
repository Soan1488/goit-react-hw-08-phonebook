import { ToastContainer } from 'react-toastify';

import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import SignIn from 'pages/SighIn/SignIn';
import SignUp from 'pages/SighUp/SignUp';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
