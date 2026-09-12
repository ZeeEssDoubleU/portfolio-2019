# Portfolio 2019

The original personal portfolio for Zak (Zachary) Williams. This repository preserves the Gatsby implementation and its design, branding, biography and project history.

- **Website:** https://zswportfolio-2019.netlify.app/
- **Source branch:** `master`
- **Next.js successor:** [portfolio-2026](https://github.com/ZeeEssDoubleU/portfolio-2026/tree/main)
- **Successor website:** https://zswportfolio.netlify.app/

## Technology

Gatsby 2, React 16, styled-components 4, GSAP 2 and Framer Motion 1. DatoCMS supplies project content and assets through Gatsby's GraphQL data layer. Gatsby Image and Sharp generate responsive images and blurred loading previews. The contact form uses Netlify Forms.

The site includes a landing section, biography, project list, project detail pages, responsive navigation and a contact form. Project descriptions and linked demos reflect the original portfolio; external services may no longer be running.

## Source layout

| Location | Purpose |
| --- | --- |
| `src/pages/` | Gatsby pages |
| `src/components/` | Site sections, navigation and reusable UI |
| `src/templates/project-info.js` | Generated project detail pages |
| `gatsby-node.js` | Project page generation |
| `gatsby-config.js` | CMS, metadata, images and Gatsby plugins |
| `src/utils/animations.js` | Navigation and menu timelines |
| `src/styles/` | Theme and shared styles |

## Local development

This is a legacy dependency stack. Use Yarn Classic and a Node environment compatible with the locked Gatsby 2 and Sharp versions. Compatibility with current Node releases has not been verified; do not upgrade the lockfile blindly.

Create a local `.env` file with an authorized read-only DatoCMS token:

```dotenv
DATO_API_TOKEN=your_read_only_token
```

```sh
yarn install --frozen-lockfile
yarn dev
```

Use `yarn dev`, not `yarn start`: the existing start script refers to an undefined `develop` script.

```sh
yarn build   # Generate the Gatsby site in public/
yarn serve   # Preview the production build
```

Builds require DatoCMS access and network access to the asset URLs in `gatsby-config.js`. The repository includes historical generated page data, but that is not a substitute for a valid CMS connection when rebuilding. Never commit tokens.

## Deployment and maintenance

For Netlify, build with `yarn build` and publish `public/`. Configure `DATO_API_TOKEN` in the build environment and enable Netlify form detection. Review the Node version before rebuilding this legacy site.

The Gatsby offline and manifest plugins are enabled. Service-worker caching can affect how quickly updates appear, so include a fresh-browser check when validating changes.

The current `yarn test` script is a placeholder, not a test suite. Validate responsive navigation, animation behavior, project routes, images and the contact form manually after changes.

Use the Next.js successor for ongoing modernization. The original implementation remains useful as the visual and animation reference.

## License

MIT. See [LICENSE](LICENSE).
