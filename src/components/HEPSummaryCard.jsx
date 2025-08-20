import React, { useState } from 'react';
import './HEPSummaryCard.css';

function HEPSummaryCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState({
    sessions: '5',
    reps: '254'
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
<div className="hep-summary-card">
  <div className="hep-left">
    <div className="hep-header">
      <span className="hep-title">New HEP for Wimtach Client</span>
      <span className="hep-edited">Edited 16 hours ago</span>
    </div>
    <div className="hep-content">
      <div className="hep-stat">
        <span className="stat-label">Sessions per Day</span>
        {isEditing ? (
          <input
            type="text"
            name="sessions"
            value={fields.sessions}
            onChange={handleChange}
            className="stat-input"
          />
        ) : (
          <span className="stat-value">{fields.sessions}</span>
        )}
      </div>
      <div className="divider"></div>
      <div className="hep-stat">
        <span className="stat-label">Total Reps</span>
        {isEditing ? (
          <input
            type="text"
            name="reps"
            value={fields.reps}
            onChange={handleChange}
            className="stat-input"
          />
        ) : (
          <span className="stat-value">{fields.reps}</span>
        )}
      </div>
    </div>
  </div>

  <div className="hep-edit-btn" onClick={toggleEdit}>
    {isEditing ? 'Save' : 'Edit HEP'}
  </div>
</div>


  );
}

export default HEPSummaryCard;
