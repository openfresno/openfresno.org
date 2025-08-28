import moment from "moment";
import Button from "../../../components/ui/buttons";

/**
 * Single project start section.
 *
 * @returns {JSX.Element}
 */
export default function SingleProjectsSectionStart({ data }) {
  return (
    <section id="project-section-start" className={`project-section-start`}>
      <div
        className={`project-main-image`}
        style={{
          backgroundImage: `url(https://raw.githubusercontent.com/${data.full_name}/main/${data.meta.image_url})`,
        }}
      ></div>
      <div className={`project-main-info-container`}>
        <div
          className={`project-main-heading-container heading-underline underline-alt`}
        >
          <span className={`project-type`}>{data.meta.project_type}</span>
          <h1 className={`project-heading mb-2`}>{data.meta.title}</h1>
        </div>
        <span className={`project-status-label upper-first`}>
          Project Status: {data.meta.project_status}
        </span>
        <p className={`project-paragraph`}>{data.meta.description}</p>
        <p className={`project-paragraph`}>
          Last Updated:{" "}
          {`${moment(data.updated_at).format("ddd MMM D, H:mma")}`}
        </p>
        <div className={`project-button-container`}>
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
    </section>
  );
}
