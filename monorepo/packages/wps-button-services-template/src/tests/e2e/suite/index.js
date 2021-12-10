module.exports = {
  'E2E test page loads': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#root')
      .assert.containsText(
        '#root',
        'create-react-app template for use in Lerna monorepo',
      )
      .end();
  },
};
