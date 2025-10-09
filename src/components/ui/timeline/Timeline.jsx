'use client';
import React, {useRef, useState, useEffect} from "react";
import { Button } from "../../ui";
import { SimpleButton, TimelineItem } from "./TimelineItem";

/**
 * a responsive, multi-step timeline component for displaying a list of opportunities.
 *
 * this component renders a vertical timeline that transitions from a single-column
 * layout on mobile to an alternating two-column layout on desktop. the styling
 * and layout logic are fully described in the associated css file's comments.
 *
 * @component
 * @param {object} props
 * @param {string} [props.classname] optional css classes to apply to the root div element.
 */

export default function Timeline({ className }) {
  const refContainer = useRef();
  const [timelineNumbers, setTimelineNumbers] = useState([]);
  const [clientRect, setClientRect] = useState();

  useEffect(() => {
    if (refContainer.current) {
      setClientRect(refContainer.current.getBoundingClientRect());
    }
  }, []);


  function updateTimelineNumbers(timelineNumber, bounds) {
    setTimelineNumbers((previousTimelineNumbers) => {
      if (timelineNumbers[timelineNumber]) {
        return previousTimelineNumbers.map((_, i) => {
          if (i == timelineNumber) return bounds;
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
          new SimpleButton(
          "Visit Meetup",
          "https://www.meetup.com/openfresno",
        )]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Connect with like-minded individuals, share ideas, and collaborate
        on projects at our meetups.
        <br />
        Join us to be a part of a vibrant community dedicated to positive
        change through technology.
      </TimelineItem>
      <TimelineItem
        number={2}
        heading="Drive Innovation with Projects"
        buttons={[
          new SimpleButton(
          "See Our Project"
        )]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Discover how you can contribute your skills to projects that address
        real challenges and enhance our city. Be part of a dynamic team
        working on solutions that make a difference.
      </TimelineItem>
      <TimelineItem
        number={3}
        heading="Pitch Your Vision"
        buttons={[
          new SimpleButton(
            "Pitch a Project"
        )]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Have a project idea that can benefit the community? Pitch it to us
        and join forces with our community of innovators to bring your
        vision to life, driving positive change in Central California.
      </TimelineItem>
      <TimelineItem
        number={4}
        heading="Explore On-Site Opportunities with Root Access"
        buttons={[
          new SimpleButton(
            "Check it Out"
          ),
          new SimpleButton(
            "Explore Calendar"
          ),
        ]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Have a project idea that can benefit the community? Pitch it to us
        and join forces with our community of innovators to bring your
        vision to life, driving positive change in Central California.
      </TimelineItem>
      <TimelineItem
        number={5}
        heading="Drive Innovation with Projects"
        buttons={[
          new SimpleButton(
          "See Our Project"
        )]}
        updateTimelineNumbers={updateTimelineNumbers}
      >
        Test text
      </TimelineItem>
      <style>
        {(()=>{
          //the array is 1 indexed;
          let itemCount = timelineNumbers.length;
          let stepSize = 100 / (itemCount - 1);
          let styleText = `@keyframes timeline-animation\{\n`
          timelineNumbers.forEach((bounds, i) => {
            if(bounds != null){
              // animates with the progress of viewing the timeline at equal intervals
              // i-1 is because the array is 1 indexed (timelineNumbers[0] === null)
              let percentageValue = Math.round((i-1) * stepSize);
              // as a pixel value
              let topValue = bounds.y - clientRect.y + (bounds.height/4);
              styleText+=`\t${percentageValue}% {\n
                          \t\ttop: ${topValue}px;\n
                          \t}\n`;
            }
          });
          // This is cursed, but animation styles have to be declared here
          // because will not work if it is loaded first in the stylesheet.
          let animationStyle = `}\n
            .timeline {\n
            \tview-timeline: --timelineAnimation block -20% 20%;\n
            \t&::after {\n
            \t\tanimation-timeline: --timelineAnimation;\n
            \t\tanimation-timing-function: ease-in-out;\n
            \t\tanimation-name: timeline-animation;\n
            \t\tanimation-fill-mode: both;\n
            \t}\n
            }
          `;
          return styleText+animationStyle;
        })()}
      </style>
      {/*

      <div className="timeline-item">
        <div className="timeline-number">1</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Engage with Our Community</h2>
          <p>
            Connect with like-minded individuals, share ideas, and collaborate
            on projects at our meetups.
            <br />
            Join us to be a part of a vibrant community dedicated to positive
            change through technology.
          </p>
          <Button
            className="btn btn--grow mx-auto mt-2 lg:mx-0"
            href="https://www.meetup.com/openfresno"
          >
            Visit Meetup
          </Button>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">2</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Drive Innovation with Projects</h2>
          <p>
            Discover how you can contribute your skills to projects that address
            real challenges and enhance our city. Be part of a dynamic team
            working on solutions that make a difference.
          </p>
          <Button className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            See Our Project
          </Button>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">3</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Pitch Your Vision</h2>
          <p>
            Have a project idea that can benefit the community? Pitch it to us
            and join forces with our community of innovators to bring your
            vision to life, driving positive change in Central California.
          </p>
          <Button className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            Pitch a Project
          </Button>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">4</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">
            Explore On-Site Opportunities with Root Access
          </h2>
          <p>
            Discover Root Access on Van Ness Ave in the Tower District, just a
            block south of Fresno City College. From advanced 3D printers and a
            cozy lounge to laser cutting, workshops, and an electronics haven,{" "}
            <b>explore what awaits you at our partner's space!</b>
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button className="btn btn--grow" href="">
              Check it Out
            </Button>
            <Button className="btn btn--grow" href="">
              Explore Calendar
            </Button>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
