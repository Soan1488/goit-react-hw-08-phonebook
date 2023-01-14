import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from './authSelector';

export default function PrivateRoute({ children, redirectPath = '/login' }) {
  const isLogin = useSelector(getIsLoggedIn);
  return isLogin ? children : <Navigate to={redirectPath} replace />;
}
