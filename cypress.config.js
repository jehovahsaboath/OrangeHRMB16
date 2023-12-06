const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  e2e: {
    
    "specPattern": "**/*.feature",

    "baseUrl":"https://opensource-demo.orangehrmlive.com",

    "defaultCommandTimeout":6000,

    "pageLoadTimeout": 70000,
    
    //"viewportHeight": 1600,
    //"viewportWith": 900,
   // "retries":{openMode: 2, runMode: 1},

    env:{

      "specPattern": "**/*.feature",
      "username": "Admin",
      "password": "admin123",
      "empusername": "speeddy",
      "emppassword": "speed123",
      "invalidpassword": "Adminn12330",
      "invalidusername": "Adminadmin",
      "loginurl":"https://opensource-demo.orangehrmlive.com",

            
    },

    "video": true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
      // allureWriter(on, config);
      // return config;
            
    },
    
  },
  
});
