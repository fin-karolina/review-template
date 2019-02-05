Then('the user should see the product title', () => {
  cy.get('.creditCardMasthead__main h1').should('be.visible')
})

Then('the user should see the subtitle', () => {
  cy.get('.creditCard__desktopInfo h2').should('be.visible')
})

Then('the user should see the product description', () => {
  cy.get('.creditCard__desktopInfo p').should('be.visible')
})

Then('the user should see the product picture', () => {
  cy.get('.productImage').should('be.visible')
})

When('the user clicks on "Show more button" under short description', () => {
  cy.get('.creditCard__desktopInfo .js-expander-trigger').click()
})

Then('the user should see the complete product description', () => {
  cy.get('.creditCard__desktopInfo .is-expanded').should('exist')
})

Then('the user should see the date of last page update', () => {
  cy.get('.publ-date').should('be.visible')
})

Then('the user should see the Explore category button', () => {
  cy.get('.sideNav__categoryName').should('be.visible')
})

When('the user clicks on Explore category button', () => {
  cy.get('.sideNav__categoryName').click()
})

Then('the user should see the list of similar products', () => {
  cy.get('.sideNav__tray').should('have.class', 'is-open')
})