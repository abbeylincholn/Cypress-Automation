/// <reference types="Cypress" />
describe("Dynamic dropDown fuctionality", () => {
  it("Register new user", () => {
    //cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})

    cy.visit("https://www.delta.com", {
      headers: { "Accept-Encoding": "gzip, deflate" },
    });
    cy.get("div[class='row']>a:first-of-type").click();
    cy.get("modal-container[class='modal show']").should("be.visible");
    // cy.get('input#search_input').click().clear().type("LON", { delay: 200 });
    const input = cy.get("#search_input");
    input.should("be.visible");
    input.click();
    input.clear();
    input.type("LON", { delay: 200 });
    cy.get(".search-result-container span:first-child").each(
      ($el, index, $list) => {
        cy.log($el.text());
        if ($el.text().trim() === "LHR") {
          cy.wrap($el).click();
          //OR
          //$el.trigger("click")
        }
      }
    );

    // OR

    // cy.contains('.search-result-container span:first-child', 'LHR')
    // .should('be.visible')                              // wait up to 4s
    // .click()
  });
});
