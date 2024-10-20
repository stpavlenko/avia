import { AppRoutes } from './routes';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.USER]: '/user',
  [AppRoutes.NO_LOGOUT_DETECTED]: '/no-logout-detected',
};
