import Button from "../../../components/ui/button/Button";
import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

export default function SingleProjectsContribute({
  data,
  contributeAs,
  setContributeAs,
  sectionType,
}) {
  return (
    <PageContainer sectionType={sectionType}>
      <h2 className="sub-heading-main">How to Contribute</h2>
      <div className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`} />
      <p className="single-project-contribute-text project-paragraph">
        Open Fresno is run by volunteers. We are always looking for help. Explore the various ways
        you can make a difference.
      </p>
      <h4 className="single-project-contribute-label project-info-label">Get Involved As</h4>
      <div className="single-project-contribute-buttons">
        {Object.keys(data.meta.contributing).map((role, i) => (
          <Button
            key={role + i}
            className={`btn cursor-pointer ${contributeAs === role ? "btn-gold" : "btn-alt-gold"}`}
            onClick={() => setContributeAs(role)}
            textContent={titleCase(role.replaceAll("_", " "))}
          />
        ))}
      </div>
    </PageContainer>
  );
}
