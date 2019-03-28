Then('the user should see the hotstats boxes', () => {
  cy.get('.hotStats').should('be.visible')
});

Then('every box should present relevant information', () => {
  cy.get('.hotStatsBox__content').each(($hotStatBox) => {
    cy.wrap($hotStatBox).should('not.be.empty')
  })
});