import FormattedObject from "@/components/ui/FormattedObject";
import { SectionType } from "@/utility/constants/theme";
import { titleCase } from "@/utility/string";

export default function SingleProjectsBrief({
  data,
  sectionType = SectionType.light,
}) {
  const trimList = [
    "project_status",
    "resources",
    "roadmap",
    "screenshots",
    "tags",
    "contributing",
  ];
  const titleCaseList = ["project_type"];
  const concatLists = [["communications", "channels"]];
  const toConcatList = concatLists.flat();
  let meta = {};
  Object.keys(data.meta).forEach((key) => {
    if (trimList.indexOf(key) === -1) {
      if (toConcatList.indexOf(key) === -1) {
        if (titleCaseList.indexOf(key) === -1) {
          meta[key] = data.meta[key];
        } else {
          meta[key] = titleCase(data.meta[key]);
        }
      } else {
        for (let concatList of concatLists) {
          if (concatList.indexOf(key) === -1) continue;
          let [a, b] = concatList;
          if (data.meta[a] && data.meta[b]) {
            meta[a + "\\n" + b] = (
              <>
                {data.meta[a]}
                <br />
                {data.meta[b]}
              </>
            );
          } else {
            meta[key] = data.meta[key];
          }
          break;
        }
      }
    }
  });
  return (
    <FormattedObject
      obj={meta}
      title={"Project Brief"}
      sectionType={sectionType}
    />
  );
}
