describe("MouseOver Functionality", () => {
  it("MouseOver - Trigger", () => {
    // Visit the initial logout page
    cy.visit("https://www.amazon.co.uk/");
    cy.get("#nav_link_gift_cards > span:nth-child(1)").trigger("mouseover");
  });

  it("MouseOver - Invoke", () => {
    // Visit the initial logout page
    cy.visit("https://www.amazon.co.uk/");
    cy.get("#nav_link_gift_cards > span:nth-child(1)").invoke('show')  // use the immediate parent locator of the element you are trying to mouseover or see
    cy.get("#nav_link_gift_cards > span:nth-child(1)").click({force:true})
  });
});
