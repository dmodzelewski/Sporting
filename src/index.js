/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from "react-router-dom"

const rootApp = document.getElementById('app');

render(
    <Router>
        <App />
    </Router>
    , rootApp);

