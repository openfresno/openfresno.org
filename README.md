# Open Fresno website

Open Fresno is a platform for civic innovation. As an open-source organization, you can fork our code including our
website. Help us make the site better by [forking it](https://help.github.com/articles/fork-a-repo/), adding new content
or features, and [submitting a pull request](https://help.github.com/articles/creating-a-pull-request/)!

> [!NOTE]
> View the Open Fresno website documentation https://openfresno.github.io/fe-openfresno.org-doc.

## Get started

This is a Next.js static site. Get started by downloading the code and running these commands:

1. `npm i` Install the NPM packages (~685Mb).
2. `npm run dev` Start the web server.

## Contribute

If you're looking for a starter development task to get your feet wet with our codebase, any of our Issues
tagged [help wanted](https://github.com/openfresno/openfresno.org/issues) might be a good fit.

Some of the other Issues are larger and require some deeper design or architectural work; if one of those catches your
eye, you'll probably want to talk with us for some more context and background. Either comment on the Issue or — even
better — catch up with us at one of [Open Fresno's weekly Hack Nights](https://www.meetup.com/openfresno/).

## Test

Add critical end-to-end tests for the website using the Playwright framework. Supplementary tests—including Storybook snapshots, Vitest unit coverage, non-essential checks, and example code—are maintained separately in the [documentation repository](https://github.com/openfresno/fe-openfresno.org-doc).

## Deploy

The site is deployed to GitHub pages. See [deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml).

## Known Issues

- There in an incompatability with non-Chrome browsers for scroll animations; including the navbar.

## Other Resources

- [Open Fresno website documentation](https://openfresno.github.io/fe-openfresno.org-doc)
- [Open Websites Figma](https://www.figma.com/design/attWQWKwed1XSaaaMuzM5m/Open-Websites?node-id=2612-11351&t=IiJjmX4Zr0KPPUyE-0)
- [Code of Conduct](https://github.com/openfresno/codeofconduct)
- https://nextjs.org/docs/pages/guides/testing/playwright
- https://playwright.dev/

