import React, { useState } from "react";
import "./PatientBillingSection.css";
import fireIcon from "../assets/icons/fire.svg";
import circleIcon from "../assets/icons/circle.svg";
import selectIcon from "../assets/icons/select.svg";
import dollarIcon from "../assets/icons/dollar.svg";
import padIcon from "../assets/icons/pad.svg";

const days = ["Wed", "Thru", "Fri", "Sat", "Sun", "Mon", "Today"];

const PatientBillingSection = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="patient-billing-section">
      <div className="stats-box">
        <div className="stats-left">
          <div className="stats-header">
            <div className="stats-title">
              <div className="stats-main">Stats</div>
              <div className="stats-sub">for Period 3</div>
            </div>
            <div className="stats-streak">
              <div className="streaks-label">Streaks</div>
              <div className="streaks-count">
                <span>1</span>
                <img src={fireIcon} alt="fire" className="fire-icon" />
              </div>
            </div>
          </div>

          <div className="stats-weekdays">
            {days.map((day) => (
              <div key={day} className="day" onClick={() => toggleDay(day)}>
                <div className="day-circle">
                  <img src={circleIcon} alt="circle" className="circle-icon" />
                  {selectedDays.includes(day) && (
                    <img
                      src={selectIcon}
                      alt="selected"
                      className="select-icon"
                    />
                  )}
                </div>
                <div className="day-label">{day}</div>
              </div>
            ))}
          </div>

          <div className="stats-footer">
            <div className="stat-item">
              <div className="label">Weeks Enrolled</div>
              <div className="value">9</div>
            </div>
            <div className="stat-item">
              <div className="label">Compliance</div>
              <div className="value">16/30</div>
            </div>
          </div>
        </div>

        <button className="stats-right">View Stats</button>
      </div>

      <button className="billing-button">
        <img src={dollarIcon} alt="Dollar Icon" className="billing-icon" />
        <span className="billing-text">View Billing Details</span>
      </button>

      <div className="floating-box">
        <img src={padIcon} alt="Pad Icon" className="floating-icon" />
      </div>
    </div>
  );
};

export default PatientBillingSection;
