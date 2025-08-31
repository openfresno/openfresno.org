# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick Commands

### Development
```fish
npm run dev          # Start development server (with turbo) at http://localhost:3000
npm run build        # Build static export for production
npm start            # Serve production build locally
```

### Code Quality
```fish
npm run lint         # Run ESLint with Next.js config
npm run format       # Format code with Prettier
npm test             # Run Vitest tests in watch mode
```

### Single Test File
```fish
npm test -- src/components/AppFooter.test.jsx
```

## Architecture Overview

This is a **Next.js 15** application using the **App Router** with static export (`output: "export"`). The site is built as a static site generator for the Open Fresno civic tech organization.

### Key Technologies
- **Next.js 15** with App Router
- **React 19** with Material UI components
- **MDX** support via `@next/mdx` and `next-mdx-remote`
- **Sass** for styling alongside CSS
- **Vitest** for testing with jsdom environment
- **GitHub API integration** for dynamic project data

### Routing Structure
```
src/app/
├── layout.jsx          # Root layout with Inter font
├── (home)/            # Route group for homepage
├── about/             # Static pages with section components
├── projects/          # Dynamic GitHub project integration
│   └── [project]/     # Dynamic project detail pages
├── faq/               # MDX-powered FAQ with navigation
└── loading.jsx        # Global loading UI
```

## Project Structure & GitHub Integration

### Core Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components organized by type:
  - `layout/` - AppLayout, AppNavbar, AppFooter
  - `ui/` - Button, Slider, Steps, HeaderUnderline
  - `icon/` - Custom icons and icon components
- `src/integrations/` - External service integrations (Keen Slider, Tabler Icons)
- `src/utils/` - Helper functions, constants, and custom hooks
- `public/documentation/` - Project documentation in Markdown

### GitHub Projects Integration
The `/projects` page dynamically fetches project data from GitHub repositories in the `openfresnoorg` organization. Each project repository should contain a `meta.yml` file with project metadata including:
- Project description, status, and type
- Lead contacts (technical lead, designer, project manager)
- Contributing guidelines by role (developer, designer, PM)
- Technologies used and difficulty levels
- Project roadmap with milestones

Example meta.yml structure can be found in `src/app/projects/github.js` (lines 70-202).

## Configuration Highlights

### Next.js Config (`next.config.js`)
- **Static Export**: `output: "export"` - no server runtime required
- **MDX Support**: Configured via `@next/mdx` wrapper
- **Image Optimization**: Disabled for static export (`unoptimized: true`)
- **Sass**: Configured with custom include paths

### Path Aliases (`jsconfig.json`)
- `@/*` maps to `./src/*` for clean imports

### Development Tools
- **ESLint**: Next.js config with build-time ignore option
- **Prettier**: Configured with CSS ordering and Tailwind plugins
- **Vitest**: jsdom environment for component testing

## Testing

Tests are located in `__tests__/` directory with the pattern `*.test.jsx`. The setup uses:
- **Vitest** as the test runner
- **jsdom** for DOM simulation
- **@testing-library/react** for component testing
- **@testing-library/user-event** for user interaction testing

### Running Tests
```fish
npm test                    # Run all tests in watch mode
npm test -- --coverage     # Run with coverage report
npm test -- __tests__/components/AppFooter.test.jsx  # Run specific test
```

## Key Implementation Notes

### Section-Based Architecture
Pages are composed of section components that follow a consistent naming pattern:
- `[PageName]SectionLanding.jsx` - Hero/landing sections
- `[PageName]SectionContent.jsx` - Main content sections
- `[PageName]Section[Specific].jsx` - Specialized sections

### Styling Approach
- Global styles in `src/app/global.css` and `styles/main.scss`
- Component-level styling using CSS classes
- Material UI components with custom theming
- Responsive design with mobile-first approach

### GitHub Rate Limiting
The projects page uses unauthenticated GitHub API requests (60/hour limit). Consider implementing caching with SWR for production use as noted in the code comments.
