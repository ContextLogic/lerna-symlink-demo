module.exports = {
  '@disabled': true, // staging MD can generate test transactions reliably, but only if there are products, which is unreliable
  before(browser) {
    browser
      .url(broswer.launch_url)
      .expect.element('body')
      .to.be.present.before(3000);
    const mdpage = browser.page.mdCreateOrder();

    mdpage
      .login(browser.globals.mdusername, browser.globals.mdpassword)
      .waitForElementVisible('@pageContent');
    browser
      .url(
        browser.launch_url +
          'documentation/api/v2/explorer/order/generate-test-transactions',
      )
      .expect.element('body')
      .to.be.present.before(3000);
    browser.page.apiExplorer().generateOrder();
  },
};
