import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import Link from "next/link";
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
   * Allows for easily accessing any level of a nested object.
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
    curAscending,
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
        (project) => project.meta.project_status === projectFilter,
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
      (a, b) => (curAscending ? 1 : -1) * sortFunction(a, b),
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
    if (e.target.value === sortBy) {
      updateProjectsData(search, filter, sortBy, !ascending);
      setAscending(!ascending);
    }
  };

  return (
    <section
      className={`mx-auto mb-8 max-w-[calc(var(--screen-xxl)+80px)] px-4 lg:px-8`}
    >
      <form
        className={`flex w-full flex-col gap-4 lg:flex-row lg:gap-8`}
        action={() => {}}
      >
        <div className={`form-control grow-3 basis-0 max-lg:w-full`}>
          <label
            id="project-search-label"
            htmlFor="project-search"
            className="form-control-label min-h-[1.4375em] min-w-px"
          >
            {" "}
          </label>
          <div className="form-search-wrapper">
            <input
              id="project-search"
              className="form-outlined-input"
              name="project-search"
              type="search"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
            <button
              className="form-search-btn"
              aria-label="search"
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              <BasePathImage
                src="/img/form-element/search.svg"
                alt="Search icon"
                width={24}
                height={24}
              />
            </button>
          </div>
          <Link href="" className="relative -left-7 inline-block"></Link>
        </div>
        <div className={`form-control grow basis-0 max-lg:w-full`}>
          <label
            id="project-filter-label"
            htmlFor="project-filter"
            className="form-control-label"
          >
            Filter
          </label>
          <select
            className="form-select"
            id="project-filter"
            name="project-filter"
            defaultValue="all"
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div className={`form-control grow basis-0 max-lg:w-full`}>
          <label
            id="project-sort-by-label"
            htmlFor="project-sort-by"
            className="form-control-label"
          >
            Sort By
          </label>
          <select
            className="form-select"
            id="project-sort-by"
            name="project-sort-by"
            defaultValue="created_at"
            onChange={(e) => {
              handleChange(e);
              handleSortClick(e);
            }}
          >
            <option value="created_at">Creation Date</option>
            <option value="updated_at">Last Updated</option>
            <option value="meta,title">Name</option>
          </select>
          <span className="form-helper-text">
            {ascending ? "Ascending" : "Descending"}
          </span>
        </div>
      </form>
    </section>
  );
};

export default ProjectSearch;
