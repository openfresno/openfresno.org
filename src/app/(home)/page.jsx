import Button from "../../components/ui/Button";
import { Slider } from "../../components/ui";
import Link from "next/link";
import Image from "next/image";
import AppLayout from "../../components/layout/AppLayout";
import HomeNumbered2 from "./-home-numbered/HomeNumbered2";
import "./home.css";

export default function HomePage() {
  return (
    <AppLayout fadeNavbar={true}>
      <main>
        <header className="home-landing-container">
          <div className="space-y-10">
            <h1 className="section-title">Welcome to Open Fresno</h1>
            <p className="section-title-paragraph">
              Become a part of the transformation in Fresno and the Central
              Valley Area through technology and open data. Volunteer today for
              a brighter future!
            </p>
            <div className="home-buttons-group">
              <Link
                className="btn btn-alt btn-alt--transition"
                href="/get-started"
              >
                Get Started
              </Link>
              <Link className="btn btn--grow" href="/projects">
                View Projects
              </Link>
            </div>
          </div>
          <div>
            <div className="home-landing-image">
              <Image
                src="/assets/logo/logo-blue.svg"
                className="absolute -top-10 right-0"
                width={200}
                height={397}
                alt="Open Fresno logo blue"
              />
              <Image
                src="/img/fresno_tower_circle.png"
                className=""
                width={418}
                height={397}
                alt="Ariel photo of downtown Fresno and the iconic Tower Theatre."
              />
            </div>
          </div>
        </header>
        <section className="app-color--dark">
          <div className="split-section gap-6 px-6 py-24 lg:px-10 lg:py-32">
            <div>
              <h1 className="heading-section app-color--light">Who we are</h1>
              <h2 className="sub-heading">
                Creating a Brighter Future Through Innovation and Technology.
              </h2>
            </div>
            <p className="section-paragraph">
              Open Fresno is
              <b>
                {" "}
                a community of technologists, developers, designers, and
                civic-minded individuals{" "}
              </b>
              who come together to use technology and open data to address civic
              challenges and improve public services in the Central California.
              <br />
              <br />
              We are passionate about fostering civic innovation and creating
              positive impact through technology and community engagement.
            </p>
          </div>
        </section>
        <section>
          <div className="split-section px-6 py-24 lg:px-10 lg:py-32">
            <div>
              <h1 className="heading-section app-color--dark">What we do</h1>
              <h2 className="sub-heading">
                Building a Better Future For Fresno and the Central Valley Area
              </h2>
              <p className="section-paragraph pt-10">
                <b>
                  Our mission is done by uniting programmers, designers, and
                  other talents, we transform ideas into tangible solutions that
                  impact lives throughout Central California.
                </b>
                {""}
                Together, we drive innovation forward, building a future where
                open source technology empowers citizens and uplifts our city.{" "}
                <b>
                  Join us in driving innovation through open-source tech and
                  empowering our community!
                </b>
              </p>
            </div>
            <div className="image-container relative ms-[108px]">
              <Image
                alt="Open Data Day"
                loading="lazy"
                width={596}
                height={577}
                decoding="async"
                data-nimg="1"
                className="main-image z-10"
                style="color: transparent"
                src="/img/home/home2.png"
              />
              <Image
                alt="Star shape"
                loading="lazy"
                width={294}
                height={308}
                decoding="async"
                data-nimg="1"
                className="star-image z-0"
                style="color: transparent"
                src="/img/home/star.svg"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto mb-[4.5rem] max-w-[calc(var(--screen-xxl)_+_80px)] px-6 lg:px-10">
          <div className="mb-28 hidden md:block">
            <h1 className="heading-section app-color--dark">Opportunities</h1>
            <h2 className="sub-heading">Explore Our Volunteer Options</h2>
          </div>
          <HomeNumbered2 />
        </section>
        <section className="app-color--dark">
          <div className="split-section gap-6 px-6 py-24 lg:px-10">
            <div className="general-section-container heading-underline">
              <h1 className="heading-section app-color--light">
                Why volunteer
              </h1>
              <h2 className="sub-heading">
                Empower Change with <br />
                Open Fresno
              </h2>
            </div>
            <div className="general-section-container">
              <p className="section-paragraph">
                <b>Ready to make a difference? </b>
                Join us at Open Fresno and use your skills to drive positive
                change through technology and collaboration.
                <b>
                  {" "}
                  Whether you&apos;re a designer, developer, or anyone eager to
                  volunteer, together we&apos;re enhancing community services,
                  amplifying voices, and giving you the opportunity to improve
                  your resume and portfolio.
                </b>{" "}
                It&apos;s a journey of innovation and empowerment waiting for
                you. Your impact starts{" "}
                <Link
                  href="/get-started"
                  className="underline underline-offset-4"
                >
                  <b>here!</b>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="general-section-dark home-projects-section">
          <div className="home-projects-info-container">
            <div className="home-section-dark-container heading-underline underline-alt">
              <h1 className="general-heading-section general-heading-section-alt">
                our projects
              </h1>
              <h2 className="heading-large-section-sub h3-semi-bold lg:h1-semi-bold">
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
              className="btn btn--grow"
              textContent="Find Projects"
            />
          </div>
          <div className="test">
            <Slider className="navigation-wrapper">
              <div className="keen-slider__slide">
                <div className="slide-content">
                  <h2 className="sub-heading">Learning Blocks</h2>
                  <p className="home-section-dark-paragraph p3-regular lg:subheading-medium-regular">
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
                  <p className="home-section-dark-paragraph p3-regular lg:subheading-medium-regular">
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
                  <p className="home-section-dark-paragraph p3-regular lg:subheading-medium-regular">
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
            <h1 className="heading-large-section-sub h3-semi-bold lg:h1-semi-bold">
              Our Collaborations and Partnerships
            </h1>
          </div>
          <p className="home-numbered-paragraph p3-regular-partnerships">
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
            <h1 className="heading-large-section-sub h3-semi-bold lg:h1-semi-bold">
              Help Support Open Fresno
            </h1>
          </div>
          <div className="donate-section-paragraph-container">
            <p className="home-section-dark-paragraph p3-regular lg:subheading-medium-regular">
              <span className="home-section-dark-paragraph p3-regular lg:subheading-medium-regular-bold">
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
                className="btn btn-alt btn-alt--transition"
                textContent="Get Started"
              />
              <Button
                href="/donate"
                className="btn btn--grow"
                textContent="Donate"
              />
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
