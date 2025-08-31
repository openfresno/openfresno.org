"use client";

import useBanner from "../../utils/hooks/useBanner";
import { useEffect, useState } from "react";

/**
 * Margin top component to offset content by the navbar height.
 * A transparent navbar lets the background content show through.
 * @returns {JSX.Element}
 * @constructor
 */
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
          ? "toolbar-after-content-with-banner"
          : "toolbar-after-content"
      }`}
    ></div>
  );
}
