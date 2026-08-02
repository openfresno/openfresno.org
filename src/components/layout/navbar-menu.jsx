import Button, { NavExtendedToggle } from "../ui/button/Button";
import Link from "next/link";
import { useState } from "react";

const MOBILE_NAV_PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

const MOBILE_NAV_SECONDARY = [
  { href: "/get-started", label: "Get Started" },
  { href: "/projects", label: "Projects" },
  { href: "/pitch", label: "Pitch a Project" },
  {
    href: "https://www.meetup.com/openfresno",
    label: "Meetup",
    external: true,
  },
  { href: "/faq", label: "FAQs" },
];

const DESKTOP_SECTIONS = [
  {
    title: "Get Started",
    description:
      "Get started today and volunteer with us to drive positive change through technology, making a meaningful impact in your community!",
    href: "/get-started",
    buttonText: "Get Started",
  },
  {
    title: "Projects",
    description:
      "Explore our projects and discover how you can contribute your skills to drive innovation and create positive change.",
    href: "/projects",
    buttonText: "See Projects",
  },
  {
    title: "Pitch a Project",
    description:
      "Get the latest information and guidance for anyone who wants to propose new projects or ideas to the Open Fresno community.",
    href: "/pitch",
    buttonText: "Pitch a Project",
  },
];

// Persists across mount/unmount so the menu remembers its last position.
let lastNav = "primary";

/**
 * Extended navbar menu below the main navigation bar.
 * - **Mobile view**: Toggles between two distinct navigation menus.
 * - **Desktop view**: Displays multiple sections with descriptive text and
 *   call-to-action links.
 * @param {string} className - Optional additional CSS class names
 * @returns {JSX.Element}
 */
export default function NavbarMenu({ className = "" }) {
  const [nav, setNav] = useState(lastNav);

  const toggleNav = (showSecondary) => {
    const next = showSecondary ? "secondary" : "primary";
    lastNav = next;
    setNav(next);
  };

  return (
    <div
      className={`navbar-extended-container p2-regular ${className}`}
      data-nav={nav}
      role="region"
      aria-label="Extended navigation"
    >
      {/* Mobile Navigation - Primary */}
      <ul
        className="navbar-extended-mobile-container nav-semi-bold"
        data-panel="primary"
        role="menu"
        aria-label="Primary navigation"
      >
        {MOBILE_NAV_PRIMARY.map((link) => (
          <li key={link.href} role="none">
            <Link href={link.href} role="menuitem">
              {link.label}
            </Link>
          </li>
        ))}
        <NavExtendedToggle
          mobileNavPosition={nav === "secondary"}
          toggleMobileNavPosition={toggleNav}
        />
      </ul>

      {/* Mobile Navigation - Secondary */}
      <ul
        className="navbar-extended-mobile-container nav-semi-bold"
        data-panel="secondary"
        role="menu"
        aria-label="Secondary navigation"
      >
        {MOBILE_NAV_SECONDARY.map((link) => (
          <li key={link.href} role="none">
            <Link
              href={link.href}
              role="menuitem"
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <NavExtendedToggle
          mobileNavPosition={nav === "secondary"}
          toggleMobileNavPosition={toggleNav}
        />
      </ul>

      {/* Desktop Navigation */}
      <div className="navbar-extended-desktop-container">
        {DESKTOP_SECTIONS.map((section) => (
          <section key={section.href} className="navbar-extended-desktop-section">
            <h4 className="navbar-extended-header h4-semi-bold">{section.title}</h4>
            <p className="p1-regular grow">{section.description}</p>
            <Button href={section.href} className="btn-small">
              {section.buttonText}
            </Button>
          </section>
        ))}

        {/* Quick Links */}
        <section className="navbar-extended-quick-links p3-regular gap-4 self-center [@media(min-width:1400px)]:space-y-8 [@media(min-width:992px)_and_(max-width:1400px)]:flex">
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
