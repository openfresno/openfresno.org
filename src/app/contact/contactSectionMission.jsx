import { SectionType } from "./contact";
import HeaderUnderline from "@/components/ui/HeaderUnderline";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useState } from "react";

/**
 * The contact mission section.
 * @returns {JSX.Element}
 */
export default function ContactSectionMission({ sectionType }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailtoUri = `mailto:hello@openfresno.org?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}%0A%0A%0A%0A${encodeURIComponent(
    firstName,
  )}%20${encodeURIComponent(lastName)}%0A${encodeURIComponent(email)}`;

  return (
    // <section className={`contact-section-${sectionType} contact-section-mission`}>
    <section className={`split-page max-lg:py-12`}>
      <div
        className={`grow basis-0 lg:mr-8 app-color--${sectionType} pt-12 pb-18 max-lg:px-6 lg:py-24`}
      >
        <HeaderUnderline
          title="Contact Form"
          description="Get In Touch"
          sectionType={sectionType}
        >
          <span className={`paragraph-bold`}>
            Have questions or need assistance?
          </span>{" "}
          Reach out to us using our form, and we&apos;ll get back to you as soon
          as possible.
          <br></br>
          <br></br>
          Before reaching out, you might find quick answers to your queries in
          our{" "}
          <Link href="/faq" className="contactActionLinksAnchor">
            Frequently Asked Questions (FAQs)
          </Link>
          .<br></br>
          <br></br>
          Check out our weekly meetings on our{" "}
          <Link
            className="contactActionLinksAnchor"
            href="https://www.meetup.com/openfresno/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Meetup."
          >
            meetup page
          </Link>
          .
        </HeaderUnderline>
      </div>
      <div
        className={`grow basis-0 lg:ml-8 app-color--${sectionType}-split py-12 max-lg:px-8 lg:py-24`}
      >
        <form>
          <div className="form-input flex flex-wrap">
            <div className="form-field form-field-half">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="form-input-field"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-field form-field-half">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="form-input-field"
                placeholder="Smith"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-input">
            <div className="form-field">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input-field"
                placeholder="Example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-input">
            <div className="form-field">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="form-input-field"
                placeholder="Write your subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="form-input">
            <div className="form-field">
              <label className="form-label" htmlFor="body">
                Body
              </label>
              <textarea
                id="body"
                className="form-input-field form-textarea"
                placeholder="Write your message..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={1}
              />
            </div>
          </div>
          <div className="flex pt-11 lg:justify-end">
            <Button
              href={mailtoUri}
              className="btn btn--white btn--grow bg-white"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
