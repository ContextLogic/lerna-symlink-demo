// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {};
loadServices();

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['src/tests/e2e-local/suite'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: '',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000',
      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },
      desiredCapabilities: {
        browserName: 'firefox',
      },
      webdriver: {
        start_process: true,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
      },
      globals: {
        mdusername: 'kezhang@contextlogic.com', //admin acc do not commit
        mdpassword: 'WPSTest_123', //admin acc do not commit
        // mdusername: 'INSERT_MD_ACCOUNT_USERNAME_HERE', // ! DO NOT COMMIT RAW LOGIN CREDENTIALS
        // mdpassword: 'INSERT_MD_ACCOUNT_PASSWORD_HERE', // ! DO NOT COMMIT RAW LOGIN CREDENTIALS
        asyncHookTimeout: 60000,
        waitForConditionTimeout: 60000,
      },
    },
    chrome: {
      extends: 'default',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['no-sandbox'],
        },
        elementScrollBehavior: 1,
      },
      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515,
      },
    },
    chromeMD: {
      extends: 'default',
      src_folders: ['src/tests/e2e/suite'],
      page_objects_path: ['src/tests/e2e/pageObjects'],
      launch_url: 'https://merch.corp.contextlogic.com/',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['no-sandbox'],
        },
        elementScrollBehavior: 1,
      },
      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver',
        port: 9515,
      },
    },
    firefox: {
      extends: 'default',
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              '-headless',
              // '-verbose'
            ],
          },
        },
      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },
  },
};

function loadServices() {
  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}