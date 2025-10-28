import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "../../../integrations/tabler-icon";
import { HamburgerStaggered, IconX } from "..";

/**
 * A flexible, multi-purpose component for rendering a styled button or link.
 *
 * This component acts as a smart wrapper, rendering either a Next.js `<Link>`
 * or a native `<button>` element based on whether the `href` prop is provided.
 * This ensures consistent styling and behavior for all interactive elements
 * while keeping the core component logic minimal. The specific appearance is
 * controlled entirely by the CSS classes passed via the `className` prop.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - The CSS class names to apply for styling (e.g., 'btn', 'btn-small', 'btn-alt--transition').
 * @param {string} [props.href] - If provided, the component renders a `<Link>` with this URL.
 * @param {string} [props.target="_self"] - Specifies where to open the linked document (e.g., `_blank` for a new tab). Only applies when `href` is set.
 * @param {function} [props.onClick] - Click handler function. Only applies when the component renders as a `<button>`.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button or link (e.g., text, icons, other components).
 * @param {string|React.ReactNode} props.textContent - DEPRECATED: Use children instead. The text or content displayed inside the button or link.
 *
 * @example
// Renders a link with default styles
<BaseButton className="btn" href="/about">
  Learn More
</BaseButton>
 *
 * @example
// Renders a link with a growing border effect
<BaseButton className="btn btn--grow" href="/contact">
  Get In Touch
</BaseButton>
 *
 * @example
// Renders a button with the 'alt' style
<BaseButton className="btn btn-alt" onClick={() => console.log('Button clicked!')}>
  Submit
</BaseButton>
 */
const BaseButton = ({
  className,
  href,
  target,
  onClick,
  children,
  textContent,
}) => {
  if (href) {
    return (
      <Link
        className={className}
        href={href}
        target={target ? target : "_self"}
      >
        {children || textContent}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children || textContent}
    </button>
  );
};

const NavToggle = ({ mobile, extendedMenuVisible, showExtendedMenu }) => {
  if (mobile) {
    return (
      <BaseButton
        className="navbar-toggle-button--desktop"
        onClick={() => showExtendedMenu(!extendedMenuVisible)}
      >
        Get Involved
        {extendedMenuVisible ? (
          <ChevronUp className="ms-2" />
        ) : (
          <ChevronDown className="ms-2" />
        )}
      </BaseButton>
    );
  } else {
    return (
      <BaseButton
        className="navbar-toggle-button--mobile"
        onClick={() => showExtendedMenu(!extendedMenuVisible)}
      >
        {extendedMenuVisible ? <IconX /> : <HamburgerStaggered />}
      </BaseButton>
    );
  }
};

const NavExtendedToggle = ({ toggleMobileNavPosition, mobileNavPosition }) => {
  {
    if (mobileNavPosition) {
      return (
        <BaseButton
          className="navbar-extended-toggle-button"
          onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
        >
          <ChevronLeft className="-ms-1 me-1" height={20} width={20} />
          Back
        </BaseButton>
      );
    } else {
      return (
        <BaseButton
          className="navbar-extended-toggle-button"
          onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
        >
          Get Involved
          <ChevronRight className="ms-1" height={20} width={20} />
        </BaseButton>
      );
    }
  }
};

export { BaseButton, NavExtendedToggle, NavToggle };
