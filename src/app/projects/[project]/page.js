import { githubOwner } from "../../../utility/constants/app-data";
import SingleProject from "./singleProject";
import NavbarE7e from "../../../components/layout/NavbarE7e";
// import MarginTop from "../../../components/layout/MarginTop";
import FooterE4d from "../../../components/layout/FooterE4d";
import LayoutE53 from "@/components/layout/LayoutE53";
import { SectionType } from "@/utility/constants/theme";

// See https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const ghResponses = await fetch(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=21&sort=updated&direction=desc`,
  ).then((res) => res.json());

  return ghResponses.map((ghResponse) => ({
    project: ghResponse.name,
  }));
  /*
  return [
    { project: "project1" },
    { project: "project2" },
    { project: "project3" },
  ];
   */
}

export default async function Page({ params }) {
  return (
    <LayoutE53>
      <SingleProject
        githubFullName={`${githubOwner}/${(await params).project}`}
        sectionType={SectionType.light}
      ></SingleProject>
    </LayoutE53>
  );
}
