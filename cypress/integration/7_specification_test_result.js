
describe("Verify specification of test results", function () {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    });
    it("Verify that the total number of results for the keyword is displayed",function(){
        cy.get('.SDkEP').type("cypress").type('{enter}');
        cy.get('#result-stats').contains(' results');
      });
      it("Verify that the time taken to fetch the result is displayed",function(){
        
        cy.get('#result-stats').contains('seconds)');
        cy.go(-1);
      })
});


