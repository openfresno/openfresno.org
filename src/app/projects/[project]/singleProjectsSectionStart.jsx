import moment from "moment";
import { Button } from "../../../components/ui";
import { SectionType } from "@/utility/constants/theme";
import HeadingPair from "@/components/ui/HeadingPair";

import { titleCase } from "@/utility/string";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

/**
 * Single project start section.
 *
 * @returns {JSX.Element}
 */
export default function SingleProjectsSectionStart({
                                                     data,
                                                     sectionType = SectionType.light,
                                                   }) {
  return (
    <section id="project-section-start" className={`py-12 lg:py-24 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col lg:flex-row-reverse`}>
        <div
          className={`w-fit rounded-lg lg:ml-8 lg:min-w-[60%] border`}
        >
          <BasePathImage
            alt={data.meta.title}
            imgClassName={`aspect-2/1 object-cover rounded-xl w-full`}
            src={`https://raw.githubusercontent.com/${data.full_name}/main/${data.meta.image_url}`}
          />
        </div>
        <div className={`max-lg:mt-6`}>
          <HeadingPair
            heading={data.meta.project_type}
            subHeading={data.meta.title}
          />
          <div className="mt-2 h-1 w-10 bg-neutral-900"/>
          <div className={`btn-alt border p-1 rounded-md w-fit my-4`}>
            Project Status: {titleCase(data.meta.project_status)}
          </div>
          <p className={`project-paragraph`}>{data.meta.description}</p>
          <p className={`project-paragraph app-text--grey my-4`}>
            Last Updated:{" "}
            {`${moment(data.updated_at).format("ddd MMM D, H:mma")}`}
          </p>
          <div className={`flex flex-row gap-4 project-button-container`}>
            <Button
              className={"btn btn-gold"}
              href={data.html_url}
              target={"_blank"}
              textContent={"View Source Code"}
            />
            <Button
              className={"btn btn-gold"}
              href={"/get-started"}
              textContent={"Get Started"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
