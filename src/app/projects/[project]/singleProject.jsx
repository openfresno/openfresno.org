"use client";
import { fetchGithubSingleProject } from "../github";
import SingleProjectsBrief from "./singleProjectsBrief";
import SingleProjectsContribute from "./singleProjectsContribute";
import SingleProjectsLinks from "./singleProjectsLinks";
import SingleProjectsResources from "./singleProjectsResources";
import SingleProjectsRoadmap from "./singleProjectsRoadmap";
import SingleProjectsScreenshots from "./singleProjectsScreenshots";
import SingleProjectsSectionStart from "./singleProjectsSectionStart";
import SingleProjectsVolunteer from "./singleProjectsVolunteer";
import SingleProjectsContributor from "@/app/projects/[project]/singleProjectsContributor";
import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import { jsonResponse } from "@/utility/response";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args)
    .then(jsonResponse)
    .then(fetchGithubSingleProject);

/**
 * Page for displaying a single project
 *
 * @returns {JSX.Element}
 */
export default function SingleProject({
  githubFullName,
  sectionType = SectionType.light,
}) {
  const [contributeAs, setContributeAs] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${githubFullName}`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (data && !contributeAs && data.meta.contributing) {
    const keys = Object.keys(data.meta.contributing);
    if (keys.length > 0) setContributeAs(keys[0]);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <SingleProjectsSectionStart sectionType={sectionType} data={data} />
      <SingleProjectsLinks sectionType={sectionType} />
      <SingleProjectsBrief sectionType={sectionType} data={data} />
      <PageContainer noFlex noPadding sectionType={sectionType}>
        <hr className={`mt-6 mb-2 h-px border-0 bg-neutral-400 lg:my-6`} />
      </PageContainer>
      {data.meta.screenshots ? (
        <SingleProjectsScreenshots sectionType={sectionType} data={data} />
      ) : null}
      {data.meta.roadmap ? (
        <SingleProjectsRoadmap
          sectionType={SectionType.invert(sectionType)}
          data={data}
        />
      ) : null}
      {contributeAs !== "" ? (
        <>
          <SingleProjectsContribute
            data={data}
            sectionType={sectionType}
            contributeAs={contributeAs}
            setContributeAs={setContributeAs}
          />
          <SingleProjectsContributor
            data={data}
            role={contributeAs}
            sectionType={sectionType}
          />
        </>
      ) : null}
      {data.meta.resources ? (
        <SingleProjectsResources sectionType={sectionType} data={data} />
      ) : null}
      <SingleProjectsVolunteer
        sectionType={SectionType.invert(sectionType)}
        data={data}
      />
    </>
  );
}
