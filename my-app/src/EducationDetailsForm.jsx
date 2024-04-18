// EducationDetailsForm.js
import React, { useState } from 'react';
import './EducationDetailsForm.css';

const EducationDetailsForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="form-container">
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Institution:</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default EducationDetailsForm;
