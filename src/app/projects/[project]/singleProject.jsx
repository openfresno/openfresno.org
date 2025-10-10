"use client";
import { jsonResponse } from "@/utility/response";
import useSWR from "swr";
import { fetchGithubSingleProject } from "../github";

import SingleProjectsSectionStart from "./singleProjectsSectionStart";
import SingleProjectsLinks from "./singleProjectsLinks";
import SingleProjectsBrief from "./singleProjectsBrief";
import SingleProjectsScreenshots from "./singleProjectsScreenshots";
import SingleProjectsRoadmap from "./singleProjectsRoadmap";
import SingleProjectsContribute from "./singleProjectsContribute";
import SingleProjectsDeveloper from "./singleProjectsDeveloper";
import SingleProjectsDesigner from "./singleProjectsDesigner";
import SingleProjectsOther from "./singleProjectsOther";
import SingleProjectsResources from "./singleProjectsResources";
import SingleProjectsVolunteer from "./singleProjectsVolunteer";
import { useState } from "react";
import { SectionType } from "@/utility/constants/theme"

const fetcher = (...args) =>
  fetch(...args)
    .then(jsonResponse)
    .then(fetchGithubSingleProject);

/**
 * Page for displaying a single project
 *
 * @returns {JSX.Element}
 */
export default function SingleProject({ githubFullName }) {
  const [contributeAs, setContributeAs] = useState("developer");

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${githubFullName}`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className={`project-section-${SectionType.dark}`}>
      <SingleProjectsSectionStart sectionType={SectionType.dark} data={data} />
      <SingleProjectsLinks sectionType={SectionType.dark} />
      <SingleProjectsBrief sectionType={SectionType.dark} data={data} />
      <SingleProjectsScreenshots sectionType={SectionType.dark} data={data} />
      <SingleProjectsRoadmap sectionType={SectionType.dark} data={data} />
      <SingleProjectsContribute
        sectionType={SectionType.dark}
        contributeAs={contributeAs}
        setContributeAs={setContributeAs}
      />
      {contributeAs === "developer" ? (
        <SingleProjectsDeveloper sectionType={SectionType.dark} data={data} />
      ) : contributeAs === "designer" ? (
        <SingleProjectsDesigner sectionType={SectionType.dark} data={data} />
      ) : (
        <SingleProjectsOther sectionType={SectionType.dark} data={data} />
      )}
      <SingleProjectsResources sectionType={SectionType.dark} data={data} />
      <SingleProjectsVolunteer sectionType={SectionType.dark} data={data} />
    </div>
  );
}
