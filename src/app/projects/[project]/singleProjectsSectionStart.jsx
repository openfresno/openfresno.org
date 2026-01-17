import Button from "../../../components/ui/button/Button";
import HeadingPair from "@/components/ui/HeadingPair";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";
import moment from "moment";

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
    <section
      id="project-section-start"
      className={`py-12 lg:py-24 app-color--${sectionType}`}
    >
      <div className={`page-container flex flex-col lg:flex-row-reverse`}>
        <div className={`w-fit lg:ml-8 lg:min-w-[60%]`}>
          <BasePathImage
            alt={data.meta.title}
            className={`border rounded-xl`}
            src={
              data.meta.image_url
                ? `https://raw.githubusercontent.com/${data.full_name}/${data.default_branch}/${data.meta.image_url}`
                : data.meta.screenshots
                  ? `https://raw.githubusercontent.com/${data.full_name}/${data.default_branch}/screenshots/${data.meta.screenshots[0]}`
                  : ""
            }
            width={800}
            height={457}
          />
        </div>
        <div className={`max-lg:mt-6`}>
          <HeadingPair
            heading={data.meta.project_type}
            subHeading={data.meta.title}
          />
          <div className={`btn-alt my-4 w-fit rounded-md border p-1`}>
            Project Status: {titleCase(data.meta.project_status)}
          </div>
          <p className={`project-paragraph`}>{data.meta.description}</p>
          <p className={`project-paragraph app-text--gray my-4`}>
            Last Updated:{" "}
            {`${moment(data.updated_at).format("ddd MMM D, H:mma")}`}
          </p>
          <div className={`flex flex-wrap gap-4`}>
            <Button
              className={"btn"}
              href={data.html_url}
              target={"_blank"}
              textContent={"View Source Code"}
            />
            <Button
              className={"btn"}
              href={"/get-started"}
              textContent={"Get Started"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
