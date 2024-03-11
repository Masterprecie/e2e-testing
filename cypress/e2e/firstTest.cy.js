describe("register page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("SITE_URL"));
  });
  it("should show validation error when leaving all field blank", () => {
    cy.get("[id=submit]").click();
    cy.get("[id=error-first-name]").should(
      "have.text",
      "First Name is required"
    );
    cy.get("[id=error-last-name]").should("have.text", "Last Name is required");
  });

  it("should redirect the user to a success page when the form is submitted", () => {
    cy.get("[id=first_name]").type("John");
    cy.get("[id=last_name]").type("Doe");
    cy.get("[id=submit]").click();
    cy.url().should("include", "/success");
  });
});
