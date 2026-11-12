# Forward Deployed Engineer research

Concise research from seven real employer job descriptions: four internships, one new-graduate role and two experienced roles. Checked November 12, 2026.

**[Read the site](https://mayumizurita.github.io/forward-deployed-engineer-research/)**

## Structure

- Overview and work: understand responsibilities.
- Internships and full-time: compare eligibility by career stage.
- Skills: distinguish shared foundations from specialized requirements.
- Job briefs and sources: inspect the evidence and limitations.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run docs:dev
npm run docs:build
```

Built with VitePress. GitHub Pages publishes the generated site. Job summaries are paraphrases with links to the original employer descriptions; availability must be rechecked.

## Review trail

[Published-site review and fixes — issue #1](https://github.com/mayumizurita/forward-deployed-engineer-research/issues/1). The review checks internship timing, evidence freshness, navigation, search and narrow-screen reading.

## Build dependency note

VitePress 1.6.4's build/development dependencies report three npm audit findings (two moderate, one high), with no automatic fix available on November 12, 2026. GitHub Pages serves only generated static files. Review upstream fixes before exposing a local development server.
