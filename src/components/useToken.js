import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        return localStorage.getItem('token')?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        setToken(localStorage.setItem('token'));
    };

    return {
        setToken: saveToken,
        token
    }
}