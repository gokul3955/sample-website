import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2>Chai Bliss ☕</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
