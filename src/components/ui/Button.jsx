import Link from "next/link";

/**
 * `Button` is a flexible component that renders either:
 * - A styled `<Link>` (for navigation), when an `href` is provided.
 * - A styled `<button>` (for actions), when no `href` is provided.
 *
 * This allows consistent styling and behavior across links and buttons
 * in the application.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Optional CSS class names for styling.
 * @param {string} [props.href] - If provided, renders a Next.js `<Link>` with this URL.
 * @param {string} [props.target="_self"] - Specifies where to open the linked document
 *   (e.g., `_blank` for new tab). Only applies when `href` is set.
 * @param {function} [props.onClick] - Click handler function. Only applies when rendering as a `<button>`.
 * @param {string|React.ReactNode} props.textContent - The text or content displayed inside the button or link.
 *
 * @returns {JSX.Element} A styled button or link element.
 *
 * @example
// Renders a link
<Button
  className="btn-primary"
  href="/about"
  textContent="Learn More"
/>
 *
 * @example
// Renders a button
<Button
  className="btn-secondary"
  onClick={() => alert("Clicked!")}
  textContent="Click Me"
/>
 */
const Button = ({ className, href, target, onClick, textContent }) => {
  return href ? (
    <Link className={className} href={href} target={target ? target : "_self"}>
      {textContent}
    </Link>
  ) : (
    <button className={className} onClick={onClick ? onClick : null}>
      {textContent}
    </button>
  );
};

export default Button;
