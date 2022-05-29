import axios from "axios";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

export function signin(formValue) {
    const URL = `https://hn.algolia.com/api/v1/users/pg`;

    return axios.post(URL, formValue)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
            })
            .catch((err) => {
                console.error('Log in failed! ' + err);
            });
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signin({
            username,
            password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <hr/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};