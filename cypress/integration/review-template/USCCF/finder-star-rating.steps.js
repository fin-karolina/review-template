Then("the user should see finder's star rating", () => {
  cy.get('.star-rating').should('be.visible')
})

Given("finder's star rating is displayed", () => {
})

Then("finder's star rating should consist of a heading and stars", () => {
  cy.get('.creditCard__desktopInfo .star-rating__starsContainer').should('be.visible')
  cy.get('.creditCard__desktopInfo .star-rating__text').should('be.visible')
})