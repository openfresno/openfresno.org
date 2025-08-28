"use client";

import useBanner from "@/hooks/useBanner";
import { useEffect, useState } from "react";

export default function MarginTop() {
  const { visible: bannerVisible } = useBanner({
    id: "community-support-statement-2025-banner",
  });

  const [delayedBannerVisible, setDelayedBannerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedBannerVisible(bannerVisible);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount or re-run
  }, [bannerVisible]); // Re-run effect if bannerVisible changes

  return (
    <div
      className={`${
        delayedBannerVisible
          ? "content-offset-by-toolbar-with-banner"
          : "content-offset-by-toolbar"
      }`}
    ></div>
  );
}
