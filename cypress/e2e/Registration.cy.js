/// <reference types="Cypress" />
describe("Registration fuctionality", () => {
  it("Register new user", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");    
    // cy.get("a[href='register.htm']").click()    
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.wait(4000);
    cy.get("input[id='customer.firstName']").type('abbey')    
    cy.get("input[id='customer.lastName']").type('lincoln')       
    cy.get("input[id='customer.address.street']").type('bronte')
    cy.get("input[id='customer.address.city']").type('salford')
    cy.get("input[id='customer.address.state']").type('manchester')
    cy.get("input[id='customer.address.zipCode']").type('M6')
    cy.get("input[id='customer.phoneNumber']").type('07494939393')
    cy.get("input[id='customer.ssn']").type('abbey1')
    cy.get("input[id='customer.username']").type('abbey')
    cy.get("input[id='customer.password']").type('abbey10')
    cy.get("#repeatedPassword").type('abbey10')    
    cy.get("input[value='Register']").click()
    cy.screenshot("bankhome");


   
  });
});
