module.exports = {
  '@disabled': false, // staging MD can generate test transactions reliably, but only if there are products, which is unreliable
  before: function (browser) {
    browser.url(browser.launch_url).expect.element('body').to.be.present;
    const mdpage = browser.page.mdCreateOrder();

    mdpage
      .navigate()
      .login(browser.globals.mdusername, browser.globals.mdpassword)
      .waitForElementVisible('@accountBtn');
  },
  'Merchant Dashboard - WPS Button works': function (browser) {
    const mdpage = browser.page.mdCreateOrder();

    browser.url(browser.launch_url + 'go/5fc133d802c9b34adc090b51');
    mdpage.waitForElementVisible('@testMerchantName');
    browser.pause(10000); // give time for page to load

    browser.url(browser.launch_url + 'lerna-demo');
    browser.waitForElementVisible('button[id~="template-test"]');
    browser.pause(2000);
    browser.click('button[id~="template-test"]');

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
