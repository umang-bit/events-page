import React from 'react';
import './Navbar.css'; 
import logo from './assets/rotaract-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Gallery</a>
        <a href="#contact">Contact Us</a>
        <a href="#contact">Events</a>
        <a href="#contact">Our Team</a>
      </div>
    </nav>
  );
};

export default Navbar;

