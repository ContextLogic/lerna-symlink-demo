_Modify this README with helpful information about your React package!_

# cra-template-lerna-md

Use this template to bootstrap a new React package for developing Merchant Dashboard pages and components in a Lerna monorepo. This package can then be used to develop and test features outside the monolith.

## Features

- [React](https://reactjs.org/) library for development of frontend components
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [styled-components](https://styled-components.com/) for styling in conjunction with components
- [Webpack](https://webpack.js.org/) for bundling JavaScript, with support for imports of static assets such as images and JSON
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and code formatting, respectively

## Project structure

```bash
.
├─ src/
│  ├─ components/ # Assets
│  ├─ components/ # Components
│  ├─ constants/ # Platform constants
│  ├─ pages/ # Components
│  └─ styles/ # Styles, include global styles/themes here
├─ package.json
├─ package-lock.json
├─ README.md
├─ tsconfig.json
├─ webpack.config.js
└─ yarn.lock
```

## Development guidelines

- Use absolute imports (eg. `components/common/Button` instead of `../../../components/common/Button`).
  - See `tsconfig.json` for the available absolute import paths.
  - To add additional absolute paths, they must be added to **both** `compilerOptions.paths` in `tsconfig.json` **and** `resolve.alias` in `webpack.config.js`
- Place all static assets in `src/assets` - **do not** place them in a `public` folder. These assets will be included in the Webpack bundle. Supported file extensions include: `.json`, `.svg`, `.png`, `.jpg`, `.jpeg`.
