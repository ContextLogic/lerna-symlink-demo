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
};
