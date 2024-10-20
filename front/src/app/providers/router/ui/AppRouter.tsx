import { Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import type { AppRoutesProps } from '@/shared/config/routerConfig/model/types/types';
import { routeConfig } from '@/shared/config/routerConfig/routerConfig';
import { AppLayout } from '@/widgets/AppLayout';

const AppRouter = () => {
  const renderRoute = useCallback((arr: [routeName: string, route: AppRoutesProps]) => {
    const [_routeName, route] = arr;

    const { title, element, path, withLayout } = route;

    const elemWithLayout = <AppLayout title={title} withLayout={withLayout} children={element} />;

    return <Route key={path} path={path} element={elemWithLayout} />;
  }, []);

  return (
    <Suspense>
      <Routes>{Object.entries(routeConfig).map(renderRoute)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
