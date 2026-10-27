# Static Sites

- **WEB-SITE-001 (MUST)** If the site is generated (for example
  `node scripts/build.mjs`), edit the sources (templates, copy files, assets),
  never the generated HTML, and rebuild before committing. The project wiki or
  `AGENTS.md` names the build command.
- **WEB-SITE-002 (SHOULD)** Plain HTML, CSS, and small vanilla JavaScript are
  the default. Add a framework or bundler only when the site needs it, and
  record the decision in the project wiki.
- **WEB-SITE-003 (MUST)** Shared styles and scripts live in `assets/`. When
  they change, bump the asset version (cache-busting query or file name).
- **WEB-SITE-004 (MUST)** No build artifacts, `node_modules`, or local
  tooling caches are committed unless the host serves them directly.
- **WEB-SITE-005 (SHOULD)** Pages work without JavaScript for their core
  content (copy, links, legal text); JavaScript enhances.
- **WEB-SITE-006 (MUST)** Real data only: prices, ratings, versions, and
  awards come from the store or a data file refreshed from it. Never invent
  ratings, reviews, download counts, or press quotes.
- **WEB-SITE-007 (SHOULD)** Design follows the app's palette and typography so
  the landing and the app feel like one product.
- **WEB-SITE-008 (MUST)** Agent and project documentation (`AGENTS.md`,
  `CLAUDE.md`, `README.md`, `docs/`, build scripts) is never published. With
  GitHub Pages (Jekyll), list them under `exclude:` in `_config.yml`; dot
  folders are excluded automatically.
