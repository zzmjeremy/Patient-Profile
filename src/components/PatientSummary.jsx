import React from 'react';
import './PatientSummary.css';

function PatientSummary() {
  return (
    <div className="patient-summary">
      <div className="avatar">
        <span className="avatar-text">WI</span>
      </div>
      <div className="patient-info">
        <div className="patient-info-top">
          <div className="patient-name">Wimtach Client</div>
          <div className="patient-last-active">
            <span className="last-active-label">Last Active:</span>
            <span className="last-active-date">Mar 20, 2019 23:14</span>
        </div>
        </div>
        <button className="discharge-btn">Discharge Patient</button>
      </div>
    </div>
  );
}

export default PatientSummary;
