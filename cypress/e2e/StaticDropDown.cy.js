/// <reference types="Cypress" />
describe("Static dropDown fuctionality", () => {
  it("Register new user", () => {
    cy.visit("http://omayo.blogspot.com/"); 
    cy.get('#drop1').select(0)
    cy.wait(3000)
    cy.get('#drop1').select('doc 2')
    cy.wait(3000)
    cy.get('#drop1').select('doc 4')  

   
  });
});
