import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import './app/styles/index.css';
import '@/app/fonts/stylesheet.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);

root.render(
  <BrowserRouter basename="/">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#196AA6',
          fontFamily: 'TeX Gyre Adventor',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
