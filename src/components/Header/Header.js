import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav_items">
          <div className="logo">
            <img className="brand__logo" src="/logo192.png" alt="" />
            <h2 className="logo__name">ReactJs</h2>
          </div>
          <div className="nav__list">
            <a href="#0">Home</a>
            <a href="#0">About</a>
            <a href="#0">Work</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
