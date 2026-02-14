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
        />
      );

    case "radio":
      return field.options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={field.id}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ));

    case "checkbox_group":
      return field.options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name={field.id}
            value={option}
            checked={value?.includes(option)}
            onChange={onChange}
          />
          {option}
        </label>
      ));

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
