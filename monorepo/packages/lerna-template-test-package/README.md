_Modify this README with helpful information about your React package!_

# lerna-template-test-pacakge

This package is an example package generated from cra-template-lerna-md.

## Features

- [React](https://reactjs.org/) for development of frontend components
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [styled-components](https://styled-components.com/) for styling in conjunction with components
- [Webpack](https://webpack.js.org/) for bundling JavaScript, with support for imports of static assets such as images and JSON
- [Nightwatch.js](https://nightwatchjs.org/) for E2E testing and [Jest](https://jestjs.io/) for unit testing
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and code formatting, respectively

## Usage

### 0. Setup

1. Since this is technically a React component library, React and React DOM should be used as peer dependencies.
   To set this up, first `cd` into the root of an existing React project, and run the following in your terminal:

```bash
# Link React as a peer dependency
cd node_modules/react
yarn link

# Link React DOM as a peer dependency
cd ../react-dom
yarn link
```

Then, `cd` into the root of this package and run the following in the terminal:

```bash
yarn link react
yarn link react-dom
```

2. `create-react-app` automatically sets `noEmit` to `true` in `tsconfig.json`. Change it to **`false`**

3. `create-react-app` also adds extra `yarn` scripts such as `eject` by default. Any unused scripts can be removed from `scripts` in `package.json`

4. Pick and define the interface for the page-level service object:
   - Use `yarn link` to link the types package from the Lerna monorepo
   - Import necessary types from the types package and modify `type Services` in `src/components/common/PageContext.tsx` with the services that will be used
   - Whenever using `useService` (from `src/utils/useService.ts`), you can specify the service type as a type parameter to take advantage of TS typechecking. You can also implement custom hooks for the various services to avoid redundancy

### 1. Building top-level page and its components

- The purpose of this package is to develop a _single_ page to be used in MD. Please develop this top-level page in `src/components/index.tsx`.
- Additional React components should be built in `src/components`.

### 2. Running locally

To avoid having to build and reload MD on every change, you are able to run this package locally with hot reloading.

1. In `src/__dev__/index.tsx`, add the appropriate services that should be injected into the page as props
2. Run `yarn start` and open `localhost:3000` in the browser

To test integrating the page into MD without publishing to NPM:

1. Run `yarn build && yarn link` in this project's root directory
2. Run `yarn link <this-package-name>` from MD
3. Import and use the page in MD from `<this-package-name>`

### 3. Testing

This template has E2E and unit tests included, which test this package **in isolation** from other packages in the Lerna monorepo.

**E2E tests** (Nightwatch):

To run E2E tests on a local dev server (emulating MD):

1. Write tests in `src/tests/e2e-local` with `.js` file extension
2. Run the local dev server in one terminal using `yarn start`
3. Run tests in a separate terminal using `yarn test:e2e:dev`

To run true E2E tests in MD:

1. Replace the admin account credentials placeholders in `test_settings.default.globals` in `nightwatch.conf.js`
2. Write tests in `src/tests/e2e` with `.js` file extension
3. Run tests using `yarn test:e2e:md`

**Unit tests** (Jest):

To run unit tests:

1. Write unit tests in `src/tests/unit` with `.test.tsx` file extension
2. Run tests using `yarn test:unit`

### 4. Customization

**Exported items**:

- Package-level exports are declared in `src/index.ts`; the page is exported as the sole and default export
- To add additional exports, modify `src/index.ts` to include the additional exports

### 5. Bundle for production

To use the completed page in MD, we need to first bundle the package to reduce its size and generate type declaration files.

Run `yarn build` to build the project.

### 6. Publish to NPM

After building the project, it is ready to be published to NPM so that MD can use the page in production:

1. Update this package's version number in `package.json` and publish to NPM
2. In MD, import the package from NPM and use it in code

(_TODO_)

## Project structure

```bash
.
├─ src/
│  ├─ __dev__/ # Development runtime files
│  ├─ assets/
│  ├─ components/
│  │  ├─ common/
│  │  │  └─ PageContext.tsx # Top-level page context that passes services down to component tree
│  │  └─ index.tsx # Top-level page that is exported by default from the package
│  ├─ constants/
│  ├─ tests/
│  │  ├─ e2e/
│  │  ├─ e2e-local/
│  │  └─ unit/
│  ├─ styles/ # Styles, include global styles/themes here
│  ├─ utils/
│  │  └─ useService.ts # Hook for retrieving service object
│  └─ index.ts # Entry point for package exports
├─ package.json
├─ package-lock.json
├─ README.md
├─ tsconfig.json
├─ webpack.config.dev.js # Webpack config (development)
├─ webpack.config.js # Webpack config (production)
└─ yarn.lock
```

## Development guidelines

- Use absolute imports everywhere except in tests (eg. `components/common/Button` instead of `../../../components/common/Button`).
  - Imports from modules in subfolders of `src/` can use absolute import paths.
  - When creating new subfolders in `src/`, to support absolute imports for these subfolders, the paths must be added to `resolve.alias` in both `webpack.config.js` and `webpack.config.dev.js`
- Place all static assets in `src/assets` to include them in the Webpack bundle and make sure that they are compressed
  - **Do not** place them in a `public` folder
  - Supported file extensions include: `.json`, `.svg`, `.png`, `.jpg`, `.jpeg`.
