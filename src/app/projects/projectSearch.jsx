import {
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import Link from "next/link";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

/**
 * Projects search section.
 * @returns {JSX.Element}
 */

const ProjectSearch = ({ data, setProjectsData }) => {
  const search = (formData) => {
    if (!data || !setProjectsData) return;
    const projectSearch = formData.get("project-search").toLowerCase();
    const projectFilter = formData.get("project-filter");
    const projectSortBy = formData.get("project-sort-by");
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

    filteredProjects = filteredProjects.sort(
      (a, b) => new Date(b[projectSortBy]) - new Date(a[projectSortBy]),
    );
    setProjectsData([...filteredProjects]);
  };

  const handleChange = (e) => {
    const formData = new FormData(e.target.form);
    search(formData);
  };

  return (
    <section
      className={`mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] mb-8 px-4 lg:px-8`}
    >
      <form
        className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-end`}
        action={search}
      >
        <div className={`max-lg:w-full grow-3 basis-0`}>
          <OutlinedInput
            className={`w-full`}
            name="project-search"
            type="search"
            placeholder="Search"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  type="submit"
                  onClick={() => {}}
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
            id="project-filter"
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
            id="project-sort-by"
            label={"Sort By"}
            defaultValue="created_at"
            native={false}
            onChange={handleChange}
          >
            <MenuItem value="created_at">Most Recent</MenuItem>
            <MenuItem value="updated_at">Last Updated</MenuItem>
          </Select>
        </div>
      </form>
    </section>
  );
};

export default ProjectSearch;
