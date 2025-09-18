"use client";

import Link from "next/link";
import ExtendedNavbarMenu from "./ExtendedNavbarMenu";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BasePathImage from "../../../integrations/gh-pages/BasePathImage";
import { ChevronDown, ChevronUp } from "../../../integrations/tabler-icon";

import "./app-navbar.css";

/**
 * The default application navigation bar. It includes an extended menu that exapnds to shows more text underneath the navbar.
 * EXPERIMENTAL: The desktop links have a sliding underline animation when the page navigates.
 * EXPERIMENTAL: The fade on-scroll effect uses CSS scroll-driven animations. It is not supported by Chrome < 115, Firefox, Firefox for Android, Safari, Safari on iOS. On unsupprted platforms it functions the same as fade = false.
 * @param {boolean} fade - Whether to enable fade effect on scroll
 * @returns {JSX.Element}
 */
export default function AppNavbar({ fade = false }) {
  const [extendedMenuVisible, showExtendedMenu] = useState(false);
  const websiteURL = usePathname();
  const navbarRef = useRef(null);

  // Close the menu when the route changes.
  useEffect(() => {
    showExtendedMenu(false);
  }, [websiteURL]);

  // Close the menu when clicking outside the menu.
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target))
        showExtendedMenu(false);
    }
    if (extendedMenuVisible)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [extendedMenuVisible]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar-container ${
        fade && !extendedMenuVisible ? "navbar-container--fading" : ""
      }`}
    >
      <div className="navbar-main-content nav-regular">
        <Link className="p-4" href="/">
          <BasePathImage
            src="/assets/logo/logo-text-black.svg"
            alt="Open Fresno logo"
            height={45}
            width={110}
          />
        </Link>
        <ul className="navbar-middle-section">
          <li
            className={`${websiteURL === "/" && "nav-semi-bold navbar-link--selected__one"}`}
          >
            <Link className="navbar-link" href="/">
              Home
            </Link>
          </li>
          <li
            className={`${websiteURL === "/about" && "nav-semi-bold navbar-link--selected__two"}`}
          >
            <Link className="navbar-link" href="/about">
              About
            </Link>
          </li>
          <li
            className={`${websiteURL === "/contact" && "nav-semi-bold navbar-link--selected__three"}`}
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
          className="navbar-toggle-button nav-semi-bold ps-4 pe-[0.8rem]"
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
