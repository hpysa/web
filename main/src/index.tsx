import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AntdProvider, QueryProvider } from './Providers';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <StrictMode>
    <AntdProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </AntdProvider>
  </StrictMode>,
);
