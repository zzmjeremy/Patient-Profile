import React from 'react';
import './PatientProfile.css';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import PatientDashboard from '../components/PatientDashboard';

function PatientProfile() {
  return (
    <div className="patient-profile">
      <NavBar />
      <MainContent />
      <PatientDashboard />
    </div>
  );
}

export default PatientProfile;
