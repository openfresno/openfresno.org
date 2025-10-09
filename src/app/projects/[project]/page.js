import { githubOwner } from "../../../utility/constants/app-data";
import SingleProject from "./singleProject";
import NavbarE7e from "../../../components/layout/NavbarE7e";
// import MarginTop from "../../../components/layout/MarginTop";
import FooterE4d from "../../../components/layout/FooterE4d";

// See https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  // const ghResponses = await fetch(
  //   `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
  // ).then((res) => res.json());

  // return ghResponses.map((ghResponse) => ({
  //   project: ghResponse.name,
  // }));
  return [
    { project: "project1" },
    { project: "project2" },
    { project: "project3" },
  ];
}

export default function Page({ params }) {
  return (
    <>
      <NavbarE7e fade={false} />
      {/* <MarginTop /> */}
      <SingleProject
        githubFullName={`${githubOwner}/${params.project}`}
      ></SingleProject>
      <FooterE4d />
    </>
  );
}
