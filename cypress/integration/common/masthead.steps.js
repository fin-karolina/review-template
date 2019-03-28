Then('the user should see the product title', () => {
  cy.get('.creditCardMasthead__main h1').should('be.visible')
})

Then('the user should see the product picture', () => {
  cy.get('.productImage').should('be.visible')
})

Then('the user should see the date of last page update', () => {
  cy.get('.publ-date').should('be.visible')
})

Then('the date should be dispayed with proper format', () => {
  cy.get('.publ-date').invoke('text').then(dateString => {
    expect(
      Cypress.moment(dateString, 'D MMMM YYYY', true).isValid()
    ).to.equal(true)
  })
});

Then('the user should see the Explore category button', () => {
  cy.get('.sideNav__categoryName').should('be.visible')
})

When('the user clicks on Explore category button', () => {
  cy.get('.sideNav__categoryName').click()
})

Then('the user should see the list of similar products', () => {
  cy.get('.sideNav__tray').should('have.class', 'is-open')
})