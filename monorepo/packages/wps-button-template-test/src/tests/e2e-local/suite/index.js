module.exports = {
  'E2E button loads locally': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('button[id~="template-test"]')
      .click('button[id~="template-test"]');

    browser.windowHandles(function (result) {
      let newTab = result.value[1];
      // Switch to New tab
      browser.switchWindow(newTab, function () {
        browser.assert.urlContains('parcel.wish.com');
      });
    });

    browser.end();
  },
};
