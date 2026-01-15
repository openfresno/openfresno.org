"use client";
import { SimpleButton, TimelineItem } from "./TimelineItem";
import React, { useEffect, useRef, useState } from "react";

/**
 * a responsive, multi-step timeline component for displaying a list of opportunities.
 *
 * this component renders a vertical timeline that transitions from a single-column
 * layout on mobile to an alternating two-column layout on desktop. the styling
 * and layout logic are fully described in the associated css file's comments.
 *
 * @component
 * @param {object} props
 * @param {string} [props.className] optional css classes to apply to the root div element.
 */

export default function Timeline({ className }) {
  const refContainer = useRef();
  const [timelineNumbers, setTimelineNumbers] = useState([]);
  const [clientRect, setClientRect] = useState();

  useEffect(() => {
    let updateClientRect = () => {
      if (refContainer.current) {
        setClientRect(refContainer.current.getBoundingClientRect());
      }
    };
    updateClientRect();
    window.addEventListener("resize", updateClientRect);
    return () => {
      window.removeEventListener("resize", updateClientRect);
    };
  }, []);

  function updateTimelineNumbers(timelineNumber, bounds) {
    setTimelineNumbers((previousTimelineNumbers) => {
      if (timelineNumbers[timelineNumber]) {
        return previousTimelineNumbers.map((_, i) => {
          if (i === timelineNumber) return bounds;
        });
      } else {
        let copy = [...previousTimelineNumbers];
        copy[timelineNumber] = bounds;
        return copy;
      }
    });
  }

  return (
    <div className={`timeline ${className}`} ref={refContainer}>
      <div className="mt-10 ps-8 pb-10 md:hidden">
        <h1 className="heading-main app-color--dark">Opportunities</h1>
        <h2 className="h4-semi-bold mt-[10px]">
          Explore Our Volunteer Options
        </h2>
      </div>
      <TimelineItem
        number={1}
        heading="Engage with Our Community"
        buttons={[
          new SimpleButton("Visit Meetup", "https://www.meetup.com/openfresno"),
        ]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Connect with like-minded individuals, share ideas, and collaborate on
        projects at our meetups.
        <br />
        Join us to be a part of a vibrant community dedicated to positive change
        through technology.
      </TimelineItem>
      <TimelineItem
        number={2}
        heading="Drive Innovation with Projects"
        buttons={[new SimpleButton("See Our Projects", "/projects")]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Discover how you can contribute your skills to projects that address
        real challenges and enhance our city. Be part of a dynamic team working
        on solutions that make a difference.
      </TimelineItem>
      <TimelineItem
        number={3}
        heading="Pitch Your Vision"
        buttons={[new SimpleButton("Pitch a Project", "pitch")]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Have a project idea that can benefit the community? Pitch it to us and
        join forces with our community of innovators to bring your vision to
        life, driving positive change in Central California.
      </TimelineItem>
      <TimelineItem
        number={4}
        heading="Explore On-Site Opportunities with Root Access"
        buttons={[
          new SimpleButton("Check it Out"),
          new SimpleButton("Explore Calendar"),
        ]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Discover Root Access on Van Ness Ave in the Tower District, just a block
        south of Fresno City College. From advanced 3D printers and a cozy
        lounge to laser cutting, workshops, and an electronics haven,{" "}
        <b>explore what awaits you at our partner's space!</b>
      </TimelineItem>
      <style>
        {((_timelineNumbers, _clientRect) => {
          //the array is 1 indexed;
          let itemCount = _timelineNumbers.length;
          let stepSize = 100 / (itemCount - 1);
          let keyframeStyle = `@keyframes timeline-animation\{\n`;
          if (_timelineNumbers.length > 0) {
            _timelineNumbers.forEach((bounds, i) => {
              if (bounds != null) {
                // animates with the progress of viewing the timeline at equal intervals
                // i-1 is because the array is 1 indexed (_timelineNumbers[0] === null)
                let percentageValue = Math.round((i - 1) * stepSize);
                // as a pixel value
                let topValue = bounds.y - _clientRect.y + bounds.height / 4;
                keyframeStyle += `\t${percentageValue}% {\n
                          \t\ttop: ${topValue}px;\n
                          \t}\n`;
                if (i + 1 === _timelineNumbers.length) {
                  keyframeStyle += `\t100% {\n
                              \t\ttop: ${topValue}px;\n
                              \t}\n
                              }\n`;
                }
              }
            });
            // This is cursed, but animation styles have to be declared here
            // because will not work if it is loaded first in the stylesheet.
            let animationStyle = `
            .timeline {\n
            \tview-timeline: --timelineAnimation block -20% 40%;\n
            \t&::after {\n
            \t\tanimation-timeline: --timelineAnimation;\n
            \t\tanimation-timing-function: ease-in-out;\n
            \t\tanimation-name: timeline-animation;\n
            \t\tanimation-fill-mode: both;\n
            \t}\n
            }\n
          `;
            return keyframeStyle + animationStyle;
          }
        })(timelineNumbers, clientRect)}
      </style>
    </div>
  );
}
