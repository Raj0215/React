import React from 'react';
import './Dashboard.css';
const Dashboard = ({ formData }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Personal Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <h2>Education Details</h2>
      <p>Degree: {formData.degree}</p>
      <p>Institution: {formData.institution}</p>
      <h2>Certification</h2>
      <p>Certification Name: {formData.certificationName}</p>
      <p>Organization: {formData.organization}</p>
      <h2>Address</h2>
      <p>Street: {formData.street}</p>
      <p>City: {formData.city}</p>
      <p>State: {formData.state}</p>
      <p>ZIP Code: {formData.zip}</p>
    </div>
  );
};

export default Dashboard;
