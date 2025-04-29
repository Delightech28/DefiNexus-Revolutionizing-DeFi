import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="nav">
      {/* Hamburger Menu Button */}
      <i
        className="uil uil-bars navOpenBtn"
        onClick={() => setIsMenuOpen(true)}
      ></i>

      {/* Logo */}
      <NavLink to="/">
        <img className="logo" src="/definexus.jpg" alt="DefiNexus Logo" />
      </NavLink>

      {/* Dark Mode Toggle */}
      <i
        className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}
        id="toggle"
        onClick={toggleDarkMode}
      ></i>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'openNav' : ''}`}>
        {/* Close Button */}
        <i
          className="uil uil-times navCloseBtn"
          onClick={() => setIsMenuOpen(false)}
        ></i>
        <li>
          <NavLink
            className="navchi"
            to="/"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#f51414' : 'inherit',
            })}
          >
            <i className="fas fa-scroll"></i> Welcome to DefiNexus
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navchi"
            to="/howitworks"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#f51414' : 'inherit',
            })}
          >
            How it does work
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navchi"
            to="/refferal"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#f51414' : 'inherit',
            })}
          >
            Referral System
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navchi"
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#f51414' : 'inherit',
            })}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navchi"
            to="/contactus"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#f51414' : 'inherit',
            })}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;