import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";

export function SectionLine({ title = "", children = <></> }) {
  return (
    <>
      <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-500`} />
      <div className={`flex flex-col lg:flex-row`}>
        <div className={`grow-1 font-bold max-lg:mb-2 basis-0`}>{title}</div>
        <div className={`grow-2 basis-0`}>{children}</div>
      </div>
    </>
  );
}

/**
 *
 * @param sectionType
 * @param {Object} [props]
 * @param {string} [props.title]
 * @param {JSX.Element} [props.children]
 * @param {[string,string][]} [props.lines]
 * @param {SectionType} [props.sectionType] The SectionType to modify display styling
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinedSection({
                                       title = "",
                                       children = <></>,
                                       lines = null,
                                       sectionType = SectionType.light
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
          <SectionLine title={line[0]} key={line[0] + i}>
            {line[1]}
          </SectionLine>
        ))
        : ""}
    </PageContainer>
  );
}
