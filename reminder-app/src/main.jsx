import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from "./components/nav";
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='https://dev--a52yk60.us.auth0.com'
      clientId='vBDk1vgPi4tzja9FxBynP9SPclX6tqS5'
      redirectUri={window.location.origin}
    >
      <Nav />
      <App />
    </Auth0Provider>
  </React.StrictMode>
);