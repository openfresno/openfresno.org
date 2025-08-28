import Button from "../../components/ui/buttons";
import { Slider } from "../../components/ui";
import Link from "next/link";
import Image from "next/image";
import AppLayout from "../../components/layout/AppLayout";

export default function HomePage() {
  return (
    <AppLayout fadeNavbar={true}>
      <main className="">
        <header className="">
          <div className="home-landing-image">
            <div className="home-landing-container">
              <h1 className="home-landing-heading">
                <span>We are</span> <br />
                Open Fresno
              </h1>
              <p className="section-paragraph">
                Join us to address civic challenges and enhance public services
                for Fresno residents through technology and open data. Volunteer
                now for a better future!
              </p>
              <div className="home-buttons-group">
                <Button
                  className="btn btn-alt-light"
                  href="/get-started"
                  textContent="Get Started"
                />
                <Button
                  className="btn btn-gold"
                  href="/projects"
                  textContent="View Projects"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="general-section-light">
          <div className="general-section-container heading-underline">
            <h1 className="general-heading-section">Who we are</h1>
            <h2 className="sub-heading">
              Building a Brighter Fresno Through Innovation and Technology
            </h2>
          </div>
          <div className="general-section-container">
            <p className="section-paragraph">
              Open Fresno is
              <span className="paragraph-bold">
                {" "}
                a community of technologists, developers, designers, and
                civic-minded individuals{" "}
              </span>
              who come together to use technology and open data to address civic
              challenges and improve public services in the Fresno area.
              <br />
              leveraging technology and open data to address civic challenges
              and enhance public services in Fresno and the Central Valley area.
              Our community thrives on collaboration, innovation, and a shared
              commitment to driving positive change.
            </p>
          </div>
        </section>
        <section className="general-section-dark home-section-dark-flex home-about-image">
          <div className="home-about-container">
            <div className="general-section-container heading-underline underline-alt">
              <h1 className="general-heading-section general-heading-section-alt">
                What we do
              </h1>
              <h2 className="sub-heading">
                Building a Better Future <br />
                in Fresno
              </h2>
            </div>
            <p className="section-paragraph">
              Our mission is done by uniting programmers, designers, and other
              talents, we transform ideas into tangible solutions that impact
              lives throughout the Fresno area. Together, we drive innovation
              forward, building a future where open source technology empowers
              citizens and uplifts our city.{" "}
              <span className="paragraph-bold">
                Join us in driving innovation through open-source tech and
                empowering our community!
              </span>
            </p>
          </div>
          <Image
            src="/img/open_data_day_curved.png"
            alt="Open Data Day"
            className="home-section-action-image"
            width={720}
            height={574}
          />
        </section>
        <section className="general-section-dark home-services-container">
          <div className="general-section-container heading-underline underline-alt">
            <h1 className="general-heading-section general-heading-section-alt">
              Our services
            </h1>
            <h2 className="sub-heading">Explore Our Engagement Options</h2>
          </div>
          <div className="home-numbered-grid">
            <div className="home-numbered-container">
              <Image
                src="/img/1.png"
                alt="Open Data Day"
                width={81}
                height={80}
              />
              <h2 className="home-numbered-header">
                Engage with Our Community
              </h2>
              <p className="home-numbered-paragraph">
                Connect with like-minded individuals, share ideas, and
                collaborate on projects at our meetups. Join us to be a part of
                a vibrant community dedicated to positive change through
                technology.
              </p>
              <Button
                className="btn btn-alt-gold"
                href="https://www.meetup.com/openfresno/"
                target="_blank"
                textContent="Visit Meetup"
              />
            </div>
            <div className="home-numbered-container">
              <Image
                src="/img/2.png"
                alt="Open Data Day"
                width={80}
                height={80}
              />
              <h2 className="home-numbered-header">
                Drive Innovation with Projects
              </h2>
              <p className="home-numbered-paragraph">
                Discover how you can contribute your skills to projects that
                address real challenges and enhance our city. Be part of a
                dynamic team working on solutions that make a difference.
              </p>
              <Button
                className="btn btn-alt-gold"
                href="/projects"
                textContent="See Our Projects"
              />
            </div>
            <div className="home-numbered-container">
              <Image
                src="/img/3.png"
                alt="Open Data Day"
                width={81}
                height={80}
              />
              <h2 className="home-numbered-header">Pitch Your Vision</h2>
              <p className="home-numbered-paragraph">
                Have a project idea that can benefit the community? Pitch it to
                us and join forces with our community of innovators to bring
                your vision to life, driving positive change in Fresno.
              </p>
              <Button
                className="btn btn-alt-gold"
                href="/pitch"
                textContent="Pitch a Project"
              />
            </div>
          </div>
        </section>
        <section className="general-section-light">
          <div className="general-section-container heading-underline">
            <h1 className="general-heading-section">Why volunteer</h1>
            <h2 className="sub-heading">
              Empower Change with <br />
              Open Fresno
            </h2>
          </div>
          <div className="general-section-container">
            <p className="section-paragraph">
              <span className="paragraph-bold">
                Ready to make a difference?{" "}
              </span>
              Join us at Open Fresno and use your skills to drive positive
              change through technology and collaboration.
              <span className="paragraph-bold">
                {" "}
                Whether you&apos;re a designer, developer, or anyone eager to
                volunteer, together we&apos;re enhancing community services,
                amplifying voices, and giving you the opportunity to improve
                your resume and portfolio.
              </span>{" "}
              It&apos;s a journey of innovation and empowerment waiting for you.
              Your impact starts{" "}
              <Link
                href="/get-started"
                className="home-section-paragraph-anchor"
              >
                here
              </Link>
              !
            </p>
          </div>
        </section>
        <section className="general-section-dark home-projects-section">
          <div className="home-projects-info-container">
            <div className="home-section-dark-container heading-underline underline-alt">
              <h1 className="general-heading-section general-heading-section-alt">
                our projects
              </h1>
              <h2 className="heading-large-section-sub">
                Driving Innovation Through Tech and Collaboration
              </h2>
            </div>
            <p className="section-paragraph">
              We tackle tech projects addressing civic issues, enhancing
              services in Fresno. From open data initiatives to government
              services and community platforms,
              <span className="paragraph-bold">
                {" "}
                our open-source tech and collaboration drive innovation
              </span>
              for transparent, efficient, engaged local governance.
            </p>
            <Button
              href="/projects"
              className="btn btn-gold"
              textContent="Find Projects"
            />
          </div>
          <div className="test">
            <Slider containerClass="navigation-wrapper">
              <div className="keen-slider__slide">
                <div className="slide-content">
                  <h2 className="sub-heading">Learning Blocks</h2>
                  <p className="home-section-dark-paragraph">
                    Unlock grades, schedules, and progress in one thrilling
                    platform!
                  </p>
                </div>
                <Image
                  src="/img/home/learningblocks.jpg"
                  alt="Learning Blocks"
                  className="home-section-project-image"
                  width={918}
                  height={469}
                />
              </div>
              <div className="keen-slider__slide">
                <div className="slide-content">
                  <h2 className="sub-heading">TrashAI</h2>
                  <p className="home-section-dark-paragraph">
                    Developing machine learning technology to identify trash in
                    images.
                  </p>
                </div>
                <Image
                  src="/img/TrashAI2.png"
                  alt="TrashAI"
                  className="home-section-project-image"
                  width={839}
                  height={412}
                />
              </div>
              <div className="keen-slider__slide">
                <div className="slide-content">
                  <h2 className="sub-heading">Open Budget Sac</h2>
                  <p className="home-section-dark-paragraph">
                    Fiscal transparency and visualization web app for the City
                    of Fresno.
                  </p>
                </div>
                <Image
                  src="https://raw.githubusercontent.com/openfresno/openfresno.org/main/openfresno.jpg"
                  alt="Open Budget Sac"
                  className="home-section-project-image"
                  width={385}
                  height={211}
                />
              </div>
            </Slider>
          </div>
        </section>
        <section className="general-section-gray partnership-section">
          <div className="heading-underline-partnership">
            <h1 className="heading-large-section-sub">
              Our Collaborations and Partnerships
            </h1>
          </div>
          <p className="home-numbered-paragraph-partnerships">
            We have had the privilege of working with a diverse array of
            companies, organizations, and government entities, some of which are
            showcased below.
          </p>
          <div className="home-projects-section-partnerships">
            <Link
              href="https://www.cityofsacramento.gov/"
              style={{ paddingRight: 26 }}
            >
              <Image
                src="/img/partnership-icons/cityofsacramento.png"
                width="300"
                height="73"
                color="white"
                alt="cityofsacramento"
              />
            </Link>
            <Link href="https://www.dbaarts.org/">
              <Image
                src="/img/partnership-icons/logo_dba_02.png"
                width="137"
                height="137"
                alt="DBA"
              />
            </Link>
            <Link href="https://codeforamerica.org/">
              <Image
                src="/img/partnership-icons/logo_openfresno_white_transparent_02.png"
                width="233"
                height="112"
                alt="Code for America"
              />
            </Link>
          </div>
        </section>
        <section className="general-section-dark donate-section">
          <div className="general-section-container heading-underline donate-section-underline">
            <h1 className="heading-large-section-sub">
              Help Support Open Fresno
            </h1>
          </div>
          <div className="donate-section-paragraph-container">
            <p className="home-section-dark-paragraph">
              <span className="home-section-dark-paragraph-bold">
                Your support, whether through donations or volunteering,
              </span>{" "}
              is instrumental in driving positive change with Open Fresno.
              <br />
              <br />
              <span>Donations fuel our technology</span>-driven initiatives that
              address civic challenges, enhance public services, and amplify
              community voices.
              <br />
              <br />
              <span>
                {" "}
                When you volunteer, you actively contribute your skills{" "}
              </span>
              - be it coding, designing, or any other expertise - to create
              tangible solutions that make a real impact.
              <br />
              <br />
              Together, we shape a better future for our city, amplifying
              voices, enhancing services, and driving innovation.
              <span>
                {" "}
                Join us today and be a catalyst for lasting, community-driven
                transformation!
              </span>
            </p>
            <div className="home-buttons-group">
              <Button
                href="/get-started"
                className="btn btn-alt-gold"
                textContent="Get Started"
              />
              <Button
                href="/donate"
                className="btn btn-gold"
                textContent="Donate"
              />
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
