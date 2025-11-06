"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default function KeenSlider({
  className,
  children,
  currentSlide,
  setCurrentSlide,
  setLoaded,
  loaded,
}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
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
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`w-4 h-4 rounded-[2rem] cursor-pointer ${currentSlide === idx ? "bg-(--primary-400)" : "bg-(--primary-600)"}`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
