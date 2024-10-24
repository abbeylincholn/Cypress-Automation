/// <reference types="Cypress" />
describe("ScrollIntoView fuctionality", () => {
  it("ScrollIntoView1", () => {
    cy.visit("https://www.amazon.co.uk/");  
    cy.get(':nth-child(1) > ul > .nav_first > .nav_a').scrollIntoView()
       
  });

  it('ScrollIntoView2', () => {
    cy.visit('https://www.amazon.co.uk/')
    //document.querySelectorAll('[role="list"]').item(5);  // console    
    cy.get('[role="list"]').eq(5).scrollIntoView()    
  })

  it('ScrollIntoView3', () => {
    cy.visit('https://www.amazon.co.uk/')    
    cy.get('[role="list"]').eq(2).scrollIntoView()
  })

});
