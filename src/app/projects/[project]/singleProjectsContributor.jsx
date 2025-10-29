import FormattedObject from "@/components/ui/FormattedObject";

export default function SingleProjectsContributor({ data, role, sectionType }) {
  return (
    <FormattedObject
      sectionType={sectionType}
      obj={data.meta.contributing[role]}
    />
  );
}
