import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { themes } from './Component/Themes/Themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ThemeProvider theme={themes}>
            <App />
        </ThemeProvider>
);
