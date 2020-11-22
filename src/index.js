/* eslint-disable no-undef */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import App from './app'

const rootApp = document.getElementById('app')
render(
  <Router>
    <Route component={App} />
  </Router>,
  rootApp,
)
