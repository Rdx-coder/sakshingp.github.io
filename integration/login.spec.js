describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login.html');
  });

  it('should allow successful login', () => {
    cy.get('input[name="username"]').type('myusername');
    cy.get('input[name="password"]').type('mypassword');
    cy.get('button#loginButton').click();

    // Assert successful login
    cy.get('.welcome-message').should('contain', 'Welcome, User');
  });

  it('should display an error message for invalid login', () => {
    cy.get('input[name="username"]').type('invalidusername');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button#loginButton').click();

    // Assert error message
    cy.get('.error-message').should('contain', 'Invalid credentials');
  });
});
