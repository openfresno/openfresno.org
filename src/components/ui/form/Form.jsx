"use client";
import React, { useEffect } from "react";

/**
 * FormInput Component
 *
 * Renders a specific input field based on the provided configuration in the `field` prop.
 * Handles various input types including text, email, select, radio, and checkboxes.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.id - The unique identifier for the field.
 * @param {string} props.field.type - The type of input to render (text, email, select, radio, checkbox_group, checkbox_single).
 * @param {string} props.field.label - The label text for the field.
 * @param {string} [props.field.placeholder] - Optional placeholder text.
 * @param {Array<string|Object>} [props.field.options] - Options for select, radio, or checkbox_group inputs.
 * @param {any} props.value - The current value of the field from the form state.
 * @param {Function} props.onChange - Handler function to update the form state.
 * @returns {JSX.Element|null} The rendered input element or null if type is unrecognized.
 */
const FormInput = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <input
          type={field.type}
          name={field.id}
          value={value || ""}
          onChange={onChange}
          placeholder={field.placeholder || ""}
        />
      );

    case "select":
      return (
        <select name={field.id} value={value || ""} onChange={onChange}>
          <option value="">Select an option...</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "textarea":
      return (
        <textarea
          name={field.id}
          value={value || ""}
          onChange={onChange}
          placeholder={field.placeholder || ""}
          rows={4}
        />
      );

    case "radio":
      return (
        <div className="options-grid">
          {field.options.map((option) => {
            const Icon = option.icon;
            return (
              <label key={option.value} className="radio-box">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                />
                <span className="radio-box-content">
                  {Icon && <Icon className="w-6 h-6 text-neutral-400 mb-1" />}
                  {!Icon && <span className="radio-indicator"></span>}
                  <span className="radio-box-label">{option.label}</span>
                </span>
              </label>
            );
          })}
        </div>
      );

    case "checkbox_single":
      return (
        <label className="checkbox-single-box">
          <input
            type="checkbox"
            name={field.id}
            checked={value === true}
            onChange={(e) =>
              onChange({ target: { name: field.id, value: e.target.checked } })
            }
          />
          <span className="checkbox-single-box-content">
            <span className="checkbox-box-label">
              {field.label}
              {field.required && <span className="required-mark">*</span>}
            </span>
          </span>
        </label>
      );

    case "checkbox_group":
      return (
        <div className="options-grid">
          {field.options.map((option) => {
            const isString = typeof option === "string";
            const label = isString ? option : option.label;
            const val = isString ? option : option.value || option.label; // Fallback so value exists
            const Icon = !isString ? option.icon : null;

            return (
              <label key={val} className="checkbox-box">
                <input
                  type="checkbox"
                  name={field.id}
                  value={val}
                  checked={value?.includes(val) ?? false}
                  onChange={onChange}
                />
                <span className="checkbox-box-content">
                  {Icon && <Icon className="w-6 h-6 text-neutral-400 mb-1" />}
                  {!Icon && <span className="checkbox-indicator"></span>}
                  <span className="checkbox-box-label">{label}</span>
                </span>
              </label>
            );
          })}
        </div>
      );

    default:
      return null;
  }
};

/**
 * Form Component
 *
 * Renders a complete form section containing multiple inputs based on the configuration.
 * It manages the rendering of labels and delegates input rendering to `FormInput`.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.formSection - The configuration for the current form section.
 * @param {string} props.formSection.section - The title of the section.
 * @param {Array<Object>} props.formSection.fields - Array of field configuration objects.
 * @param {number} props.sectionIndex - The index of the current section in the wizard.
 * @param {Object} props.formData - The current state of the form data.
 * @param {Function} props.setFormData - State setter for form data.
 * @returns {JSX.Element} The rendered form section.
 */
const Form = ({ formSection, sectionIndex, formData, setFormData }) => {
  const { section, fields } = formSection;
  useEffect(() => {
    console.log(section, fields);
  }, []);

  /**
   * Handles input changes and updates the form data state.
   * Special logic handles `checkbox_group` arrays (adding/removing values)
   * vs standard value updates for other input types.
   *
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && !name.includes("single")) {
      // Handle checkbox groups
      setFormData((prev) => {
        const currentValues = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          return { ...prev, [name]: currentValues.filter((v) => v !== value) };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="form-section">
      <h2 className="heading-secondary">{section}</h2>

      <div className="input-section">
        {fields.map((field) => (
          <div className="input-group" key={field.id}>
            {field.type !== "checkbox_single" && (
              <label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="required-mark">*</span>}
              </label>
            )}
            <FormInput
              field={field}
              value={formData[field.id]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
