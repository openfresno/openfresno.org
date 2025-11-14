"use client";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react"; // import from 'keen-slider/react.es' for to get an ES module

/**
 * @component
 * @param {object} [props]
 * @param {string} [props.className]
 * @param {JSX.Element} [props.children]
 * @param {Dispatch<SetStateAction<number>>} [props.setCurrentSlide]
 * @param {[boolean,Dispatch<SetStateAction<boolean>>]} [props.loadedState]
 * @param {number} [props.startingSlide] Optionally set the starting slide; defaults to 0
 * @param {Dispatch<SetStateAction<(function():function(number))>>} [props.setUpdateSlider] Optionally exposes the function used to change the slider's index
 * @returns {JSX.Element}
 * @constructor
 */
export default function Slider({
                                 className,
                                 children,
                                 startingSlide = 0,
                                 loadedState = useState(false),
                                 setCurrentSlide = useState(startingSlide)[1],
                                 setUpdateSlider = (updateFunctionGenerator) => {
                                 }
                               }) {
  const [loaded, setLoaded] = loadedState;
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: startingSlide,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
      //This has to be done because the default behavior for lambdas is to
      //execute it to get the new state, while providing the previous state.
      //This is cursed on so many levels, but is the only way that I can think
      //of to expose the moveToIdx function
      setUpdateSlider(() => (index) => {
        slider.moveToIdx(index);
      });
    },
  });
  return (
    <div className={className}>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots p-4 flex flex-row gap-4 mx-auto justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`w-4 h-4 rounded-[2rem] cursor-pointer ${instanceRef.current?.track.details.rel === idx ? "bg-(--primary-400)" : "bg-(--primary-600)"}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
