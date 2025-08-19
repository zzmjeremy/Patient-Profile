import React from 'react';
import './NavBar.css';
import LogoIcon from '../assets/icons/logo.svg';
import HomeIcon from '../assets/icons/home.svg';
import BackArrowIcon from '../assets/icons/back_arrow.svg';
import DocumentIcon from '../assets/icons/document_icon.svg';
import BarIcon from '../assets/icons/bar.svg';
import ExitIcon from '../assets/icons/exit.svg';

function NavBar() {
  return (
    <div className="nav-bar">
      <img src={LogoIcon} alt="Logo" className="nav-bar-logo" />
      <button className="nav-bar-home-button">
          <img src={HomeIcon} alt="Home" className="nav-bar-home-icon" />
      </button>
      <button className="nav-bar-back-button">
        <img src={BackArrowIcon} alt="Back Arrow" className="nav-bar-back-arrow-icon" />
      </button>
      <img src={DocumentIcon} alt="Document" className="nav-bar-document-icon" />
      <img src={BarIcon} alt="Bar" className="nav-bar-bar-icon" />
      <button className="nav-bar-exit-button">
        <img src={ExitIcon} alt="Exit" className="nav-bar-exit-icon" />
      </button>
    </div>
  );
}

export default NavBar;
