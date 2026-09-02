# Kyna documentation site

Modern, dark-minimal documentation for the
[Kyna](https://github.com/Up-to-code/Kyma) programming language, built with
[Docusaurus](https://docusaurus.io/).

It is deployed to GitHub Pages at
**https://up-to-code.github.io/kyna-docs/** .

Highlights:

- **Dark-first** theme with a subtle blue accent (no clutter, no purple).
- **Real Kyna syntax highlighting** in every code block — a custom Prism
  grammar that colors keywords, types, strings, numbers, comments, operators
  and builtins like a visual editor (VS Code Dark token palette).
- **Custom code viewer** — VS-style window chrome and themed scrollbars.
- Landing page with a **split hero**: the language name and pitch on the left,
  a colorful live Kyna syntax preview on the right.

## Local development

```bash
npm install
npm start          # dev server with live reload at http://localhost:3000
```

## Build the static site

```bash
npm run build      # outputs the static site into build/
npm run serve      # preview the production build
```

## Deploy to GitHub Pages

The repository includes `.github/workflows/docs.yml`, which builds and deploys
automatically on every push to `main`.

Manual deploy (requires GitHub `gh` auth):

```bash
npm run deploy
```

## Content

Documentation lives in `docs/`:

- `tutorial/` — getting started, language tour, **modules & packages**;
- `reference/` — bindings & types, control flow, functions, classes, exceptions,
  async, and networking (`fetch`, `parseIP`);
- `stdlib/` — text, collections (including queues), data formats, files (`copyFile`),
  system (**slog**), timing & memory;
- `examples.mdx` — recipes that match the `Kyma` repo's `examples/` folder.

The site pulls no content from the compiler repo at build time; everything is
authored directly here so the docs are simple, self-contained, and fast.
