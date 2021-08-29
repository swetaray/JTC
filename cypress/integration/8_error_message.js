

describe("Verify error message", function () {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    });
    it("Verify the error message when random long texts are entered with no search result",function(){
        cy.get('.SDkEP').type("nbnccmcmacmmammamammxmmmmmmnnmnmnm").type('{enter}');
        cy.get('[aria-level="3"]').contains("Your search - nbnccmcmacmmammamammxmmmmmmnnmnmnm - did not match any documents.");
      });
      it("Verify that no response is generated when search button is clicked with no text in the search textbox",function(){
        cy.go(-1);
        cy.get(".FPdoLc > center > .gNO89b").click();
        cy.url().should('include','/www.google.co.in');
      })
    });
