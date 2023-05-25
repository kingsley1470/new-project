import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/signin" className="nav-link">Sign In</a>
        </li>
        <li className="nav-item">
          <a href="/signout" className="nav-link">Sign Out</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
