import Link from "next/link";
import LayoutE53 from "@/components/layout/LayoutE53";

/**
 * 404 not found page. This is a built-in Next.js function.
 * @see https://nextjs.org/docs/app/api-reference/functions/not-found
 * @returns {JSX.Element}
 */
export default function notFound() {
  return (
    <LayoutE53>
      <section className="not-found-container py-12 lg:py-24 text-center">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="not-found-content-title-large text-4xl font-bold">
            Oops!
          </h1>
          <h2 className="not-found-content-title-small text-xl font-bold">
            404 Page Not Found
          </h2>
          <div className="not-found-text font-bold app-text--gray">
            <p>Looks like this page hasn&apos;t been developed yet.</p>
            <p>Would you like to join and be a part of creating it?</p>
          </div>
          <Link
            href="/get-started"
            className="not-found-link underline app-text--primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to openfresno.org github page."
          >
            Get Started
          </Link>
          <p className="not-found-text font-bold app-text--gray mt-4">
            Explore our site using the menu above.
          </p>
        </div>
      </section>
    </LayoutE53>
  );
}
