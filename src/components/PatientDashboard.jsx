import React from 'react';
import './PatientDashboard.css';
import PatientProgressSection from './PatientProgressSection';

function PatientDashboard() {
  return (
    <div className="patient-dashboard">
      <PatientProgressSection />
      {/* 右边的 Stats / Billing Section 以后放这里 */}
    </div>
  );
}

export default PatientDashboard;
