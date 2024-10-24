describe("Upload Functionality", () => {

  it("Upload Files REL PATH", () => {
    //document.querySelectorAll("form").item(10).querySelector("input[type='file']")

    cy.on("uncaught:exception", (err, runnable) => {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
    });  

    cy.visit("https://only-testing-blog.blogspot.com/");
    cy.get("form").eq(10).find('input[type="file"]').scrollIntoView();
    cy.get("form")
      .eq(10)
      .find('input[type="file"]')
      .selectFile("cypress\\FILE\\CV\\A\\CV_IT.pdf");   
  });

  it("Upload Files ABSO PATH", () => {

    cy.on("uncaught:exception", (err, runnable) => {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
    });

    cy.visit("https://only-testing-blog.blogspot.com/");
    cy.get("form")
      .eq(10)
      .find('input[type="file"]')
      .selectFile("C:\\Users\\Engr. Abbey\\Desktop\\Software Testing\\AB.JPG");
  });
});
