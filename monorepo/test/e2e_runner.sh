#!/bin/bash

TESTS_OUTPUT_DIR="tests_output"
mkdir -p "${TESTS_OUTPUT_DIR}"

# Run all e2e tests even if some tests fail, direct test output to file and console
# --concurrency 1: run process one at a time sequentially
# --no-bail: continue execution even if some process fails
# --stream: persist all test output
#
yarn test:e2e --concurrency 1 --no-bail --stream 2>&1 | tee  "${TESTS_OUTPUT_DIR}/e2e_result.txt"

# Parse test output to get the names of all packages with test failures
#
grep -i "error Command failed with exit code" "${TESTS_OUTPUT_DIR}/e2e_result.txt" | cut -d: -f1 -s > "${TESTS_OUTPUT_DIR}/e2e_failed_tmp.txt"

# Remove duplicate package names and keep the entries in the same order by prepending line number
#
cat -n "${TESTS_OUTPUT_DIR}/e2e_failed_tmp.txt" | sort -uk2 | sort -n | cut -f2- > "${TESTS_OUTPUT_DIR}/e2e_failed.txt"
rm "${TESTS_OUTPUT_DIR}/e2e_failed_tmp.txt"

# Re-run e2e failed tests
#
while read name; do
    echo "== Package ${name} contains failed tests, retrying =="
    yarn test:e2e --scope="${name}"
done < "${TESTS_OUTPUT_DIR}/e2e_failed.txt"
