"use client";
import { useState } from "react";
import KeenSlider from "../../../integrations/keen-slider/KeenSlider";

/**
 * The slider for application features, like the projects slideshow.
 * @component
 * @param {object} [props]
 * @param {string} [props.className]
 * @param {JSX.Element} [props.children]
 * @param {[number, Dispatch<SetStateAction<number>>]} [props.sliderState] Optionally manage the state from outside the component
 * @returns {JSX.Element}
 */
export default function Slider({
                                 className = "",
                                 children = (<></>),
                                 sliderState = useState(0)
                               }) {
  const [currentSlide, setCurrentSlide] = sliderState;
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
