import React from 'react';
import SignUpButton from './SignUpButton';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="nav-links container">
          <Link className="logo" to="/"><i class="fas fa-running"></i> </Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to='/contact'>Contact</Link>
          <Link className="link" to="/feeds">Feeds</Link>
          <SignUpButton>Sign Up</SignUpButton>
        </div>
      </div>
    )
  }

export default NavBar;

