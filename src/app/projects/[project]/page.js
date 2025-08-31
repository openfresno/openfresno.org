import {githubOwner} from "../../../utils/constants/app-data";
import SingleProject from "./singleProject";
import AppNavbar from "../../../components/layout/AppNavbar";
import MarginTop from "../../../components/layout/MarginTop";
import AppFooter from "../../../components/layout/AppFooter";

// See https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const ghResponses = await fetch(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
  ).then((res) => res.json());

  return ghResponses.map((ghResponse) => ({
    project: ghResponse.name,
  }));
}

export default function Page({params}) {
  return (
    <>
      <AppNavbar fade={false}/>
      <MarginTop/>
      <SingleProject
        githubFullName={`${githubOwner}/${params.project}`}
      ></SingleProject>
      <AppFooter/>
    </>
  );
}
