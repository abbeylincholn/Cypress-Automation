// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//    // specPattern: "cypress/testcase/**/*.cy.{js,jsx,ts,tsx}",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    chromeWebSecurity: false,
    // specPattern: "cypress/testcase/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Add more flags to allow cookies and other potential blockers
          launchOptions.args.push('--disable-extensions');
          ///launchOptions.args.push('--incognito');

          launchOptions.args.push('--enable-cookies');
          launchOptions.args.push('--enable-features=NetworkService,NetworkServiceInProcess');
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--allow-running-insecure-content');
          

        }
        return launchOptions;
      });
    },
  },
});
