// MultiStepForm.js
import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import EducationDetailsForm from './EducationDetailsForm';
import CertificationForm from './CertificationForm';
import AddressForm from './AddressForm';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
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
        return <AddressForm onSubmit={nextStep} />;
      default:
        return null;
    }
  };

  const calculateProgress = () => {
    return ((step - 1) / 4) * 100;
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      {renderFormStep()}
    </div>
  );
};

export default MultiStepForm;
