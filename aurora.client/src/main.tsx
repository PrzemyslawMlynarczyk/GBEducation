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
import Class from "./pages/Class/Class.tsx";
import ClassTask from "./pages/ClassTask/ClassTask.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Acceptance from "./pages/Acceptance/Acceptance.tsx";
import TeacherTasks from "./pages/TeacherTasks/TeacherTasks.tsx";
import UploadFile from "./pages/UploadFile/UploadFile.tsx";
import EditFile from "./pages/EditFile/EditFile.tsx";
import MyClass from "./pages/MyClass/MyClass.tsx";

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
                <Route path="/Class" element={<Class />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ClassTask" element={<ClassTask />} />
                <Route path="/Acceptance" element={<Acceptance />} />
                <Route path="/TeacherTasks" element={<TeacherTasks />} />
                <Route path="/UploadFile" element={<UploadFile />} />
                <Route path="/EditFile" element={<EditFile />} />
                <Route path="/MyClass" element={<MyClass />} />

            </Routes>
        </BrowserRouter>
    </MantineProvider>
);
