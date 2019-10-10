import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import SpeedShot from './components/SpeedShot'

ReactDOM.render(
  <Router>
    <SpeedShot />
  </Router>
  , document.getElementById('root'))