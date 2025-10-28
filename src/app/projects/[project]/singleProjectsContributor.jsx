import LinedSection from "@/components/ui/LinedSection";

import { titleCase } from "@/utility/string";

export default function SingleProjectsContributor({ data, role, sectionType }) {
  return (
    <LinedSection
      title={titleCase(role.replaceAll("_", " "))}
      sectionType={sectionType}
      lines={Object.entries(data.meta.contributing[role])
        .filter(([k, _]) => k !== "description")
        .map(([k, v]) => [titleCase(k.replaceAll("_", " ")), v])}
    >
      <p className="paragraph-large">
        {data.meta.contributing[role].description}
      </p>
    </LinedSection>
  );
}
