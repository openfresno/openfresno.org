/**
 * Projects search section.
 * @returns {JSX.Element}
 */

const ProjectSearch = ({ data, setProjectsData }) => {
  const search = (formData) => {
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
    <div className={`project-search-section`}>
      <form className={`project-search-form`} action={search}>
        <div className={`form-row project-search-row`}>
          <input
            className={`projectSearch`}
            name="project-search"
            type="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <img src="/img/form-element/search.svg" alt="Search icon." />
        </div>
        <div className={`select-container`}>
          <div className={`form-row`}>
            <label htmlFor="project-filter">Filter</label>
            <select
              name="project-filter"
              id="project-filter"
              defaultValue="all"
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
            </select>
          </div>
          <div className={`form-row`}>
            <label htmlFor="project-sort-by">Sort By</label>
            <select
              name="project-sort-by"
              id="project-sort-by"
              onChange={handleChange}
            >
              <option value="created_at">Most Recent</option>
              <option value="updated_at">Last Updated</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectSearch;
