import React from 'react';
import './PatientDashboard.css';
import PatientProgressSection from './PatientProgressSection';
import PatientBillingSection from './PatientBillingSection';

function PatientDashboard() {
  return (
    <div className="patient-dashboard">
      <PatientProgressSection />
      <PatientBillingSection/>
    </div>
  );
}

export default PatientDashboard;
