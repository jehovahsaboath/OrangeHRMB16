const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,

  e2e: {
    //"baseUrl":"https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":20000,
    "pageLoadTimeout": 100000,
    //"viewportHeight": 1600,
    //"viewportWith": 900,
    "retries":{openMode: 3, runMode: 1},

    env:{

      "username": "Admin2",
      "password": "admin1232",
      //"invalidpassword": "Adminn12330",
      //"invalidusername": "Adminadmin",
      "loginurl":"https://preprod.opensource-demo.orangehrmlive.com",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
