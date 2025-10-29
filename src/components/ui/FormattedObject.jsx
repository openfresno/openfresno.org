import LinedSection from "@/components/ui/LinedSection";
import {titleCase} from "@/utility/string";

export default function FormattedObject({
    obj,
    sectionType,
}){
  return(
    <LinedSection
      title={obj.title}
      sectionType={sectionType}
      lines={Object.entries(obj)
        .filter(([k, _]) => k !== "description" && k!== "title")
        .map(([k, v]) => [titleCase(k.replaceAll("_", " ")), v])}
    >
      <p className="paragraph-large">
        {obj.description}
      </p>
    </LinedSection>
  )
}