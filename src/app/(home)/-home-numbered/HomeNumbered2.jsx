"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import "./home-numbered2.css";

export default function HomeNumbered2({ className }) {
  const containerRef = useRef(null);

  // Track scroll relative to this timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // maps section start->end to 0→1
  });

 
  const y = useTransform(scrollYProgress, [0, 1], [0, 970]);

  return (
    <div ref={containerRef} className={`timeline ${className}`}>
      {/* Moving ball */}
    <motion.div
  className="timeline-progress-circle absolute left-[20px] md:left-1/2"
  style={{ y, x: "-50%" }}
/>

      {/* Items */}
      <div className="mt-10 ps-8 pb-10 md:hidden">
        <h1 className="heading-main app-color--dark">Opportunities</h1>
        <h2 className="h4-semi-bold mt-[10px]">
          Explore Our Volunteer Options
        </h2>
      </div>
      <div className="timeline-item">
        <div className="timeline-blue-circle">1</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Engage with Our Community</h2>
          <p>
            Connect with like-minded individuals, share ideas, and collaborate
            on projects at our meetups.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            Visit Meetup
          </Link>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-blue-circle">2</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Drive Innovation with Projects</h2>
          <p>
            Contribute your skills to projects that address real challenges and
            enhance our city.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            See Our Project
          </Link>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-blue-circle">3</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Pitch Your Vision</h2>
          <p>
            Pitch your project idea to benefit the community and join forces
            with innovators.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            Pitch a Project
          </Link>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-blue-circle">4</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">
            Explore On-Site Opportunities with Root Access
          </h2>
          <p>
            Discover Root Access in the Tower District with 3D printers, laser
            cutting, workshops, and more.
          </p>
          <div className="mt-2 space-x-5">
            <Link className="btn btn--grow" href="">
              Check it Out
            </Link>
            <Link className="btn btn--grow" href="">
              Explore Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
