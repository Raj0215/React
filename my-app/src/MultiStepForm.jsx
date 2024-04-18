import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import EducationDetailsForm from './EducationDetailsForm';
import CertificationForm from './CertificationForm';
import AddressForm from './AddressForm';
import Dashboard from './Dashboard';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || {});

  const nextStep = (data) => {
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setStep(step + 1);
  };

  const updateFormData = (data) => {
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const deleteFormData = () => {
    setFormData({});
    localStorage.removeItem('formData');
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetailsForm onNext={nextStep} />;
      case 2:
        return <EducationDetailsForm onNext={nextStep} />;
      case 3:
        return <CertificationForm onNext={nextStep} />;
      case 4:
        return <AddressForm onSubmit={submitForm} />;
      default:
        return null;
    }
  };

  const submitForm = (data) => {
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setStep(5);
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${((step - 1) / 4) * 100}%` }}></div>
      </div>
      {step === 5 ? (
        <Dashboard
          formData={formData}
          onUpdate={() => updateFormData({})}
          onDelete={deleteFormData}
        />
      ) : (
        renderFormStep()
      )}
    </div>
  );
};

export default MultiStepForm;
