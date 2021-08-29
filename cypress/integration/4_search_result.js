
describe("Verify search result", function () {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    });
    it(" Verify that in the search result- webpage’s title, URL and logo are present",function(){
        cy.go(-1);
        cy.get('.SDkEP').type("cypress").type('{enter}');
        cy. title().should("contain","cypress - Google Search");
        cy.url().should('include', '/search?');
        cy.get('.logo').click();
        cy.url().should('include','/www.google.co.in');
      });

      it(" Verify that clicking the search result will lead to the corresponding web page",function(){
        cy. title().should("contain","Google");
        cy.url().should('include','/www.google.co.in');
        cy.get('.SDkEP').type("cypress").type('{enter}');
        cy. title().should("contain","cypress - Google Search");
        cy.url().should('include', '/search?');
        cy.get('.logo').click();
      });
      
      });