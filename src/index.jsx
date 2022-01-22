import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { NoMatch } from './pages/NoMatch'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
