import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@mui/material";

import Link from "next/link";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { useState } from "react";

/**
 * Projects search section.
 * @returns {JSX.Element}
 */

const ProjectSearch = ({ data, setProjectsData }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at");
  const [ascending, setAscending] = useState(true);

  /**
   * Allows for easily accessing any level of a nested objects.
   * Usage: data.meta.obj1.obj2 is accessed with browseObject(data, ["meta", "obj1", "obj2"])
   *  or, the intended use for this function, is browseObject(data, selectInput.split(,))
   * @param {object} [obj] The object to browse.
   * @param {[string]} [keys] The name of the keys to browse within the object.
   * @returns {object}
   */
  const browseObject = (obj, keys) => {
    for (let key of keys) {
      obj = obj[key];
    }
    return obj;
  };

  const updateProjectsData = (
    projectSearch,
    projectFilter,
    projectSortBy,
    curAscending
  ) => {
    if (!data || !setProjectsData) return;
    projectSearch = projectSearch ? projectSearch.toLowerCase() : "";
    let filteredProjects = data;

    if (projectSearch) {
      filteredProjects = filteredProjects.filter((project) =>
        project.meta.title.toLowerCase().includes(projectSearch),
      );
    }

    if (projectFilter !== "all") {
      filteredProjects = filteredProjects.filter(
        (project) => project.meta.project_status === projectFilter
      );
    }

    let sortFunction;
    switch (projectSortBy) {
      //dates
      case "created_at":
      case "updated_at":
        sortFunction = (a, b) =>
          new Date(b[projectSortBy]) - new Date(a[projectSortBy]);
        break;
      //strings
      default:
        let keys = projectSortBy.split(",");
        sortFunction = (a, b) => {
          browseObject(b, keys).localeCompare(browseObject(a, keys));
        };
    }
    filteredProjects = filteredProjects.sort(
      (a, b) => (curAscending ? 1 : -1) * sortFunction(a, b)
    );
    setProjectsData([...filteredProjects]);
  };

  const handleChange = (e) => {
    let cutName = e.target.name.replace("project-", "");
    switch (cutName) {
      case "search":
        setSearch(e.target.value);
        updateProjectsData(e.target.value, filter, sortBy, ascending);
        break;
      case "filter":
        setFilter(e.target.value);
        updateProjectsData(search, e.target.value, sortBy, ascending);
        break;
      case "sort-by":
        setSortBy(e.target.value);
        updateProjectsData(search, filter, e.target.value, ascending);
        break;
    }
  };

  const handleSortClick = (e) => {
    if (e.target.dataset.value === sortBy) {
      updateProjectsData(search, filter, sortBy, !ascending);
      setAscending(!ascending);
    }
  };

  return (
    <section
      className={`mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] mb-8 px-4 lg:px-8`}
    >
      <form
        className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-8`}
        action={() => {
        }}
      >
        <div className={`max-lg:w-full grow-3 basis-0`}>
          <InputLabel
            id="project-search-label"
            className="min-w-px min-h-[1.4375em]"
          >
            {" "}
          </InputLabel>
          <OutlinedInput
            className={`w-full`}
            name="project-search"
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  type="submit"
                  onClick={() => {
                  }}
                >
                  <BasePathImage
                    src="/img/form-element/search.svg"
                    alt="Search icon."
                  />
                </IconButton>
              </InputAdornment>
            }
          />
          <Link href="" className="relative inline-block -left-7"></Link>
        </div>
        <div className={`max-lg:w-full form-row grow-1 basis-0`}>
          <InputLabel id="project-filter-label">Filter</InputLabel>
          <Select
            variant="outlined"
            className="w-full"
            name="project-filter"
            label="Filter"
            defaultValue="all"
            native={false}
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
          </Select>
        </div>
        <div className={`max-lg:w-full form-row grow-1 basis-0`}>
          <InputLabel id="project-sort-by-label">Sort By</InputLabel>
          <Select
            variant="outlined"
            className="w-full"
            name="project-sort-by"
            label={"Sort By"}
            defaultValue="created_at"
            native={false}
            onChange={handleChange}
          >
            <MenuItem value="created_at" onClick={handleSortClick}>
              Creation Date
            </MenuItem>
            <MenuItem value="updated_at" onClick={handleSortClick}>
              Last Updated
            </MenuItem>
            <MenuItem value="meta,title" onClick={handleSortClick}>
              Name
            </MenuItem>
          </Select>
          <FormHelperText>
            {ascending ? "Ascending" : "Descending"}
          </FormHelperText>
        </div>
      </form>
    </section>
  );
};

export default ProjectSearch;
