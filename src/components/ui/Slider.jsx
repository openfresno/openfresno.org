"use client";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "../../integrations/keen-slider/KeenSlider";

export default function Slider({ className, children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  return (
    <KeenSlider
      currentSlide={currentSlide}
      loaded={loaded}
      setCurrentSlide={setCurrentSlide}
      setLoaded={setLoaded}
      className={className}
    >
      {children}
    </KeenSlider>
  );
}
