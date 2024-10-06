import App from '@/app/App';
import Admin from '@/pages/admin/admin';
import Login from '@/pages/login/login';
import NoLogoutDetected from '@/pages/noLogoutDetected/noLogoutDetected';
import User from '@/pages/user/user';
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
