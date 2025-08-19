import React from 'react';
import './PatientProfile.css';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';

function PatientProfile() {
  return (
    <div className="patient-profile">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default PatientProfile;