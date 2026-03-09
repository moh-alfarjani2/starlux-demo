import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app/globals.css';
import { StarluxProvider } from './context/starlux-context';
import { ErrorBoundary } from './components/layout/error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <StarluxProvider>
                <App />
            </StarluxProvider>
        </ErrorBoundary>
    </React.StrictMode>
);
