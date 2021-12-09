# Testing

## Overview
Each package contains its own unit/e2e tests. <br>
Utilizing the `lerna run <script>` command, we can run tests for all packages altogether.

## Test structure and location
- nightwatch e2e tests are placed in folder `src/tests/e2e` within each package.
- jest unit tests are placed in folder `src/tests/unit` with a `.test.tsx` suffix within each package.

## Test setup for the monorepo
- **add-button**: both e2e and unit tests will fail
- **sub-button**: both e2e and unit tests will pass
- **wps-button-template-test**: e2e will pass but unit test will fail

## Testing individual package
- **unit test**: run `yarn test:unit` <br>
- **e2e test**: run `yarn test:e2e` <br>
- `test/nightwatch_runner.sh`: a helper script for running nightwatch e2e tests inside cra repos.

## Testing globally
Detailed instructions in [this document](https://docs.google.com/document/d/1iCXuie-8f8BFfpr6RBbGc3W3t9-BKAYagtDHr9zRUiA/edit#heading=h.7gfujcijtizi) "Testing" section. <br>

See `test/unit_runner.sh` for an example of running unit tests globally, it: 
- runs unit tests in all packages
- then outputs test results to `test_outputs/unit_results.txt`
- then finds all packages with test failures and outputs these package names to `test_output/unit_failed.txt`

See `test/e2e_runner.sh` for an example of running e2e tests globally (contain retrying mechanism), it: 
- runs e2e tests in all packages
- then outputs test results to `test_outputs/e2e_results.txt`
- then finds all packages with test failures and outputs these package names to `test_output/e2e_failed.txt`
- finally re-runs all failed tests