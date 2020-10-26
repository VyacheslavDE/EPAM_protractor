// An example configuration file.
exports.config = {
  directConnect: true, //do not need to start selenium file separatly

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/Users/1/Desktop/EPAM_JS/Kandziuba_EPAM_ProractorFramework/spec/contactFormTests.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
