import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStatusAuth } from './redux/authSlice';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getStatusAuth);
  const navigate = useNavigate();
  return isLoggedIn ? children : navigate('/');
}
