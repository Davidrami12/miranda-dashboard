describe('Dashboard URL', () => {
  it('Initialize hotel admin dashboard', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe("Login Failed - Integration test", () => {
  beforeEach("Initialize", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Check login route", () => {
    cy.url().should("include", "/login");
  });

  it("Check incorrect email & password", () => {
    cy.get('[data-cy="email"]')
      .type("wrong@wrong.com")
      .should("have.value", "wrong@wrong.com");

    cy.get('[data-cy="password"]')
      .type("WrongPassword")
      .should("have.value", "WrongPassword");

    cy.get('[data-cy="submit"]')
      .click()

    cy.url().should("include", "/login");

    cy.get('.error').should('have.text', "Email or password are not correct. Please try again.");
    
    cy.getAllLocalStorage().then((localStorage) => {
      cy.log(localStorage);

      expect(localStorage['auth']).to.be.undefined; //check that there is no 'auth' item in localStorage
      expect(Object.keys(localStorage).length).to.eq(0); // checks that localStorage is entirely empty
    });

  });
});