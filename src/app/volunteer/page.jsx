"use client";
import FormSection from "@/components/ui/FormSection";
import React from "react";
import { volunteer } from "./volunteer";

const page = () => {
  const [formData, setFormData] = React.useState({});
  return <FormSection formData={formData} setFormData={setFormData} volunteer={volunteer} />;
};

export default page;
