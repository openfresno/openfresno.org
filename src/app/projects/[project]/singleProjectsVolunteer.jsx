import Link from "next/link";

/**
 * Instructions for project page.
 * @returns {JSX.Element}
 */
export default function SingleProjectsVolunteer() {
  return (
    <section id="how-to-volunteer" className={`project-volunteer-container`}>
      <div className={`project-volunteer-info-container`}>
        <p className={`project-type`}>Volunteer</p>
        <div className={`project-main-heading-container heading-underline`}>
          <h2 className={`project-heading project-heading-underline`}>
            Why Join Open Fresno?
          </h2>
        </div>
        <p className={`project-paragraph`}>
          Join us at Open Fresno to collaborate on impactful civic tech projects
          and connect with a diverse community of like-minded individuals.
          It&apos;s a rewarding way to make a meaningful difference in our city.
        </p>
      </div>
      <div className={`get-started-bottom`}>
        <img src="/img/about/rectangle.png" alt="rectangle" />
        <p className={`opportunities-anchor-bottom`}>
          Not a volunteer yet?
          <br />
          <Link href="/get-started">Get Started</Link>
        </p>
      </div>
    </section>
  );
}
