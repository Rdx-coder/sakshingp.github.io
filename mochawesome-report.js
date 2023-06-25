const report = require('mochawesome-report-generator');

report.create({
  reportDir: 'cypress/reports/mochawesome',
  reportFilename: 'report',
  reportTitle: 'Cypress Test Report',
  reportPageTitle: 'Cypress Test Report',
  inlineAssets: true,
  overwrite: true
}).then(() => {
  console.log('HTML report generated successfully.');
});
