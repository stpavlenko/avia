import type { ReactNode } from 'react';

import type { RouteProps } from 'react-router-dom';

export type AppRoutesProps = Omit<RouteProps, 'element'> & {
  title: string;
  element: ReactNode;
  withLayout?: boolean;
};
