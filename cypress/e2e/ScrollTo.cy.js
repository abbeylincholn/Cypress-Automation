/// <reference types="Cypress" />
describe("ScrollTo fuctionality", () => {
  it("ScrollTo", () => {
    cy.visit("https://www.amazon.co.uk/");  
    cy.scrollTo('bottom')  
    cy.scrollTo('top') 
    cy.scrollTo('center')   
    cy.scrollTo(0, 100)
   
  });
});
