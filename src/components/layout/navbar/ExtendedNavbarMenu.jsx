import React, { useState } from "react";
import Link from "next/link";
import { NavExtendedToggle } from "../../../components/ui";
import "./extended-menu.css";

/**
 * `ExtendedNavbarMenu` is a responsive navigation component that provides
 * both mobile and desktop menu layouts for the main application navbar.
 *
 * ### Features
 * - **Mobile view**: Toggles between two distinct navigation menus:
 *   - Primary menu: Home, About, Contact, Donate, and a "Get Involved" toggle.
 *   - Secondary menu: Get Started, Projects, Pitch a Project, Meetup, FAQs, and a "Back" toggle.
 * - **Desktop view**: Displays multiple sections with descriptive text and
 *   call-to-action links (e.g., Get Started, Projects, Pitch a Project).
 * - Uses icons (`ChevronLeft`, `ChevronRight`) to indicate navigation transitions.
 * - Accepts an optional `className` for custom styling.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className=""] - Optional additional CSS class names
 *   applied to the root container for layout or styling overrides.
 *
 * @returns {JSX.Element} A responsive extended navbar with mobile toggle menus
 *   and desktop sections containing navigation links and descriptions.
 *
 * @example
 * ```tsx
<ExtendedNavbarMenu className="custom-navbar" />
 * ```
 */
export default function ExtendedNavbarMenu({ className = "" }) {
  const [mobileNavPosition, toggleMobileNavPosition] = useState(false);

  return (
    <div className={`navbar-extended-container p2-regular ${className}`}>
      <ul
        className={`${mobileNavPosition ? "hidden" : "grid"} navbar-extended-mobile-container nav-semi-bold`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/donate">Donate</Link>
        </li>
        <NavExtendedToggle
          mobileNavPosition={mobileNavPosition}
          toggleMobileNavPosition={toggleMobileNavPosition}
        />
      </ul>
      <ul
        className={`${mobileNavPosition ? "grid" : "hidden"} navbar-extended-mobile-container nav-semi-bold`}
      >
        <li>
          <Link href="/get-started">Get Started</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/pitch">Pitch a Project</Link>
        </li>
        <li>
          <Link href="https://www.meetup.com/openfresno">Meetup</Link>
        </li>
        <li>
          <Link href="/faq">FAQs</Link>
        </li>
        <NavExtendedToggle
          mobileNavPosition={mobileNavPosition}
          toggleMobileNavPosition={toggleMobileNavPosition}
        />
      </ul>
      <div className="navbar-extended-desktop-container page-container">
        <section className="navbar-extended-desktop-section">
          <h4 className="navbar-extended-header h4-semi-bold">Get Started</h4>
          <p className="grow-1">
            Get started today and volunteer with us to drive positive change
            through technology, making a meaningful impact in your community!
          </p>
          <Link href="/get-started" className="btn-small">
            Get Started
          </Link>
        </section>
        <section className="navbar-extended-desktop-section">
          <h4 className="navbar-extended-header h4-semi-bold">Projects</h4>
          <p className="grow-1">
            Explore our projects and discover how you can contribute your skills
            to drive innovation and create positive change.
          </p>
          <Link href="/projects" className="btn-small">
            See Projects
          </Link>
        </section>
        <section className="navbar-extended-desktop-section">
          <h4 className="navbar-extended-header h4-semi-bold">
            Pitch a Project
          </h4>
          <p className="grow-1">
            Get the latest information and guidance for anyone who wants to
            propose new projects or ideas to the Open Fresno community.
          </p>
          <Link href="/pitch" className="btn-small">
            Pitch a Project
          </Link>
        </section>
        <section className="p3-regular space-y-8 self-center">
          <p>
            Join us for our weekly meetings on{" "}
            <Link
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-extended-link"
            >
              meetup
            </Link>
            .
          </p>
          <p>
            For any questions, visit our{" "}
            <Link href="/faq" className="navbar-extended-link">
              FAQs
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
