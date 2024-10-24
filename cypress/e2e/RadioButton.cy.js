// /// <reference types="Cypress" />

// describe("Zoho Books Login Test", () => {
//   it("Login and verify redirection to dashboard", () => {
//     // Visit the initial logout page
//     cy.visit("https://www.zoho.com/uk/books/logout.html");

//     // Perform actions on the first origin (https://www.zoho.com)
//     cy.get(".zgh-login").click();
//     cy.get("#login_id").type("godwitusglobal@gmail.com");
//     cy.get("button#nextbtn").click();

//     // Now switch to the second origin (https://accounts.zoho.eu)
//     cy.origin("https://accounts.zoho.eu", () => {
//       // Perform actions on the second origin (https://accounts.zoho.eu)
//       cy.get("#password").should("be.visible").type("December25!");
//       cy.get("#nextbtn > span").click();
//     });

//     // Verify redirection to the dashboard
//     cy.url().should("include", "/home/gettingstarted");

//     // Now you can interact with elements on the dashboard page
//     cy.get("ul[class='nav nav-pills fill nav-bottom-spacing flex-column']>li:nth-of-type(10)").should("be.visible").click(); // Example interaction
//   });
// });



describe("Zoho Books Login Test", () => {
  it("Login and verify redirection to dashboard", () => {
    // Visit the initial logout page
    cy.visit("https://accounts.zoho.eu");   
    cy.get("#login_id").type("godwitusglobal@gmail.com");     
    cy.get("button#nextbtn").click();
    cy.get("#password").should("be.visible").type("December25!");
    cy.get("#nextbtn > span").click();

    // Now switch to the second origin (https://accounts.zoho.eu)
    cy.origin("https://accounts.zoho.eu", () => {
      // Perform actions on the second origin (https://accounts.zoho.eu)
      cy.get("#password").type("December25!");
      cy.get("#nextbtn > span").click();
    });

    // Verify redirection to the dashboard
    cy.url().should("include", "/home/gettingstarted");

    // Now you can interact with elements on the dashboard page
    cy.get("ul[class='nav nav-pills fill nav-bottom-spacing flex-column']>li:nth-of-type(10)").should("be.visible").click(); // Example interaction
  });
});
