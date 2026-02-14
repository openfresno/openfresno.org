"use client";
import React, { useEffect } from "react";

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
            <span className="checkbox-box-label">{field.label}</span>
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
                  checked={value?.includes(val)}
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

const Form = ({ formSection, sectionIndex, formData, setFormData }) => {
  const { section, fields } = formSection;
  useEffect(() => {
    console.log(section, fields);
  }, []);

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

  let inputTags = {
    text: (
      <input
        value={formData.text || ""}
        type="text"
        onChange={handleChange}
        name="text"
      />
    ),
    email: (
      <input
        value={formData.email || ""}
        type="email"
        onChange={handleChange}
        name="email"
      />
    ),
    radio: (
      <input
        value={formData.radio || ""}
        type="radio"
        onChange={handleChange}
        name="radio"
      />
    ),
    checkbox_group: (
      <input
        value={formData.checkbox_group || ""}
        type="checkbox"
        onChange={handleChange}
        name="checkbox_group"
      />
    ),
  };

  return (
    <div className="form-section">
      <h2 className="heading-secondary">{section}</h2>

      <div className="input-section">
        {fields.map((field) => (
          <div className="input-group" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
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
