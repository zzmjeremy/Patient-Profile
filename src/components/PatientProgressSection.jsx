import React from 'react';
import './PatientProgressSection.css';
import HEPSummaryCard from './HEPSummaryCard';
// import PatientEducation from './PatientEducation';

function PatientProgressSection() {
  return (
    <div className="patient-progress-section">
      <HEPSummaryCard />
      {/* <PatientEducation /> */}
    </div>
  );
}

export default PatientProgressSection;
