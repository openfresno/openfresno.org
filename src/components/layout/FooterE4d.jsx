import Link from "next/link";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

/**
 * The default footer for the application.
 * - "Get Involved" message: Describes Open Fresno's mission and fiscal sponsorship.
 * - Action links: Provides quick links to the Open Fresno Meetup group, projects, and FAQs.
 * - Social media links: Includes icons that link to the organization's Facebook, X (formerly Twitter), and YouTube pages.
 * - Bottom section displays the "Open Fresno" title and additional links
 * for getting started, learning about the team, and viewing the code of conduct.
 * @returns {JSX.Element} The rendered footer component.
 */
export default function FooterE4d() {
  return (
    <footer>
      <div className="footer-top-content p2-regular">
        <section>
          <h2 className="sub-heading-main mb-8">Get Involved.</h2>
          <p>
            Open Fresno is a tax-deductible civic-tech community dedicated to
            using technology and open data for positive civic change in Fresno.
            Open Fresno is fiscally sponsored by{" "}
            <Link href="https://rootaccess.org/">Root Access</Link>.
          </p>
        </section>
        <section className="grid auto-rows-min gap-y-8">
          <p>
            Join us for our weekly meetings on{" "}
            <Link
              className="footer-link--underline"
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              meetup
            </Link>
            .
          </p>
          <p>
            See our{" "}
            <Link href="/projects" className="footer-link--underline">
              projects
            </Link>
            .
          </p>
          <p>
            For any questions, visit our{" "}
            <Link href="/faq" className="footer-link--underline">
              FAQs
            </Link>
            .
          </p>
        </section>
        <section className="footer-socials">
          <Link
            href="https://www.facebook.com/openfresno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BasePathImage
              src="/img/socialmedia/facebook.svg"
              alt="Facebook"
              width={46}
              height={46}
            />
          </Link>
          <Link
            href="https://twitter.com/openfresno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BasePathImage
              src="/img/socialmedia/twitter.svg"
              alt="X"
              width={46}
              height={46}
            />
          </Link>
          <Link
            href="https://www.youtube.com/@openfresno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BasePathImage
              src="/img/socialmedia/youtube.svg"
              alt="Youtube"
              width={46}
              height={46}
            />
          </Link>
        </section>
      </div>
      <div className="border-t-1">
        <div className="footer-bottom-content">
          <div className="caption-footer">Open Fresno</div>
          <div className="caption-regular-uppercase space-x-10">
            <Link href="/get-started">Get started</Link>
            <Link href="/about/#team">Our team</Link>
            <Link href="/code-of-conduct">Code of conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
