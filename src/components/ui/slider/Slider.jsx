"use client";
import { useState } from "react";
import KeenSlider from "../../../integrations/keen-slider/KeenSlider";

/**
 * The slider for application features, like the projects slideshow.
 *
 * @param {string} className
 * @param {JSX.Element} children
 * @returns {JSX.Element|null}
 */
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
