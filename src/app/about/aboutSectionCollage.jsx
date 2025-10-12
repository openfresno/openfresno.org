"use client"
import { useEffect, useRef, useState } from "react";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

/**
 * About collage section.
 * @returns {JSX.Element}
 */
export default function AboutSectionCollage({ sectionType }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1280);
  useEffect(() => {
    let updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    }
    window.addEventListener("resize", updateContainerWidth);
    updateContainerWidth();
    return () => {
      window.addEventListener("resize", updateContainerWidth);
    }
  })
  return (
    <section className={`py-12 lg:py-24 `}>
      <div className={`page-container flex flex-col content-center`}>
        <div className={`w-full mb-[5%]`} ref={containerRef}>
          <BasePathImage
            src="/img/about/towerbridgeside.png"
            alt="Tower bridge"
            className={`full-width-item`}
            width={containerWidth}
            height={426}
          />
        </div>
        <div className={`w-full flex flex-row justify-between`}>
          <BasePathImage
            src="/img/about/tablet.png"
            alt="Tablet"
            className={`grid-item`}
            width={containerWidth*0.475}
            height={426}
          />
          <BasePathImage
            src="/img/about/meeting.png"
            alt="Meeting"
            className={`grid-item`}
            width={containerWidth*0.475}
            height={426}
          />
        </div>
      </div>
    </section>
  );
}
