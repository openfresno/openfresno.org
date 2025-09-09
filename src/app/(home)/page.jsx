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
            <h1 className="title">Welcome to Open Fresno</h1>
            <p className="paragraph-bold">
              Become a part of the transformation in Fresno and the Central
              Valley Area through technology and open data. Volunteer today for
              a brighter future!
            </p>
            <div className="space-x-5">
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
                width={418}
                height={397}
                alt="Ariel photo of downtown Fresno and the iconic Tower Theatre."
              />
            </div>
          </div>
        </header>
        <section className="app-color--dark py-12 lg:py-24">
          <div className="split-section gap-6">
            <div>
              <h1 className="heading-main app-color--light">Who we are</h1>
              <h2 className="sub-heading-main">
                Creating a Brighter Future Through Innovation and Technology.
              </h2>
            </div>
            <p className="paragraph-large">
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
        <section className="pt-12 lg:py-24">
          <div className="split-section lg:gap-6">
            <div>
              <h1 className="heading-main app-color--dark">What we do</h1>
              <h2 className="sub-heading-main">
                Building a Better Future For Fresno and the Central Valley Area
              </h2>
              <p className="paragraph-large pt-10">
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
                width={596}
                height={577}
                className="main-image z-10"
                src="/img/home/home2.png"
              />
              <Image
                alt="Star shape"
                width={294}
                height={308}
                className="star-image z-0"
                src="/img/home/star.svg"
              />
            </div>
          </div>
        </section>
        <section className="pb-8 lg:pb-18">
          <div className="mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] pe-6 lg:px-10">
            <div className="mb-24 hidden md:block">
              <h1 className="heading-main app-color--dark">Opportunities</h1>
              <h2 className="sub-heading-main">
                Explore Our Volunteer Options
              </h2>
            </div>
            <HomeNumbered2 className="" />
          </div>
        </section>
        <section className="app-color--dark py-12 lg:py-24">
          <div className="split-section gap-6">
            <div>
              <h1 className="heading-main app-color--light">Why volunteer</h1>
              <h2 className="sub-heading-main">
                Empower Change with <br />
                Open Fresno
              </h2>
            </div>
            <div>
              <p className="paragraph-large">
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
        <section className="pt-10 lg:py-24">
          <div className="page-container flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-2/5">
              <h1 className="heading-main app-color--dark">Our projects</h1>
              <h2 className="sub-heading-main">
                Driving Innovation Through Tech and Collaboration
              </h2>
              <p className="paragraph-large mb-10">
                We tackle tech projects addressing civic issues, enhancing
                services in Fresno. From open data initiatives to government
                services and community platforms,{" "}
                <b>our open-source tech and collaboration drive innovation</b>
                for transparent, efficient, engaged local governance.
              </p>
              <Link href="/projects" className="btn btn--grow">
                Find Projects
              </Link>
            </div>
            <Slider className="lg:w-3/5">
              <div className="keen-slider__slide">
                <div>
                  <h2 className="heading-medium">Learning Blocks</h2>
                  <p className="mt-4">
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
                <div>
                  <h2 className="heading-medium">TrashAI</h2>
                  <p className="mt-4">
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
                <div>
                  <h2 className="heading-medium">Open Budget Sac</h2>
                  <p className="mt-4">
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
        <section className="app-color--gray">
          <div className="page-container">
            <h1 className="title-semi-bold pt-12 lg:pt-16">
              Our Collaborations and Partnerships
            </h1>
            <p className="paragraph-large mt-10">
              We have had the privilege of working with a diverse array of
              companies, organizations, and government entities, some of which
              are showcased below.
            </p>
            <div className="mt-12 flex flex-col items-center gap-16 pb-20 sm:flex-row lg:mt-20">
              <Link href="https://opensac.org">
                <Image
                  src="/img/partnership-icons/cityofsacramento.png"
                  width={300}
                  height={73}
                  alt="Open Sacramento"
                />
              </Link>
              <Link href="https://rootaccess.org/">
                <Image
                  src="/img/partnership-icons/logo_dba_02.png"
                  width={137}
                  height={137}
                  alt="Root Access"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="app-color--dark py-16">
          <div className="split-section gap-6">
            <h1 className="title-semi-bold">
              Help
              <br />
              Support
              <br />
              Open Fresno
            </h1>
            <div>
              <p>
                Your support, whether through <b>donations or volunteering,</b>{" "}
                is instrumental in driving positive change with Open Fresno.
                <br />
                <br />
                <b>Donations fuel our technology</b>-driven initiatives that
                address civic challenges, enhance public services, and amplify
                community voices.
                <br />
                <br />{" "}
                <b>When you volunteer, you actively contribute your skills</b> –
                be it coding, designing, or any other expertise – to create
                tangible solutions that make a real impact.
                <br />
                <br />
                Together, we shape a better future for our city, amplifying
                voices, enhancing services, and driving innovation. Join us
                today and be a catalyst for lasting, community-driven
                transformation!
              </p>
              <div className="mt-10 space-x-5">
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
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
