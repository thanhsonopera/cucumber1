// npm install cucumber-html-reporter --save-dev
var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'report.json',
  output: 'report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version":"0.0.1",
    "Test Environment": "STAGING",
    "Browser": "Chrome  123.0.6312.105",
    "Platform": "Windows 11",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
// npm run generate-report