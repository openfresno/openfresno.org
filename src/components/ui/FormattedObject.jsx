import LinedSection from "@/components/ui/LinedSection";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

/**
 *
 * @component
 * @param {object} props
 * @param {object} [props.obj] An object with special properties "title" for titling and "description" to describe the object.
 * @param {string} [props.title] The title to display. Defaults to [obj.title]
 * @param {SectionType} [props.sectionType]
 * @returns {JSX.Element}
 * @constructor
 */
export default function FormattedObject({
  obj = { title: "" },
  title = obj.title,
  sectionType = SectionType.light,
}) {
  return (
    <LinedSection
      title={title}
      sectionType={sectionType}
      lines={Object.entries(obj)
        .filter(([k, _]) => k !== "description" && k !== "title")
        .map(([k, v]) => [titleCase(k.replaceAll("_", " ")), v])}
    >
      <p className="paragraph-large">{obj.description}</p>
    </LinedSection>
  );
}
