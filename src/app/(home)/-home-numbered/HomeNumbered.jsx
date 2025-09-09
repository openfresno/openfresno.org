import "./home-numbered.css";
import Button from "@/components/ui/Button";

export default function HomeNumbered() {
  return (
    <div className="home-numbered-grid">
      <div className="home-numbered-container">
        <Image src="/img/1.png" alt="Open Data Day" width={81} height={80} />
        <h2 className="home-numbered-header sm:h3-bold h4-bold">
          Engage with Our Community
        </h2>
        <p className="home-numbered-paragraph p3-regular">
          Connect with like-minded individuals, share ideas, and collaborate on
          projects at our meetups. Join us to be a part of a vibrant community
          dedicated to positive change through technology.
        </p>
        <Button
          className="btn"
          href="https://www.meetup.com/openfresno/"
          target="_blank"
          textContent="Visit Meetup"
        />
      </div>
      <div className="home-numbered-container">
        <Image src="/img/2.png" alt="Open Data Day" width={80} height={80} />
        <h2 className="home-numbered-header sm:h3-bold h4-bold">
          Drive Innovation with Projects
        </h2>
        <p className="home-numbered-paragraph p3-regular">
          Discover how you can contribute your skills to projects that address
          real challenges and enhance our city. Be part of a dynamic team
          working on solutions that make a difference.
        </p>
        <Button
          className="btn"
          href="/projects"
          textContent="See Our Projects"
        />
      </div>
      <div className="home-numbered-container">
        <Image src="/img/3.png" alt="Open Data Day" width={81} height={80} />
        <h2 className="home-numbered-header sm:h3-bold h4-bold">
          Pitch Your Vision
        </h2>
        <p className="home-numbered-paragraph p3-regular">
          Have a project idea that can benefit the community? Pitch it to us and
          join forces with our community of innovators to bring your vision to
          life, driving positive change in Fresno.
        </p>
        <Button className="btn" href="/pitch" textContent="Pitch a Project" />
      </div>
    </div>
  );
}
