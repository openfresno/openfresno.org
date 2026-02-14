"use client";
import React from "react";
import PageContainer from "./PageContainer";
import BaseButton from "./button/Button";
import Form from "./form/Form";

/**
 * FormSection Component
 *
 * Manages the multi-step wizard logic for the volunteer application form.
 * It handles state validation, navigation between sections, and final submission.
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.volunteer - The array of form section definitions (data).
 * @param {Object} props.formData - The current state of the form data accumulating across steps.
 * @param {Function} props.setFormData - State setter for form data.
 * @returns {JSX.Element} The rendered form wizard page.
 */
const FormSection = ({ volunteer, formData, setFormData }) => {
  const [currentSection, setCurrentSection] = React.useState(0);

  /**
   * Validates all required fields in the current section.
   * Prevents navigation if any required field is empty or invalid.
   *
   * Validation Rules:
   * - Checkbox Group: Must have at least one valid selection.
   * - Checkbox Single: Must be checked (true).
   * - Text/Email/Other: Must be a non-empty string.
   *
   * @returns {boolean} True if the section is valid, false otherwise.
   */
  const validateCurrentSection = () => {
    const currentFields = volunteer[currentSection].fields;
    for (const field of currentFields) {
      if (field.required) {
        const value = formData[field.id];
        let isValid = false;

        if (field.type === "checkbox_group") {
          isValid = Array.isArray(value) && value.length > 0;
        } else if (field.type === "checkbox_single") {
          isValid = value === true;
        } else {
          // Determine if it's a string or other type that needs checking
          isValid =
            value !== undefined &&
            value !== null &&
            String(value).trim() !== "";
        }

        if (!isValid) {
          // Use a more user-friendly message, potentially stripping the * if present or just generic
          // Since labels might be long (like agreements), maybe just say "Please fill all required fields."
          // But specific is better. The label in volunteer.jsx doesn't have *.
          alert(`Please complete the required field: "${field.label}"`);
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Advances to the next section if validation passes.
   */
  const handleNext = () => {
    if (currentSection >= volunteer.length - 1) {
      return;
    }
    if (validateCurrentSection()) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  /**
   * Navigates to the previous section.
   * Does not require validation of the current section.
   */
  const handleBack = () => {
    if (currentSection <= 0) {
      return;
    }
    setCurrentSection((prev) => prev - 1);
  };

  /**
   * Handles the final form submission.
   * Validates the final section before logging data.
   * @param {Event} e - The click event.
   */
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateCurrentSection()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted! Check console for data.");
    }
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
          <BaseButton
            className="form-action-btn btn btn-alt"
            onClick={handleBack}
          >
            Back
          </BaseButton>
        )}
        {currentSection < volunteer.length - 1 ? (
          <BaseButton
            className="form-action-btn btn btn-grow"
            onClick={handleNext}
          >
            Next
          </BaseButton>
        ) : (
          <BaseButton
            className="form-action-btn btn btn-grow"
            onClick={handleSubmit}
          >
            Submit
          </BaseButton>
        )}
      </div>
    </PageContainer>
  );
};

export default FormSection;
