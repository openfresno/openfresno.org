import Link from "next/link";
import HeadingPair from "@/components/ui/HeadingPair";
import CenteredInImage from "@/components/ui/CenteredInImage";
import { SectionType } from "@/utility/constants/theme";
import { HeaderUnderline } from "@/components/ui";

/**
 * Instructions for project page.
 * @returns {JSX.Element}
 */
export default function SingleProjectsVolunteer({
                                                  sectionType,
                                                }) {
  return (
    <section id="project-section-start" className={`py-6 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col lg:flex-row lg:gap-[20%]`}>
        <div className={`project-volunteer-info-container grow-2 basis-0 max-lg:mb-12`}>
          <HeaderUnderline
            title={"Volunteer"}
            description={"Why Join Open Fresno?"}
            sectionType={sectionType}
          >
            <span className={`text-md`}>
            Join us at Open Fresno to collaborate on impactful civic tech projects
            and connect with a diverse community of like-minded individuals.
            It&apos;s a rewarding way to make a meaningful difference in our city.
            </span>
          </HeaderUnderline>
        </div>
        <div className={`get-started-bottom grow-1 basis-0`}>
          <CenteredInImage
            src="/img/about/rectangle-blue.png"
            alt="rectangle"
            float="center"
          >
            <div className="w-fit mx-auto font text-3xl font-bold">
              <span className={`app-text--${SectionType.invert(sectionType)}`}>Not a volunteer yet?</span>
              <br />
              <Link href="/get-started" className="underline">Get Started</Link>
            </div>
          </CenteredInImage>
        </div>
      </div>
    </section>
  );
}
