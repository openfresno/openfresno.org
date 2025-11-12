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
import SingleProjectsResources from "./singleProjectsResources";
import SingleProjectsVolunteer from "./singleProjectsVolunteer";
import { useState } from "react";
import { SectionType } from "@/utility/constants/theme";
import SingleProjectsContributor from "@/app/projects/[project]/singleProjectsContributor";
import PageContainer from "@/components/ui/PageContainer";


/**
 * Page for displaying a single project
 *
 * @returns {JSX.Element}
 */
export default function SingleProject({
                                        githubFullName,
                                        sectionType = SectionType.light
                                      }) {
  const [contributeAs, setContributeAs] = useState("");
  const fetcher = (...args) =>
    fetch(...args)
      .then(jsonResponse)
      .then(fetchGithubSingleProject)
      .then((data) => {
        if (data.meta.contributing) {
          let keys = Object.keys(data.meta.contributing);
          if (keys.length > 0) setContributeAs(keys[0]);
        }
        return data;
      });

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${githubFullName}`,
    fetcher,
    { shouldRetryOnError: false } // Auto retries quickly exhaust unauthenticated api requests to GitHub, which breaks the page
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <SingleProjectsSectionStart sectionType={sectionType} data={data} />
      <SingleProjectsLinks sectionType={sectionType} />
      <SingleProjectsBrief sectionType={sectionType} data={data} />
      <PageContainer noFlex noPadding sectionType={sectionType}>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-400`} />
      </PageContainer>
      {
        data.meta.screenshots ? (
          <SingleProjectsScreenshots sectionType={sectionType} data={data} />
        ) : ""
      }
      {
        data.meta.roadmap ? (
          <SingleProjectsRoadmap
            sectionType={SectionType.invert(sectionType)}
            data={data}
          />
        ) : ""
      }
      {
        contributeAs !== "" ? (
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
        ) : ""
      }
      {
        data.meta.resources ? (
          <SingleProjectsResources sectionType={sectionType} data={data} />
        ) : ""
      }
      <PageContainer noFlex className="max-lg:hidden" sectionType={sectionType}>
        <hr className={`mt-6 mb-2 lg:my-6 border-0 h-px bg-neutral-400`} />
      </PageContainer>
      <SingleProjectsVolunteer
        sectionType={SectionType.invert(sectionType)}
        data={data}
      />
    </>
  );
}
