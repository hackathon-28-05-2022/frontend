import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Feed from "./pages/Feed/Feed";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import App from "./App";

createRoot(document.getElementById('root')).render(
    <App/>
);
