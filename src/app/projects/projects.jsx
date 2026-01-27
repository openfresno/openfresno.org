"use client";
import { fetchGithubProjectData } from "./github";
import ProjectSearch from "@/app/projects/projectSearch";
import ProjectsCardsContainer from "@/app/projects/projectsCardsContainer";
import ProjectsSectionStart from "@/app/projects/projectsSectionStart";
import { SectionType } from "@/utility/constants/theme";
import { jsonResponse } from "@/utility/response";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args)
    .then(jsonResponse)
    .then(fetchGithubProjectData);

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function Projects({ githubOwner }) {
  const [projectsData, setProjectsData] = useState([]);
  const [prevData, setPrevData] = useState(null);

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (data && data !== prevData) {
    setPrevData(data);
    setProjectsData(
      data.toSorted((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
    );
  }

  return (
    <div className={`projects-main`}>
      <ProjectsSectionStart sectionType={SectionType.light} />
      <ProjectSearch data={data} setProjectsData={setProjectsData} />
      <ProjectsCardsContainer
        error={error}
        isLoading={isLoading}
        projectsData={projectsData}
        sectionType={SectionType.light}
      />
    </div>
  );
}
