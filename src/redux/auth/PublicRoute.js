import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from './authSelector';

export default function PublicRoute({
  children,
  redirectPath = '/',
  restricted,
}) {
  const isLogin = useSelector(getIsLoggedIn);
  const shouldRedirect = isLogin && restricted;

  return shouldRedirect ? <Navigate to={redirectPath} replace /> : children;
}
