describe("register page", () => {
  it("should show validation error when leaving all field blank", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=error-first-name]").should(
      "have.text",
      "First Name is required"
    );
    cy.get("[data-cy=error-last-name]").should(
      "have.text",
      "Last Name is required"
    );
  });

  it("should redirect the user to a success page when the form is submitted", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy=first-name-input]").type("John");
    cy.get("[data-cy=last-name-input]").type("Doe");
    cy.get("[data-cy=submit]").click();
  });
});
