describe('Dashboard URL - Integration tests', () => {
  it('Initialize hotel admin dashboard', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe("Login successful & check localStorage saved items", () => {
  beforeEach("Initialize", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Check login route", () => {
    cy.url().should("include", "/login");
  });

  it("Check email, password and auth (localStorage)", () => {
    cy.get('[data-cy="email"]')
      .type("admin@admin.com")
      .should("have.value", "admin@admin.com");

    cy.get('[data-cy="password"]')
      .type("Admin123")
      .should("have.value", "Admin123");

    cy.wait(1000)
    cy.contains("LOGIN")
      .click();
    // cy.get('[data-cy="submit"]') does not work properly because it's a BUTTON not an INPUT

    cy.url().should("include", "/");


    // Check localStorage
    cy.getAllLocalStorage().then((localStorage) => {
      cy.log(localStorage);
      expect(localStorage['http://localhost:3000']['auth']).to.exist;

      let authData = JSON.parse(localStorage['http://localhost:3000']['auth']);
  
      expect(authData).to.have.property('auth', true);
      expect(authData).to.have.property('email', 'admin@admin.com');
      expect(authData).to.have.property('password', 'Admin123');
    });
  });
});