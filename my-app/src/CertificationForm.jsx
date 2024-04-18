import React, { useState } from 'react';
import './CertificationForm.css';

const CertificationForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    certificationName: '',
    organization: '',
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
      <h2>Certification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Certification Name:</label>
          <input
            type="text"
            name="certificationName"
            value={formData.certificationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Organization:</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CertificationForm;
