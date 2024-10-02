import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import './app/styles/index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);

root.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
