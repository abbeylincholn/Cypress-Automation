/// <reference types="Cypress" />
describe("Checkbox functionality", () => {
  it("Checkbox demo", () => {
    cy.visit("http://omayo.blogspot.com/");   
    cy.get("input[type='checkbox']").check({ force: true })       
  });

  it("UnCheckbox demo", () => {
    cy.visit("http://omayo.blogspot.com/");   
    cy.get("input[type='checkbox']").uncheck({ force: true })       
  });

  it("Checkbox with value", () => {
    cy.visit("http://omayo.blogspot.com/");   
    cy.get("input[type='checkbox']").check(['blue', 'Laptop'], { force: true })       
  });


});


