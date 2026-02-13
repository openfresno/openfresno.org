import facebookIcon from "@/../public/img/socialmedia/facebook.svg";
import twitterIcon from "@/../public/img/socialmedia/twitter.svg";
import youtubeIcon from "@/../public/img/socialmedia/youtube.svg";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="footer-top-content p2-regular">
        <section>
          <h2 className="sub-heading-main mb-6 text-2xl font-bold">
            Get Involved.
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Open Fresno is a tax-deductible civic-tech community dedicated to
            using technology and open data for positive civic change in Fresno.
            <br className="hidden md:block" />
            <span className="mt-4 block text-sm text-gray-500">
              Fiscally sponsored by{" "}
              <Link
                href="https://rootaccess.org/"
                className="underline hover:text-black"
              >
                Root Access
              </Link>
              .
            </span>
          </p>
        </section>

        <section className="flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
            Community
          </h3>
          <div className="footer-link-list">
            <Link
              className="footer-link--underline"
              href="https://www.meetup.com/openfresno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weekly Meetup
            </Link>
            <Link href="/projects" className="footer-link--underline">
              Our Projects
            </Link>
            <Link href="/faq" className="footer-link--underline">
              Frequently Asked Questions
            </Link>
          </div>
        </section>

        <section className="flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 lg:text-right">
            Follow Us
          </h3>
          <div className="footer-socials">
            <Link
              href="https://www.facebook.com/openfresno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src={facebookIcon}
                alt="Facebook"
                width={32}
                height={32}
                className="object-cover"
              />
            </Link>
            <Link
              href="https://twitter.com/openfresno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src={twitterIcon}
                alt="X (Twitter)"
                width={32}
                height={32}
                className="object-cover"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@openfresno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src={youtubeIcon}
                alt="Youtube"
                width={32}
                height={32}
                className="object-cover"
              />
            </Link>
          </div>
        </section>
      </div>
      <div className="footer-bottom-content">
        <div className="caption-footer">
          © {new Date().getFullYear()} Open Fresno. All rights reserved.
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-700">
          <Link
            href="/get-started"
            className="hover:text-black transition-colors"
          >
            Get started
          </Link>
          <Link
            href="/about/#team"
            className="hover:text-black transition-colors"
          >
            Our team
          </Link>
          <Link
            href="/code-of-conduct"
            className="hover:text-black transition-colors"
          >
            Code of conduct
          </Link>
        </div>
      </div>
    </footer>
  );
}
