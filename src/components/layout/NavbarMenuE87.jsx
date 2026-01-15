import Button, { NavExtendedToggle } from "../ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";

/**
 * Extend a navbar menu below the main application navbar.
 * - **Mobile view**: Toggles between two distinct navigation menus.
 * - **Desktop view**: Displays multiple sections with descriptive text and
 *   call-to-action links.
 * @param {string} className - Optional additional CSS class names
 *   applied to the root container for layout or styling overrides.
 * @returns {JSX.Element} A responsive extended navbar with mobile toggle menus
 *   and desktop sections containing navigation links and descriptions.
 */
export default function NavbarMenuE87({ className = "" }) {
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
          <Button href="/get-started" className="btn-small">
            Get Started
          </Button>
        </section>
        <section className="navbar-extended-desktop-section">
          <h4 className="navbar-extended-header h4-semi-bold">Projects</h4>
          <p className="grow-1">
            Explore our projects and discover how you can contribute your skills
            to drive innovation and create positive change.
          </p>
          <Button href="/projects" className="btn-small">
            See Projects
          </Button>
        </section>
        <section className="navbar-extended-desktop-section">
          <h4 className="navbar-extended-header h4-semi-bold">
            Pitch a Project
          </h4>
          <p className="grow-1">
            Get the latest information and guidance for anyone who wants to
            propose new projects or ideas to the Open Fresno community.
          </p>
          <Button href="/pitch" className="btn-small">
            Pitch a Project
          </Button>
        </section>
        <section className="p3-regular space-y-8 self-center">
          <p>
            Join us for our weekly meetings on{" "}
            <Link
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-link--underline"
            >
              meetup
            </Link>
            .
          </p>
          <p>
            For any questions, visit our{" "}
            <Link href="/faq" className="primary-link--underline">
              FAQs
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
