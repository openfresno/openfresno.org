import Button from "../../components/ui/buttons";

/**
 * Home projects section.
 * @returns {JSX.Element}
 */
export default function HomeSectionLandingImage() {
  return (
    <div className={"home-landing-background"}>
      <section className={`home-landing-image`}>
        <div className={`home-landing-container`}>
          <h1 className={`home-landing-heading`}>
            <span>We are</span> <br />
            Open Fresno
          </h1>
          <p className={`section-paragraph`}>
            Join us to address civic challenges and enhance public services for
            Fresno residents through technology and open data. Volunteer now for
            a better future!
          </p>
          <div className={`home-buttons-group`}>
            <Button
              className={`btn btn-alt-light`}
              href="/get-started"
              textContent="Get Started"
            />
            <Button
              className={`btn btn-gold`}
              href="/projects"
              textContent="View Projects"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
