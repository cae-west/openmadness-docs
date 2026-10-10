# Openmadness Documentation

Documentation site for **Openmadness**: a fictional JavaScript library for
fluent, NumPy-inspired array and matrix operations, created as a technical
writing exercise for the Technical Writing Mentorship Program (TWMP).

> **About this project**
> Openmadness itself is a fictional library built from its specification in
> the [TWMP Openmadness spec](https://github.com/Technical-writing-mentorship-program/Openmadness/blob/main/Openmadnness.md).
> This repository contains the user-facing documentation for that spec,
> written and maintained by the authors below.

## Authors

* Cae
* Ethan

## License

MIT License — see [LICENSE](./LICENSE).

## How the docs are built

This site is built with [VuePress 2](https://vuepress.vuejs.org/) using the
[theme-hope](https://theme-hope.vuejs.press/) theme.

1. `npm install`
2. `npm run docs:dev` to preview locally at `http://localhost:8080`
3. `npm run docs:build` to produce a static site in `docs/.vuepress/dist`

## Repository layout

* `docs/` — all published documentation (source for the website)
* `docs/.vuepress/` — site configuration
* `package.json`, `.gitignore` — project scaffolding
