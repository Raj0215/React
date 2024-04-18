import React, { useState } from 'react';
import './PersonalDetailsForm.css';

const PersonalDetailsForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    image: null, 
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
