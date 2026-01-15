import { Button } from "../../../components/ui";
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
      <h2 className={`sub-heading-main`}>How to Contribute</h2>
      <div
        className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`}
      />
      <p className={`project-paragraph my-4 lg:w-[50%]`}>
        Open Fresno is run by volunteers. We are always looking for help.
        Explore the various ways you can make a difference.
      </p>
      <h4 className={`project-info-label mb-2 font-semibold`}>
        Get Involved As
      </h4>
      <div className={`flex flex-wrap gap-4`}>
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
