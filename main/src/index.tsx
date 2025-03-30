import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AntdProvider, QueryProvider } from './Providers';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import './styles/globalStyles.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <GlobalStyles />
        <AntdProvider>
            <QueryProvider>
                <App />
            </QueryProvider>
        </AntdProvider>
    </StrictMode>
);
