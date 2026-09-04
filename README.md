# Kyna documentation

The source for the [Kyna documentation website](https://up-to-code.github.io/kyna-docs/),
built with [Docusaurus](https://docusaurus.io/).

## Work locally

Requires Node.js 20 or newer.

```sh
npm install
npm start
```

The development server opens at `http://localhost:3000` and reloads when a page
changes.

## Verify a change

```sh
npm run build
npm run serve
```

`npm run build` checks routes and produces the static site in `build/`.

## Content structure

```text
docs/
  intro.mdx       overview and learning paths
  tutorial/       guided lessons
  reference/      language behavior and APIs
  stdlib/         standard-library modules
  examples.mdx    practical recipes
src/
  pages/          landing page
  components/     shared React components
  css/            site theme and responsive layout
```

Keep tutorials task-focused and explain one concept at a time. Put precise
language behavior in `reference/`, and standard-library APIs in `stdlib/`.

## Deployment

Every push to `main` is built and deployed to GitHub Pages by
`.github/workflows/docs.yml`.

```sh
npm run deploy
```

Manual deployment requires authenticated GitHub access.

The compiler and language implementation live in
[Up-to-code/Kyna](https://github.com/Up-to-code/Kyna). The npm installer is
[`@kyna-language/cli`](https://www.npmjs.com/package/@kyna-language/cli).
