import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import Link from "next/link";

/**
 * Instructions for the project page.
 * Not implemented yet. Styles are only available for mobile on Figma.
 * @returns {JSX.Element}
 */
export default function projectSectionVolunteer() {
  return (
    <section id="how-to-volunteer" className={`project-volunteer-container`}>
      <div className={`project-volunteer-info-container`}>
        <p className={`project-type`}>Volunteer</p>
        <div
          className={`project-main-heading-container heading-underline underline-alt`}
        >
          <h2 className={`project-heading`}>Why Join Open Fresno?</h2>
        </div>
        <p className={`project-paragraph`}>
          Join us at Open Fresno to collaborate on impactful civic tech projects
          and connect with a diverse community of like-minded individuals.
          It&apos;s a rewarding way to make a meaningful difference in our city.
        </p>
      </div>
      <div className={`project-volunteer-image-container`}>
        <BasePathImage
          className="project-volunteer-image"
          src="/img/about/rectangle.png"
          alt="Volunteer with Open Fresno"
          width={400}
          height={300}
        />
        <p className={`project-volunteer-anchor`}>
          Not a volunteer yet?
          <br />
          <Link className={`project-volunteer-link`} href="/get-started">
            Get Started
          </Link>
        </p>
      </div>
    </section>
  );
}
