import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import Auth from './pages/Auth/Auth.tsx';
import { Error } from "./pages/Error/Error.tsx";
import HelpDesk from "./pages/HelpDesk/HelpDesk.tsx";
import Menu from "./pages/Menu/Menu.tsx";

// Tworzenie motywu Mantine
const theme = createTheme({

    primaryColor: 'gray',
    focusRing: 'always',
    defaultRadius: 'md',
    defaultGradient: { from: 'blue', to: 'red', deg: 45 }
});
// Routing
ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider theme={theme} defaultColorScheme="auto">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/404" element={<Error />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/HelpDesk" element={<HelpDesk />} />

            </Routes>
        </BrowserRouter>
    </MantineProvider>
);
