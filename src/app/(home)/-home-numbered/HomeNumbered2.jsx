import Link from "next/link";
import "./home-numbered2.css";

export default function HomeNumbered2({ className }) {
  return (
    <div className={`timeline ${className}`}>
      <div className="mt-10 ps-8 pb-10 md:hidden">
        <h1 className="heading-main app-color--dark">Opportunities</h1>
        <h2 className="h4-semi-bold mt-[10px]">
          Explore Our Volunteer Options
        </h2>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">1</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Engage with Our Community</h2>
          <p>
            Connect with like-minded individuals, share ideas, and collaborate
            on projects at our meetups.
            <br />
            Join us to be a part of a vibrant community dedicated to positive
            change through technology.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            Visit Meetup
          </Link>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">2</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Drive Innovation with Projects</h2>
          <p>
            Discover how you can contribute your skills to projects that address
            real challenges and enhance our city. Be part of a dynamic team
            working on solutions that make a difference.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            See Our Project
          </Link>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">3</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">Pitch Your Vision</h2>
          <p>
            Have a project idea that can benefit the community? Pitch it to us
            and join forces with our community of innovators to bring your
            vision to life, driving positive change in Central California.
          </p>
          <Link className="btn btn--grow mx-auto mt-2 lg:mx-0" href="">
            Pitch a Project
          </Link>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">4</div>
        <div className="timeline-item-content">
          <h2 className="heading-small">
            Explore On-Site Opportunities with Root Access
          </h2>
          <p>
            Discover Root Access on Van Ness Ave in the Tower District, just a
            block south of Fresno City College. From advanced 3D printers and a
            cozy lounge to laser cutting, workshops, and an electronics haven,{" "}
            <b>explore what awaits you at our partner's space!</b>
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link className="btn btn--grow" href="">
              Check it Out
            </Link>
            <Link className="btn btn--grow" href="">
              Explore Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
