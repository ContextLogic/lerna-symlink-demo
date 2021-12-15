module.exports = {
  commands: [
    {
      generateOrder: function () {
        this.waitForElementVisible('@getTempTokenButton')
          .click('@getTempTokenButton')
          .pause(1000)
          .click('@submitButton');
      },
    },
  ],
  elements: {
    getTempTokenButton: 'button[id="get-token"]',
    passwordInput: 'input[id="password-box"]',
    signinButton: 'div[class="sign-btn-container"] button',
    submitButton: 'button[id="submit"]',
  },
};
