module.exports = {
  url: function () {
    return this.api.launchUrl + 'v2-login';
  },
  commands: [
    {
      login: function (username, password) {
        return this.waitForElementVisible('@mdEmailInput')
          .clearValue('@mdEmailInput')
          .setValue('@mdEmailInput', username)
          .clearValue('@mdPasswordInput')
          .setValue('@mdPasswordInput', password)
          .click('@mdLoginButton');
      },
      createTestOrder: function () {
        return this.waitForElementVisible('@accountIcon')
          .click('@accountIcon')
          .waitForElementVisible('@accountMenu')
          .click('@accountMenu');
      },
      allowPermission: function () {
        return this.waitForElementVisible('@pageContent')
          .waitForElementVisible('@permissionSubmitButton')
          .click('@permissionSubmitButton')
          .waitForElementVisible('@permissionSubmitButton')
          .waitForElementVisible('@modalConfirmButton')
          .click('@modalConfirmButton');
      },
      performOnNewTab: function (callback) {
        return this.pause(5000).getWindowHandle(function (result) {
          if (result.value.length === 1) {
            this.perform(function () {
              console.log('Second tab is not loaded yet, try again...');
            }).performOnNewTab(callback);
          } else {
            const originalWindow = result.value[0];
            const newWindow = result.value[1];
            this.switchWindow(newWindow)
              .perform(function () {
                callback();
              })
              .perform(function () {
                this.switchWindow(originalWindow);
              });
          }
        });
      },
    },
  ],
  elements: {
    mdEmailInput: 'input[placeholder*="username" i]',
    mdPasswordInput: 'input[placeholder*="password" i]',
    mdLoginButton: {
      locateStrategy: 'xpath',
      selector: '//button[div[contains(text(), "Log in")]]',
      index: 0,
    },
    pageContent: 'div[id="page-content"]',
    permissionSubmitButton: 'input[id="submit"]',
    iframe: 'iframe[data-product="web_widget"]',
    modalConfirmButton: 'div[class~="modal-footer"] a[class~="confirm-btn"]',
    testBtn: 'button[class~="wrapper-AtBcr"]',
    accountBtn: {
      locateStrategy: 'xpath',
      selector: '//*[@id="menu-account"]/a',
      index: 0,
    },
    testMerchantName: {
      locateStrategy: 'xpath',
      selector: '//div[contains(text(), "John")]',
      index: 0,
    },
  },
};
