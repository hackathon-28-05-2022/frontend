import React from 'react';
import Login from "./components/Login/Login";
import Feed from "./pages/Feed/Feed";
import useToken from "./components/useToken";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

const App = () => {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={token} />
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Feed />}/>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;