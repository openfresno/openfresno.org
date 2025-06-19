# Project Folder Structure for the Open Fresno Website

## [Top-level files](https://nextjs.org/docs/getting-started/project-structure#top-level-files)

#### Next.js

- [`next.config.js`](https://nextjs.org/docs/app/api-reference/next-config-js) - Configuration file for Next.js
- [`package.json`](https://nextjs.org/docs/getting-started/installation#manual-installation) - Project dependencies and
  scripts
- [`instrumentation.ts`](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation) -
  OpenTelemetry and Instrumentation file
- [`middleware.ts`](https://nextjs.org/docs/app/building-your-application/routing/middleware) - Next.js request
  middleware
- [`.env`](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) - Environment
  variables
- [`.env.local`](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- Local environment variables
- [`.env.production`](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) -
  Production environment variables
- [`.env.development`](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) -
  Development environment variables
- [`.eslintrc.json`](https://nextjs.org/docs/app/building-your-application/configuring/eslint) - Configuration file for
  ESLint
- `.gitignore` - Git files and folders to ignore
- `next-env.d.ts` - TypeScript declaration file for Next.js
- `tsconfig.json` - Configuration file for TypeScript
- `jsconfig.json` - Configuration file for JavaScript

## [`app` Routing Conventions](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)

### [Routing Files](https://nextjs.org/docs/getting-started/project-structure#routing-files)

- [`layout`](https://nextjs.org/docs/app/api-reference/file-conventions/layout) **(`.js` `.jsx` `.tsx`)** - Layout
- [`page`](https://nextjs.org/docs/app/api-reference/file-conventions/page) **(`.js` `.jsx` `.tsx`)** - Page
- [`loading`](https://nextjs.org/docs/app/api-reference/file-conventions/loading) **(`.js` `.jsx` `.tsx`)** - Loading UI
- [`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) **(`.js` `.jsx` `.tsx`)** - Not
  found UI
- [`error`](https://nextjs.org/docs/app/api-reference/file-conventions/error) **(`.js` `.jsx` `.tsx`)** - Error UI
- [`global-error`](https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Global error UI
- [`route`](https://nextjs.org/docs/app/api-reference/file-conventions/route) **(`.js` `.ts`)** - API endpoint
- [`template`](https://nextjs.org/docs/app/api-reference/file-conventions/template) **(`.js` `.jsx` `.tsx`)** -
  Re-rendered layout
- [`default`](https://nextjs.org/docs/app/api-reference/file-conventions/default) **(`.js` `.jsx` `.tsx`)** - Parallel
  route fallback page

### [Nested Routes](https://nextjs.org/docs/getting-started/project-structure#nested-routes)

- [`folder`](https://nextjs.org/docs/app/building-your-application/routing#route-segments) - Route segment
- [`folder/folder`](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) - Nested route segment

### [Dynamic Routes](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes)

- [`[folder]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention) - Dynamic route
  segment
- [`[...folder]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments) -
  Catch-all route segment
- [
  `[[...folder]]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments) -
  Optional catch-all route segment

### [Route Groups and Private Folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders)

- [`(folder)`](https://nextjs.org/docs/app/building-your-application/routing/route-groups#convention) - Group routes
  without affecting routing
- [`_folder`](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders) - Opt folder and
  all child segments out of routing

### [Parallel and Intercepted Routes](https://nextjs.org/docs/getting-started/project-structure#parallel-and-intercepted-routes)

- [`@folder`](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#convention) - Named slot
- [`(.)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) -
  Intercept same level
- [`(..)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) -
  Intercept one level above
- [`(..)(..)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) -
  Intercept two levels above
- [`(...)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) -
  Intercept from root

### [Metadata File Conventions](https://nextjs.org/docs/getting-started/project-structure#metadata-file-conventions)

#### [App Icons](https://nextjs.org/docs/getting-started/project-structure#app-icons)

- [`favicon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon) `.ico` - Favicon
  file
- [`icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon) `.ico` `.jpg` `.jpeg`
  `.png` `.svg` - App Icon file
- [
  `icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx)
  `.js` `.ts` `.tsx` - Generated App Icon
- [`apple-icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon) - `.jpg`
  `.jpeg`, `.png` - Apple App Icon file
- [
  `apple-icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx) -
  `.js` `.ts` `.tsx` - Generated Apple App Icon

#### [Open Graph and Twitter Images](https://nextjs.org/docs/getting-started/project-structure#open-graph-and-twitter-images)

- [
  `opengraph-image`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#opengraph-image) -
  `.jpg` `.jpeg` `.png` `.gif` - Open Graph image file
- [
  `opengraph-image`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx) -
  `.js` `.ts` `.tsx` - Generated Open Graph image
- [`twitter-image`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#twitter-image) -
  `.jpg` `.jpeg` `.png` `.gif` - Twitter image file
- [
  `twitter-image`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx) -
  `.js` `.ts` `.tsx` - Generated Twitter image

#### [SEO](https://nextjs.org/docs/getting-started/project-structure#seo)

- [`sitemap`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#static-sitemapxml)- `.xml` -
  Sitemap file
- [`sitemap`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap) - `.js`
  `.ts` - Generated Sitemap
- [`robots`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#static-robotstxt)
- `.txt`
- Robots file
- [`robots`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file)
- `.js` `.ts`
- Generated Robots file

## [`pages` Routing Conventions](https://nextjs.org/docs/getting-started/project-structure#pages-routing-conventions)

### [Special Files](https://nextjs.org/docs/getting-started/project-structure#special-files)

- [`_app`](https://nextjs.org/docs/pages/building-your-application/routing/custom-app) **(`.js` `.jsx` `.tsx`)** -
  Custom App
- [`_document`](https://nextjs.org/docs/pages/building-your-application/routing/custom-document) **(`.js` `.jsx` `.tsx`)
  ** - Custom Document
- [
  `_error`](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#more-advanced-error-page-customizing)
  **(`.js` `.jsx` `.tsx`)** - Custom Error Page
- [`404`](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page) **(`.js` `.jsx` `.tsx`)
  ** - 404 Error Page
- [`500`](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page) **(`.js` `.jsx` `.tsx`)
  ** - 500 Error Page

### [Routes](https://nextjs.org/docs/getting-started/project-structure#routes)

#### Folder convention

- [`index`](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Home page
- [`folder/index`](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Nested page

#### File convention

- [`index`](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Home page
- [`file`](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) **(`.js` `.jsx` `.tsx`)
  ** - Nested page

## [Dynamic Routes](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes-1)

#### Folder convention

- [`[folder]/index`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Dynamic route segment
- [
  `[...folder]/index`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments)
  **(`.js` `.jsx` `.tsx`)** - Catch-all route segment
- [
  `[[...folder]]/index`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments)
  **(`.js` `.jsx` `.tsx`)** - Optional catch-all route segment

#### File convention

- [`[file]`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) **(`.js` `.jsx` `.tsx`)** -
  Dynamic route segment
- [`[...file]`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments) \*
  \*(`.js` `.jsx` `.tsx`)\*\* - Catch-all route segment
- [
  `[[...file]]`](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments)
  **(`.js` `.jsx` `.tsx`)** - Optional catch-all route segment
