describe("Zoho Books Login Test", () => {
  it("Clear Functionality", () => {
    // Visit the initial logout page
    cy.visit("https://accounts.zoho.eu");   
    cy.get("#login_id").type("godwitusglobal@gmail.com").type('{selectall}{del}').clear();     
    
  });
});
