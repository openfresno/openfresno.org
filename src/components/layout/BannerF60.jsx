"use client";

import { useEffect, useState } from "react";
import useBanner from "../../utility/hooks/useBanner";

/**
 * A banner at the top of the page
 *
 * @example
 * ```
 const { dismissBanner } = useBanner({
 id: 'community-support-statement-2025-banner',
 })

 <Banner id="community-support-statement-2025-banner">
 <span className="font-semibold mr-2">Announcement:</span>
 Read our new{' '}
 <Link
 href="/community-support-statement-2025"
 onClick={() => dismissBanner()}
 >
 Community Support Statement
 </Link>
 .
 </Banner>
 *  ```
 * @param {JSX.Element} children - The message to display in the banner
 * @returns {JSX.Element|null}
 */
export default function BannerF60({ children }) {
  const { visible: bannerVisible, dismissBanner } = useBanner({
    id: "community-support-statement-2025-banner"
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(bannerVisible);

  useEffect(() => {
    if (bannerVisible) {
      setShouldRender(true);
      // Small delay to ensure the DOM has updated before starting animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!bannerVisible && shouldRender) {
      setIsAnimating(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [bannerVisible, shouldRender]);

  const handleDismiss = () => {
    setIsAnimating(false);
    // Wait for animation to finish before actually dismissing
    setTimeout(() => {
      dismissBanner();
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div className={`banner ${isAnimating ? "animate-in" : "animate-out"}`}>
      <div className="banner-content container-xxl">
        <span>{children}</span>
        <button
          className="banner-dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss banner"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
