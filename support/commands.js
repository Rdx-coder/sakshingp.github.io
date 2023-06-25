// Custom Cypress command for assertions
Cypress.Commands.add('assert', { prevSubject: true }, (subject, assertion, ...args) => {
  Cypress.log({ displayName: 'assert' });
  return cy.wrap(subject).should(assertion, ...args);
});
