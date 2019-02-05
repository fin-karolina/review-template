Given('the user is on the active product review page', () => {
  cy.visit('/american-express-explorer-credit-card-review')
});

Then('the redirect CTA button is visible', () => {
  cy.get('.creditCardMasthead__asideContent')
    .contains('Find out more')
    .should('be.visible');
})

Then('the CTA button should point to redirect page', () => {
  cy.get('.creditCardMasthead__asideContent')
    .contains('Find out more')
    .as('ctaButton')

  cy.get('@ctaButton').should('have.attr', 'rel', 'nofollow')

  cy.get('@ctaButton') // cy(jq)
    .invoke('attr', 'href') // cy(string)
    .invoke('startsWith', '/redirect') // cy(bool)
    .should('be.true')
  // cy.get('@ctaButton').invoke('attr', 'href')
  //   .should('match', /^\/redirect/)
})
