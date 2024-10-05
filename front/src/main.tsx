import { router } from '@/router/router';
import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './app/styles/index.css';
import '@/app/fonts/stylesheet.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);

root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#196AA6',
        fontFamily: 'TeX Gyre Adventor',
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);
