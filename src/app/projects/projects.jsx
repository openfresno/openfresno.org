"use client";
import { useEffect, useState } from "react";
import ProjectsCardsContainer from "@/app/projects/projectsCardsContainer";
import ProjectsSectionStart from "@/app/projects/projectsSectionStart";
import ProjectSearch from "@/app/projects/projectSearch";
import { jsonResponse } from "@/utility/response";
import useSWR from "swr";
import { fetchGithubProjectData } from "./github";
import { SectionType } from "@/utility/constants/theme"

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

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/orgs/${githubOwner}/repos?per_page=20&sort=updated&direction=desc`,
    fetcher,
    { shouldRetryOnError: false }, // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  useEffect(() => {
    if (data) {
      setProjectsData(
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
      );
    }
  }, [data]);

  return (
    <>
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
    </>
  );
}
