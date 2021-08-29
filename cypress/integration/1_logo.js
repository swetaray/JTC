import { it } from "mocha";

describe("Verify google logo", function () {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
  it(" Verify that Google Logo is present and centre aligned", function () {
    cy.get('#hpctaplay').should('have.css','text-align','center','padding','0');
    cy.get('#hpctaplay').should('have.css','background-image');

  });
  it("Verify that the search textbox is centre aligned and editable",function(){
    cy.get('.SDkEP').should('have.css','padding-right','8px','padding-left','14px');
    cy.get('.SDkEP').type("cypress");
  })
});
