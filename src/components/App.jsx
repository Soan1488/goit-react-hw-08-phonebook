import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'redux/auth/PrivateRoute';
import PublicRoute from 'redux/auth/PublicRoute';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const SignIn = lazy(() => import('pages/SighIn/SignIn'));
const SignUp = lazy(() => import('pages/SighUp/SignUp'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectPath="/contacts">
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectPath="/contacts">
                <SignUp />
              </PublicRoute>
            }
          />
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
