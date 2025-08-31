import Link from "next/link";

/**
 * 404 not found page. This is a built-in Next.js function.
 * @see https://nextjs.org/docs/app/api-reference/functions/not-found
 * @returns {JSX.Element}
 */
export default function notFound() {
  return (
    <>
      <section className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-content-title-large">
            Oops!
            <div className="not-found-content-title-small mt-4">
              404 Page Not Found
            </div>
          </h1>
          <div className="not-found-text">
            <p>Looks like this page hasn&apos;t been developed yet.</p>
            <p>Would you like to join and be a part of creating it?</p>
          </div>
          <Link
            href="https://github.com/openfresno/openfresno.org"
            className="not-found-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to openfresno.org github page."
          >
            Get Started
          </Link>
          <p className="not-found-text">
            Explore our site using the menu above.
          </p>
        </div>
      </section>
    </>
  );
}
