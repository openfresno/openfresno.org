import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "../../../integrations/tabler-icon";

import "./extended-menu.css";

/**
 * An extended dropdown menu for the main application navbar.
 *
 * - Mobile menu switches between two distint nav menus.
 * @returns {JSX.Element}
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
        <button
          className="navbar-extended-toggle-button"
          onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
        >
          Get Involved
          <ChevronRight className="ms-1" height={20} width={20} />
        </button>
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
          <Link href="/meetup">Meetup</Link>
        </li>
        <li>
          <Link href="/faq">FAQs</Link>
        </li>
        <button
          className="navbar-extended-toggle-button"
          onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
        >
          <ChevronLeft className="-ms-1 me-1" height={20} width={20} />
          Back
        </button>
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
