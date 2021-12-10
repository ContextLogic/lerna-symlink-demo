module.exports = {
  'E2E test page loads': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#root')
      .assert.containsText(
        '#root',
        'this text does not exist', // make test fail for demo
      )
      .end();
  },
};
