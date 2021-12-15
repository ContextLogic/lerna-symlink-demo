module.exports = {
  'E2E test page loads': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#root')
      .assert.containsText(
        '#root',
        'Wish Parcel Service',
      )
      .end();
  },
};
