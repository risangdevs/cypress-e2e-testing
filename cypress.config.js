const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    dev: "http://gym-master.apps.ocp-dev.bri.co.id/api/",
    prestage: "https://addons.cms.dev.bri.co.id/api/",
  },
});
