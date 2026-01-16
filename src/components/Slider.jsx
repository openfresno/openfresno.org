"use client";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

// import from 'keen-slider/react.es' for to get an ES module

/**
 * Component for displaying a slider with multiple slides.
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
  loadedState,
  setCurrentSlide: providedSetCurrentSlide,
  setUpdateSlider = (updateFunctionGenerator) => {},
}) {
  const [defaultLoaded, setDefaultLoaded] = useState(false);
  const [defaultCurrentSlide, setDefaultCurrentSlide] = useState(startingSlide);
  const [slideCount, setSlideCount] = useState(0);

  const [loaded, setLoaded] = loadedState || [defaultLoaded, setDefaultLoaded];
  const setCurrentSlide = providedSetCurrentSlide || setDefaultCurrentSlide;
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: startingSlide,
    slideChanged(slider) {
      setDefaultCurrentSlide(slider.track.details.rel);
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
      setSlideCount(slider.track.details.slides.length);
      //This has to be done because the default behavior for lambdas is to
      //execute it to get the new state while providing the previous state.
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
      {loaded && slideCount > 0 && (
        <div className="dots mx-auto flex flex-row justify-center gap-4 p-4">
          {[...Array(slideCount).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`h-4 w-4 cursor-pointer rounded-4xl ${defaultCurrentSlide === idx ? "bg-(--primary-400)" : "bg-(--primary-600)"}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
