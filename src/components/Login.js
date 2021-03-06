import React from 'react';

import { loginUrl } from '../config/spotify';
import { loginUrlGuest } from '../config/spotify_guest';

import '../styles/Login.css';

//imports background image from the public folder
const loginBackground = window.location.origin + "/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg"

function Login() {
    return (
        <div 
            className="login"
            style={{background: `url(${loginBackground})`, backgroundRepeat: 'none', backgroundSize: 'cover'}}
        >
            
            <h1>Please Login With Your Spotify Account</h1>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            <a href={loginUrlGuest}>LOGIN AS A GUEST</a>
        </div>
    )
}

export default Login
