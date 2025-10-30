import LinedSection from "@/components/ui/LinedSection";
import { titleCase } from "@/utility/string";

/**
 *
 * @component
 * @param {object} props
 * @param {object} [props.obj] An object with special properties "title" for titling and "description" to describe the object.
 * @param {SectionType} [props.sectionType]
 * @returns {JSX.Element}
 * @constructor
 */
export default function FormattedObject({ obj, sectionType }) {
  return (
    <LinedSection
      title={obj.title}
      sectionType={sectionType}
      lines={Object.entries(obj)
        .filter(([k, _]) => k !== "description" && k !== "title")
        .map(([k, v]) => [titleCase(k.replaceAll("_", " ")), v])}
    >
      <p className="paragraph-large">{obj.description}</p>
    </LinedSection>
  );
}
