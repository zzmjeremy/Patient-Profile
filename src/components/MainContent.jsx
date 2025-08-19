import React from 'react';
import './MainContent.css';
import Header from './Header';
import InfoCard from './InfoCard';

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <InfoCard />
    </div>
  );
}

export default MainContent;
