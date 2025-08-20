import React from "react";
import "./PatientEducation.css";
import educationImage from "../assets/images/patient_education.png"; 

const PatientEducation = () => {
  return (
    <div className="patient-education-card">
      <div className="patient-education-title">Patient Education</div>
      <div className="patient-education-divider"></div>
      <div className="patient-education-subtitle">Coming soon</div>
      <div className="patient-education-image">
        <img src={educationImage} alt="Patient Education Path" />
      </div>
    </div>
  );
};

export default PatientEducation;
