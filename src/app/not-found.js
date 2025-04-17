import Link from 'next/link'

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
          <h1>Oops!</h1>
          <h4>404 Page Not Found</h4>
          <div className="not-found-text-container">
            <p>Looks like this page hasn't been developed yet.</p>
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
          <p>Explore our site using the menu above.</p>
        </div>
      </section>
    </>
  )
}
