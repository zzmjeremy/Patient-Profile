import React from "react";
import "./PatientBillingSection.css";

const PatientBillingSection = () => {
  return (
    <div className="patient-billing-section">
      <div className="stats-card">
        <div className="stats-left">
          <div className="stats-header">
            <div className="stats-title">Stats</div>
            <div className="stats-subtitle">for Period 3</div>
          </div>
          <div className="stats-streaks">
            <span className="streaks-label">Streaks</span>
            <span className="streaks-value">1 🔥</span>
          </div>
          <div className="stats-weekdays">
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span className="checked">Sat</span>
            <span>Sun</span>
            <span>Mon</span>
            <span>Today</span>
          </div>
          <div className="stats-bottom">
            <div className="weeks-enrolled">
              <div className="label">Weeks Enrolled</div>
              <div className="value">9</div>
            </div>
            <div className="compliance">
              <div className="label">Compliance</div>
              <div className="value">16/30</div>
            </div>
          </div>
        </div>

        <div className="stats-right">
          View Stats
        </div>
      </div>
    </div>
  );
};

export default PatientBillingSection;
