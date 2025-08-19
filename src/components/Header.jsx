import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <span className="header-dashboard-text">Dashboard</span>
      <span className="header-separator-text"> / </span>
      <span className="header-client-text">Wimtach Client</span>
    </div>
  );
}

export default Header;
