# lerna-symlink-demo
This repo is a simple demo of local dev with lerna monorepo and some additional project (like next js project)

# Get Started
To run the demo, including fetching dependencies, building all the monorepo packages, linking them to the built in nextjs demo consumer app, and starting the next js app on dev, run `./setup.sh` from root. To do the same but simply prepare the links for another consumer app (such as MD), run `./link.sh`.

# Testing

## Overview
Each package contains its own unit/e2e tests. <br>
Utilizing the `lerna run <script>` command, we can run tests for all packages altogether.

## Test structure and location
- nightwatch e2e tests are placed in folder `src/tests/e2e` within each package.
- jest unit tests are placed in folder `src/tests/unit` with a `.test.tsx` suffix within each package.

## Test setup for the monorepo
- **add-button**: both e2e and unit tests will pass
- **sub-button**: both e2e and unit tests will fail
- **wps-button-template-test**: e2e will pass but unit test will fail

## Testing individual package
- **unit test**: run `yarn test:unit` <br>
- **e2e test with dev server**: run `yarn test:e2e:dev` <br>
- **e2e test with md**: run `yarn test:e2e:md` <br>
- **e2e test with dev server in background **: run `yarn test:e2e:dev:bg` <br>
- `test/nightwatch_runner.sh`: a helper script for running nightwatch e2e tests. It starts the server in background and then run tests.

## Testing globally
Detailed instructions in [this document](https://docs.google.com/document/d/1iCXuie-8f8BFfpr6RBbGc3W3t9-BKAYagtDHr9zRUiA/edit#heading=h.7gfujcijtizi) "Testing" section. <br>

Use `test/unit_runner.sh` for an example of running unit tests globally, it: 
- runs unit tests in all packages
- then outputs test results to `test_outputs/unit_results.txt`
- then finds all packages with test failures and outputs these package names to `test_output/unit_failed.txt`

Use `test/e2e_runner.sh` for an example of running e2e tests globally (contain retrying mechanism), it: 
- runs e2e tests in all packages
- then outputs test results to `test_outputs/e2e_results.txt`
- then finds all packages with test failures and outputs these package names to `test_output/e2e_failed.txt`
- finally re-runs all failed tests
