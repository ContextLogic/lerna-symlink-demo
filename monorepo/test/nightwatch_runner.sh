#!/bin/bash

# This script is useful for running nightwatch e2e tests for CRA pacakges.

# Starts the application in background
#
yarn start &
sleep 5

# Runs e2e tests
#
yarn test:e2e

# Get test exit status, kill the process and exit
#
STATUS_CODE=$?
pid=$(lsof -i:3000 -t); kill -TERM $pid || kill -KILL $pid
exit $STATUS_CODE
sleep 10
