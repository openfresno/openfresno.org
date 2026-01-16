import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

export function SectionLine({ title = <></>, children = <></> }) {
  return (
    <>
      <hr className={`mt-6 mb-2 h-px border-0 bg-neutral-500 lg:my-6`} />
      <div className={`flex flex-col lg:flex-row`}>
        <div className={`grow basis-0 font-bold max-lg:mb-2`}>{title}</div>
        <div className={`grow-2 basis-0`}>{children}</div>
      </div>
    </>
  );
}

/**
 * Lined section component.
 * @param sectionType
 * @param {Object} [props]
 * @param {JSX.Element} [props.title]
 * @param {JSX.Element} [props.children]
 * @param {[string,string][]} [props.lines]
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @returns {JSX.Element}
 * @component
 * @constructor
 */
export default function LinedSection({
  title = <></>,
  children = <></>,
  lines = null,
  sectionType = SectionType.light,
}) {
  return (
    <PageContainer sectionType={sectionType}>
      <h2 className={`sub-heading-main`}>{title}</h2>
      <div
        className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`}
      />
      {children ? children : ""}
      {lines
        ? lines.map((line, i) => (
            <SectionLine
              title={titleCase(line[0], /\\n|\n/, null).reduce((acc, x) =>
                acc === null ? (
                  x
                ) : (
                  <>
                    {acc}
                    <br />
                    {x}
                  </>
                ),
              )}
              key={line[0] + i}
            >
              {line[1]}
            </SectionLine>
          ))
        : ""}
    </PageContainer>
  );
}
