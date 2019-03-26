Given('the user is on a product review page', () => {
  cy.visit('/citi-clear-platinum')
})

Then(/the user should see "(.+)" link/, (linkLabel) => {
  cy.contains(linkLabel)
    .should('exist')
    .and('have.attr', 'href')
})