import { Admin } from '@/pages/Admin';
import { NoLogoutDetected } from '@/pages/NoLogoutDetected';
import { User } from '@/pages/User';

import { PageTitle } from './model/types/page-title';
import { RoutePath } from './model/types/path';
import { AppRoutes } from './model/types/routes';
import type { AppRoutesProps } from './model/types/types';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <Admin />,
    title: PageTitle.ADMIN,
  },
  [AppRoutes.USER]: {
    path: RoutePath.user,
    element: <User />,
    title: PageTitle.USER,
  },
  [AppRoutes.NO_LOGOUT_DETECTED]: {
    path: RoutePath['no-logout-detected'],
    element: <NoLogoutDetected />,
    title: PageTitle.NO_LOGOUT_DETECTED,
  },
};
