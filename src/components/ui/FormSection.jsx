"use client";
import React from "react";
import PageContainer from "./PageContainer";
import BaseButton from "./button/Button";
import Form from "./form/Form";

const FormSection = ({ volunteer, formData, setFormData }) => {
  const [currentSection, setCurrentSection] = React.useState(0);
  
  const handleNext = () => {
    if (currentSection >= volunteer.length - 1) {
      return;
    }

    setCurrentSection((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentSection <= 0) {
      return;
    }
    setCurrentSection((prev) => prev - 1);
  };
  return (
    <PageContainer>
      <Form
        setFormData={setFormData}
        formData={formData}
        formSection={volunteer[currentSection]}
        sectionIndex={currentSection}
      />
      <div className="form-footer flex justify-end gap-4 mt-6">
        {currentSection > 0 && (
        <BaseButton className="form-action-btn btn btn-alt" onClick={handleBack}>
          Back
        </BaseButton>
      )}
      {currentSection < volunteer.length - 1 && (
        <BaseButton className="form-action-btn btn btn-grow" onClick={handleNext}>
          Next
        </BaseButton>
      )}
      </div>
    </PageContainer>
  );
};

export default FormSection;
