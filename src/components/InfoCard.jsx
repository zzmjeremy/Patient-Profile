import React from 'react';
import './InfoCard.css';
import PatientSummary from './PatientSummary';
import ContactAndDiagnosis from './ContactAndDiagnosis';

function InfoCard() {
  return (
    <div className="info-card">
      <PatientSummary />
      <ContactAndDiagnosis />
    </div>
  );
}

export default InfoCard;
