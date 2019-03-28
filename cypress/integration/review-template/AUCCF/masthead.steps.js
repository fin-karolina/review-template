
Then('the user should see the subtitle', () => {
  cy.get('.creditCard__desktopInfo h2').should('be.visible')
})

Then('the user should see the product description', () => {
  cy.get('.creditCard__desktopInfo p').should('be.visible')
})

When('the user clicks on "Show more" button under short description', () => {
  cy.get('.creditCard__desktopInfo .js-expander-trigger').click()
})

Then('the user should see the complete product description', () => {
  cy.get('.creditCard__desktopInfo .is-expanded').should('exist')
})

Then('the user should see "Terms and conditions apply" label in the masthead', () => {
  cy.get('.productDetails__terms').should('be.visible')
})