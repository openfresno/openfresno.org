import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useState } from "react";
import { SectionType } from "./contact";

/**
 * contact mission section.
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
    <section className={`general-section-${sectionType}`}>
      <div className={`general-section-container contact-mission-padding`}>
        <div
          className={`contact-${sectionType}-heading-container heading-underline underline-alt`}
        >
          <h1 className={`general-heading-main general-heading-${sectionType}`}>
            CONTACT FORM
          </h1>
          <h2
            className={`general-sub-heading-main general-sub-heading-${sectionType}`}
          >
            Get In Touch
          </h2>
        </div>
        <p className={`paragraph-large`}>
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
        </p>
      </div>
      <div className="general-section-container form-holder">
        <form>
          <div className="form-input">
            <TextField
              id="standard-helperText"
              label="First Name"
              // defaultValue="John"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              variant="standard"
              margin="dense"
              sx={{
                width: "45%",
                marginRight: "10%",
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInput-input": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "2px solid white", // Default underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when input is focused
                },
                "& .MuiInput-underline.Mui-focused:after": {
                  borderBottom: "2px solid white", // Underline color when input is focused
                },
              }}
            />
            <TextField
              id="standard-helperText"
              label="Last Name"
              // defaultValue="John"
              placeholder="Smith"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              variant="standard"
              margin="dense"
              sx={{
                width: "45%",
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInput-input": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "2px solid white", // Default underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when input is focused
                },
                "& .MuiInput-underline.Mui-focused:after": {
                  borderBottom: "2px solid white", // Underline color when input is focused
                },
              }}
            />
          </div>
          <div className="form-input">
            <TextField
              id="standard-helperText"
              label="Email"
              // defaultValue="John"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              margin="dense"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInput-input": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "2px solid white", // Default underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when input is focused
                },
                "& .MuiInput-underline.Mui-focused:after": {
                  borderBottom: "2px solid white", // Underline color when input is focused
                },
              }}
            />
          </div>
          <div className="form-input">
            <TextField
              id="standard-helperText"
              label="Subject"
              // defaultValue="John"
              placeholder="Write  your subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              variant="standard"
              margin="dense"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInput-input": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "2px solid white", // Default underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when input is focused
                },
                "& .MuiInput-underline.Mui-focused:after": {
                  borderBottom: "2px solid white", // Underline color when input is focused
                },
              }}
            />
          </div>
          <div className="form-input">
            <TextField
              id="standard-multiline-static"
              label="Body"
              placeholder="Write your message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              multiline
              rows={1}
              variant="standard"
              margin="dense"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInput-input": {
                  color: "white",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "2px solid white", // Default underline color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when input is focused
                },
                "& .MuiInput-underline.Mui-focused:after": {
                  borderBottom: "2px solid white", // Underline color when input is focused
                },
              }}
            />
          </div>
          <div>
            <Button
              href={mailtoUri}
              variant="contained"
              size="large"
              sx={{
                whiteSpace: "nowrap",
                background: "white",
                color: "black",
                float: "right",
              }}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
