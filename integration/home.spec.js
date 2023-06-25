describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/login.html');

    // Login before each test
    cy.get('input[name="username"]').type('any_username');
    cy.get('input[name="password"]').type('any_password');
    cy.get('button[type="submit"]').click();
  });

  it('should sort the transaction table by clicking on the AMOUNT header', () => {
    cy.get('#amount-header').click();

    cy.get('.amount-value').then($amounts => {
      const amounts = $amounts.toArray().map(el => parseFloat(el.innerText));
      const sortedAmounts = [...amounts].sort((a, b) => a - b);
      expect(amounts).to.deep.equal(sortedAmounts);
    });

    cy.screenshot('Home Page - Sorted Transaction Table');
  });
});
