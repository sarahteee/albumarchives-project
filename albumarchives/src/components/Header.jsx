import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <a href="/" className="nav-logo">AlbumArchives</a>
      <div className="nav-menu">
        <a href="/" className="nav-item">Home</a>
        <a href="#!" className="nav-item">About</a>
        <a href="#!" className="nav-item">Contact</a>
      </div>
    </nav>
  </header>
);



export default Header;