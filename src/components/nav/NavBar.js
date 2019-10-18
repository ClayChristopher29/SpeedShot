import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Speed Shot<br />
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/range">My Range Journal</Link></li>
            <li><Link className="nav-link" to ="/drills">Drills</Link></li>
            <li><Link className="nav-link" to ="/mydrills">My Saved Drills</Link></li>
            <li><Link className= "nav-link" to ="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;