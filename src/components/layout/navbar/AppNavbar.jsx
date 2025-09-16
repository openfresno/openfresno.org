"use client";

import Link from "next/link";
import ExtendedNavbarMenu from "./ExtendedNavbarMenu";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import useBanner from "../../../utils/hooks/useBanner";
import Image from "next/image";

import "./app-navbar.css";
import { ChevronDown } from "@/integrations/tabler-icon";
import { ChevronUp } from "@/integrations/tabler-icon/ChevronUp";

/**
 * Set toolbar opacity. Based on the scroll y-axis.
 * @param {number} currentScrollHeight
 * @returns {number} opacity Ranges from 0 to 1.
 */
function setOpacity(currentScrollHeight) {
  // Start transparent and reach full opacity by the number in pixels.
  return Math.min(currentScrollHeight / 520, 1);
}

/**
 * Fade the navbar when scrolling.
 * @param setFadeLayout
 * @param setCurrentScrollHeight
 * @returns {function(): void} Cleanup function to remove event listener
 */
function registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight) {
  setFadeLayout(true);
  const onScroll = () => {
    setCurrentScrollHeight(window.scrollY);
  };
  window.removeEventListener("scroll", onScroll);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

/**
 * The default application navigation bar. The links animate when the page navigates. Extended menu that shows more text underneath the navbar.
 * - Desktop: Multiple navigation links in the center. Link on the right side to show an extended menu.
 * - Mobile: All menu items are in the collapsable menu.
 * @param {boolean} fade - Whether to enable fade effect on scroll
 * @returns {JSX.Element}
 */
export default function AppNavbar({ fade = false }) {
  const [extendedMenuVisible, showExtendedMenu] = useState(false);
  const [fadeLayout, setFadeLayout] = useState(fade);
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
  const backgroundOpacity = setOpacity(currentScrollHeight);
  const websiteURL = usePathname();
  const { dismissBanner } = useBanner({
    id: "community-support-statement-2025-banner",
  });
  // Create a ref for the navbar container
  const navbarRef = useRef(null);

  useEffect(() => {
    showExtendedMenu(false);
    if (currentScrollHeight === 0) setCurrentScrollHeight(window.scrollY);
    if (fade) {
      return registerNavbarFadeLayout(setFadeLayout, setCurrentScrollHeight);
    }
    return () => {};
  }, [websiteURL, fade]);

  useEffect(() => {
    /**
     * If the user clicks outside of the navbar, hide the extended menu.
     */
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        showExtendedMenu(false);
      }
    }

    // Add the event listener to the document only when the extended menu is visible
    if (extendedMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts or the state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [extendedMenuVisible]); // Re-run effect when menu visibility changes

  return (
    <nav
      ref={navbarRef} // Attach the ref here
      className="navbar-container"
      style={
        fadeLayout && !extendedMenuVisible
          ? {
              backgroundColor: `rgba(255, 252, 245, ${backgroundOpacity})`,
              boxShadow:
                backgroundOpacity > 0.2
                  ? `0 2px 4px rgba(0, 0, 0, ${backgroundOpacity * 0.1})`
                  : "none",
            }
          : { backgroundColor: "rgba(255, 252, 245, 1)" }
      }
    >
      <div className="navbar-toolbar-content nav-regular">
        <Link className="p-4" href="/">
          <Image
            src="/assets/logo/logo-text-black.svg"
            alt="Open Fresno logo"
            height={45}
            width={110}
          />
        </Link>
        <ul className="navbar-middle-section">
          <li
            className={`${websiteURL === "/" ? "nav-semi-bold navbar-link--selected__one" : ""}`}
          >
            <Link className="navbar-link" href="/">
              Home
            </Link>
          </li>
          <li
            className={`${websiteURL === "/about" ? "nav-semi-bold navbar-link--selected__two" : ""}`}
          >
            <Link className="navbar-link" href="/about">
              About
            </Link>
          </li>
          <li
            className={`${
              websiteURL === "/contact"
                ? "nav-semi-bold navbar-link--selected__three"
                : ""
            }`}
          >
            <Link className="navbar-link" href="/contact">
              Contact
            </Link>
          </li>
          <li className={`navbar-link-list-item`}>
            <Link className="navbar-link" href="/donate">
              Donate
            </Link>
          </li>
          <hr className="navbar-underline" />
        </ul>
        <button
          className="navbar-toggle-button nav-semi-bold"
          onClick={() => showExtendedMenu(!extendedMenuVisible)}
        >
          Get Involved
          {extendedMenuVisible ? (
            <ChevronUp className="ms-2" />
          ) : (
            <ChevronDown className="ms-2" />
          )}
        </button>
      </div>
      {extendedMenuVisible && (
        <ExtendedNavbarMenu visible={extendedMenuVisible} />
      )}
    </nav>
  );
}
