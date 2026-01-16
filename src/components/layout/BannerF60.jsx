"use client";

import useBanner from "../../utility/hooks/useBanner";
import { useEffect, useReducer } from "react";

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
 * @returns {JSX.Element|null}
 * @param state
 * @param action
 */

const bannerReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { shouldRender: true, isAnimating: false };
    case "ANIMATE_IN":
      return { ...state, isAnimating: true };
    case "ANIMATE_OUT":
      return { ...state, isAnimating: false };
    case "HIDE":
      return { shouldRender: false, isAnimating: false };
    default:
      return state;
  }
};

export default function BannerF60({ children }) {
  const { visible: bannerVisible, dismissBanner } = useBanner({
    id: "community-support-statement-2025-banner",
  });
  const [state, dispatch] = useReducer(bannerReducer, {
    shouldRender: bannerVisible,
    isAnimating: false,
  });

  useEffect(() => {
    if (bannerVisible) {
      dispatch({ type: "SHOW" });
      const animateTimer = setTimeout(() => {
        dispatch({ type: "ANIMATE_IN" });
      }, 1000);
      return () => clearTimeout(animateTimer);
    } else if (state.shouldRender) {
      dispatch({ type: "ANIMATE_OUT" });
      const hideTimer = setTimeout(() => {
        dispatch({ type: "HIDE" });
      }, 500); // Match transition duration
      return () => clearTimeout(hideTimer);
    }
  }, [bannerVisible, state.shouldRender]);

  const handleDismiss = () => {
    dispatch({ type: "ANIMATE_OUT" });
    // Wait for animation to finish before actually dismissing
    setTimeout(() => {
      dismissBanner();
    }, 300);
  };

  if (!state.shouldRender) return null;

  return (
    <div
      className={`banner ${state.isAnimating ? "animate-in" : "animate-out"}`}
    >
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
