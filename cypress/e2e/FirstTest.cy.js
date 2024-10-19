/// <reference types="Cypress" />
describe("Launch Application", () => {
  it("Launch the test application", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("input[name='username']").type("test1");
    cy.get("input[name='password']").type("test22");
    cy.screenshot("Homepage");  
    
  });
});
