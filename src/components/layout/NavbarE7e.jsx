"use client";

import BasePathImage from "../../integrations/gh-pages/BasePathImage";
import { NavToggle } from "../ui/button/Button";
import NavbarMenuE87 from "./NavbarMenuE87";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogoTextBlack } from "@/components/ui/icon/logo-text-black";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

/**
 * The default navigation bar for the application.
 * - Includes an extended menu that expands to show more text underneath the navbar.
 * - Desktop links have a sliding underline animation using CSS Anchor Positioning.
 * - Fade on-scroll effect uses CSS scroll-driven animations (Chrome 115+).
 * @param {boolean} fade - Whether to enable fade effect on scroll
 * @returns {JSX.Element}
 */
export default function NavbarE7e({ fade = false }) {
  const [extendedMenuVisible, showExtendedMenu] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef(null);

  useEffect(() => {
    showExtendedMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!extendedMenuVisible) return;

    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        showExtendedMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [extendedMenuVisible]);

  // Check if a nav link is active
  const isActive = (href) => pathname === href;
  const hasActiveLink = NAV_LINKS.some((link) => isActive(link.href));

  return (
    <nav
      ref={navbarRef}
      className={`navbar-container ${
        fade && !extendedMenuVisible ? "navbar-container--fading" : ""
      }`}
      aria-label="Main navigation"
    >
      <div className="navbar-main-content nav-regular">
        <Link className="p-4" href="/" aria-label="Open Fresno home">
          <LogoTextBlack height={40} width={100} />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="navbar-middle-section" role="menubar">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="navbar-link-item"
              data-active={isActive(link.href)}
              role="none"
            >
              <Link
                className={`navbar-link ${isActive(link.href) ? "nav-semi-bold" : ""}`}
                href={link.href}
                role="menuitem"
                aria-current={isActive(link.href) ? "page" : undefined}
                data-text={link.label}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Sliding underline - positioned via CSS Anchor Positioning */}
          {hasActiveLink && (
            <hr className="navbar-underline" aria-hidden="true" />
          )}
        </ul>

        {/* Menu Toggles */}
        <NavToggle
          extendedMenuVisible={extendedMenuVisible}
          showExtendedMenu={showExtendedMenu}
          mobile={true}
        />
        <NavToggle
          extendedMenuVisible={extendedMenuVisible}
          showExtendedMenu={showExtendedMenu}
          mobile={false}
        />
      </div>

      {/* Extended Menu */}
      {extendedMenuVisible && <NavbarMenuE87 />}
    </nav>
  );
}
