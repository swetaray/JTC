describe("Verify search request", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it(" Verify that search request should get hit by clicking on search button ", function () {
    cy.get(".SDkEP").type("cypress");
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
    cy.go(-1);
  });
  it(" Verify that search request should get hit by  hitting enter after writing the search term", function () {
    cy.get(".SDkEP").type("cypress").type("{enter}");
   
  });
});
