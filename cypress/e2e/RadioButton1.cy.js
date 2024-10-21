/// <reference types="Cypress" />
describe("Radio button functionality", () => {
  it("Radio button demo", () => {
    cy.visit("http://omayo.blogspot.com/");   
    cy.get("input[type='radio'][value='Bike']")
      .scrollIntoView()           
      cy.get("input[type='radio'][value='Car']").check({ force: true })
  });
});
