import React, { useState } from 'react';
import './ContactAndDiagnosis.css';
import EditIcon from '../assets/icons/edit.svg';
import EllipseIcon from '../assets/icons/ellipse.svg';

function ContactAndDiagnosis() {
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState({
    phone: '(555) 555-5555',
    email: 'wimtachclient@hotmail.com',
    injury: 'Right',
    diagnosis: 'Other specified malignant neoplasm of skin, unspecified - C4499'
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="contact-diagnosis">
      <div className="cd-info">
        <div className="cd-row">
          <div className="cd-col">
            <span className="cd-label">Phone:</span>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                className="cd-input"
              />
            ) : (
              <span className="cd-value">{fields.phone}</span>
            )}
          </div>
          <div className="cd-col">
            <span className="cd-label">Email:</span>
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={fields.email}
                onChange={handleChange}
                className="cd-input"
              />
            ) : (
              <span className="cd-value">{fields.email}</span>
            )}
          </div>
        </div>
        <div className="cd-row">
          <div className="cd-col">
            <span className="cd-label">Injury Location:</span>
            {isEditing ? (
              <input
                type="text"
                name="injury"
                value={fields.injury}
                onChange={handleChange}
                className="cd-input"
              />
            ) : (
              <span className="cd-value">{fields.injury}</span>
            )}
          </div>
          <div className="cd-col">
            <span className="cd-label">Diagnosis:</span>
            {isEditing ? (
              <input
                type="text"
                name="diagnosis"
                value={fields.diagnosis}
                onChange={handleChange}
                className="cd-input"
              />
            ) : (
              <span className="cd-value">{fields.diagnosis}</span>
            )}
          </div>
        </div>
      </div>
      <div className="cd-edit-btn" onClick={toggleEdit}>
  <img src={EllipseIcon} alt="Ellipse" className="ellipse-icon" />
  <img src={EditIcon} alt="Edit" className="edit-icon" />
</div>
    </div>
  );
}

export default ContactAndDiagnosis;
