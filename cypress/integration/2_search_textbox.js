
describe("Verify search textbox", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

it("Verify that the search textbox is centre aligned and editable",function(){
  cy.get('.SDkEP').should('have.css','padding-right','8px','padding-left','14px');
  cy.get('.SDkEP').clear();
  cy.get('.SDkEP').type("cypress");
  cy.get('.SDkEP').clear();
})
});