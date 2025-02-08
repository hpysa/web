import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Providers from './components/Providers';

import './index.css';

const container = document.getElementById('root');
const year = (new Date()).getFullYear();

createRoot(container!).render(
  <StrictMode>
    <Providers.AntdProvider>
      <Providers.QueryProvider>
        <BrowserRouter basename='/'>
          <App />
          <footer>
            <br /><hr />
            <p>&copy; {year}  - Heritage Park YSA</p>
          </footer>
        </BrowserRouter>
      </Providers.QueryProvider>
    </Providers.AntdProvider>
  </StrictMode>
);
