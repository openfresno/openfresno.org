import React, { useState } from "react";
import Link from "next/link";

import "./extended-menu.css";
import { ChevronRight } from "@/integrations/tabler-icon";

/**
 * An extended dropdown menu for the main application navbar.
 * @returns {JSX.Element}
 */
const ExtendedNavbarMenu = ({ className = "" }) => {
  const [mobileNavPosition, toggleMobileNavPosition] = useState(false);

  return (
    <div className={`navbar-extended-container p2-regular ${className}`}>
      <ul
        className={`navbar-extended-mobile-container nav-semi-bold page-container space-y-7`}
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
          <Link className="" href="/donate">
            Donate
          </Link>
        </li>
        <button
          className="navbar-toggle-button nav-semi-bold mt-[4.5rem] mb-4"
          onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
        >
          Get Involved
          <ChevronRight className="ms-1" height={20} width={20} />
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
        <section className="p3-regular col-span-2 my-auto space-y-5">
          {/* <div> */}
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
          {/* </div> */}
        </section>
      </div>
    </div>
  );
};

export default ExtendedNavbarMenu;
