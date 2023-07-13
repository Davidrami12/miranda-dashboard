describe('Dashboard URL', () => {
  it('Initialize hotel admin dashboard', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe("Checking user log out - Integration test", () => {
  beforeEach("Initialize", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Check login route", () => {
    cy.url().should("include", "/login");
  });

  it("User logs out after login ", () => {
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

    // CHECK LOG OUT
    cy.wait(2000)
    cy.get('[data-cy=logout-button]').click()
    cy.url().should("include", "/login");

  });
});