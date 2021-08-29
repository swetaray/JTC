describe("Verify Pagination", function () {
    before(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    });
    it("Verify that pagination is present in case number of results are greater than the maximum results allowed in a page",function(){
        cy.get('.SDkEP').type("cypress").type('{enter}');
        cy.scrollTo('bottom');
        cy.get('a[aria-label="Page 2"]');
      });
      it("Verify that user can navigate to a page number directly or move to previous or next page using the links present",function(){
        cy.get('a[aria-label="Page 2"]').click();
        cy.get('a[aria-label="Page 1"]').click();
        cy.get('.logo').click();
      })
    });