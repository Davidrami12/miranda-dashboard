describe('Dashboard URL - Integration tests', () => {
  it('Initialize hotel admin dashboard', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe("Log out successful & check localStorage deleted items", () => {
  beforeEach("Initialize", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Check login route", () => {
    cy.url().should("include", "/login");
  });

  it("Check email, password, log out and auth (localStorage)", () => {
    cy.get('[data-cy="email"]')
      .type("admin@admin.com")
      .should("have.value", "admin@admin.com");

    cy.get('[data-cy="password"]')
      .type("Admin123")
      .should("have.value", "Admin123");

    cy.get('[data-cy="submit"]')
      .click();

    cy.url().should("include", "/");

    // Check localStorage
    cy.getAllLocalStorage().then((localStorage) => {
      cy.log(localStorage); // This will log the entire localStorage to the Cypress log
      expect(localStorage['http://localhost:3000']['auth']).to.exist;

      let authData = JSON.parse(localStorage['http://localhost:3000']['auth']);
  
      expect(authData).to.have.property('auth', true);
      expect(authData).to.have.property('email', 'admin@admin.com');
      expect(authData).to.have.property('password', 'Admin123');
    });

    // Check log out functionality
    cy.get('[data-cy=logout-button]').click()
    cy.url().should("include", "/login");

    // Check localStorage again (auth removed)
    cy.getAllLocalStorage().then((localStorage) => {
      cy.log(localStorage);

      expect(localStorage['auth']).to.be.undefined; //check that there is no 'auth' item in localStorage
      expect(Object.keys(localStorage).length).to.eq(0); // checks that localStorage is entirely empty
    });

  });
});