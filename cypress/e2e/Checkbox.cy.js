/// <reference types="Cypress" />
describe("Checkbox fuctionality", () => {
  it("Checkbox demo", () => {
    cy.visit("https://www.ebay.co.uk/")
    cy.get("input#gh-ac").type("iphone", { delay: 100 })   
    cy.get("input#gh-btn").click()
    cy.get("input[type='checkbox'][aria-label='Apple iPhone 11']").check()


    
    
    
  });
});


