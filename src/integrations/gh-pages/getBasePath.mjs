/**
 * Get a relative base path for the website assets when deploying to a fork on GitHub Pages. This only affects forks. Even if it is not configured properly, images will still work correctly in development and production (empty string base path).
 *
 * This file must have a .mjs because it is used in next.config.mjs.
 *
 * ### **Important!** Set environment variables in the "Build with Next.js" step in GitHub Actions.
 *
 * - GITHUB_ACTIONS: Whether the app is running in a GitHub Actions environment.
 * - GITHUB_REPOSITORY: The repository name in the format "owner/repo".
 *
 * ### Example base paths.
 *
 * - **If it is a fork:** fe-openfresno.org-doc.
 * - **If it is the main repository:** Empty string.
 * - **Custom domain:** Empty string.
 * - **Local development:** Empty string.
 *
 * @param {boolean} repositoryCustomDomain - Whether the main repository uses a custom domain. If true, the base path will be an empty string.
 * @param {string} repositoryName - The name of the main repository, in the format "owner/repo".
 * @returns {string} - The base path of the website URL.
 */
export default function getBasePath(
  repositoryCustomDomain = false,
  repositoryName = "openfresno/openfresno.org",
) {
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  const isMainRepo = process.env.GITHUB_REPOSITORY === repositoryName;
  if (isGitHubActions) {
    if (isMainRepo && repositoryCustomDomain) {
      return "";
    } else {
      // Use the actual GITHUB_REPOSITORY for the basePath, not the hardcoded repositoryName
      return `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
    }
  } else {
    return "";
  }
}
