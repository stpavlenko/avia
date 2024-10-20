import App from '@/app/App';
import Admin from '@/pages/Admin/admin';
import NoLogoutDetected from '@/pages/NoLogoutDetected/ui/NoLogoutDetected';
import User from '@/pages/User/ui/User';
import Login from '@/pages/login/login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/no-logout-detected',
    element: <NoLogoutDetected />,
  },
]);
