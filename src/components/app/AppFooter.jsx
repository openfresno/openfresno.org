import Link from "next/link";

/**
 * Default application footer.
 * @returns {JSX.Element}
 */
export default function AppFooter() {
  return (
    <footer>
      <div className="footerContainerTop">
        <div className="footerMessage">
          <h2 className="footerMessageHeader">Get Involved.</h2>
          <p className="footerMessageParagraph">
            Open Fresno is a tax-deductible civic-tech community dedicated
            to using technology and open data for positive civic change in
            Fresno.
          </p>
        </div>

        <div className="footerActionLinks">
          <p className="footerActionLinksItem">
            Join us for our weekly meetings on{" "}
            <Link
              className="footerActionLinksAnchor"
              href="https://www.meetup.com/code4sac/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Meetup."
            >
              meetup
            </Link>
            .
          </p>
          <p className="footerActionLinksItem">
            See our{" "}
            <Link href="/projects" className="footerActionLinksAnchor">
              projects
            </Link>
            .
          </p>
          <p className="footerActionLinksItem">
            For any questions, visit our{" "}
            <Link href="/faq" className="footerActionLinksAnchor">
              FAQs
            </Link>
            .
          </p>
        </div>

        <div className="footerSocialMedia">
          <Link
            href="https://www.facebook.com/code4sac"
            target="_blank"
            rel="noopener noreferrer"
            className="footerSocialMediaLink"
          >
            <img
              src="/img/socialmedia/facebook.svg"
              alt="Facebook"
              className="footerSocialMediaIcon"
            />
          </Link>
          <Link
            href="https://twitter.com/code4sac"
            target="_blank"
            rel="noopener noreferrer"
            className="footerSocialMediaLink"
          >
            <img
              src="/img/socialmedia/twitter.svg"
              alt="X"
              className="footerSocialMediaIcon"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@code4sac"
            target="_blank"
            rel="noopener noreferrer"
            className="footerSocialMediaLink"
          >
            <img
              src="/img/socialmedia/youtube.svg"
              alt="Youtube"
              className="footerSocialMediaIcon"
            />
          </Link>
        </div>
      </div>

      <div className="footerBottomContainer">
        <div className="footerBottomTitle">Open Fresno</div>
        <div className="footerBottomLinksContainer">
          <Link href="/get-started" className="footerBottomLink">
            get started
          </Link>
          <Link href="/about/#team" className="footerBottomLink">
            our team
          </Link>
          <Link href="/code-of-conduct" className="footerBottomLink">
            code of conduct
          </Link>
        </div>
      </div>
    </footer>
  );
}
