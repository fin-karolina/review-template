Then('the user should see the wordpress content', () => {
  cy.get('.expertBox + * .wordpressContent').should('exist')
})