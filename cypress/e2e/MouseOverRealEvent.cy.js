describe("MouseOver Functionality", () => {
  it("MouseOver - ReadEvent", () => {
    // Visit the initial logout page
    cy.visit("https://www.amazon.co.uk/");
    cy.get("#nav_link_gift_cards > span:nth-child(1)").realHover();
  });
});
