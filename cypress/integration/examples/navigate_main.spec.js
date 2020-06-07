describe("ScubaHub Integration Tests", () => {
  it("Gets Learn More and assert routing", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Learn More").click();
    cy.url().should("include", "/id/");

    // verify the load of the google maps
    cy.get(".MuiGrid-grid-xs-12")
      .get("a")
      .should(
        "have.attr",
        "title",
        "Open this area in Google Maps (opens a new window)"
      );
  });
});
