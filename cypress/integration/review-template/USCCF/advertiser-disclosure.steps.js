Then('the user should see the advertiser disclosure', () => {
  cy.get('.disclaimer_text').should('be.visible')
})

Then('the advertiser disclosure should be text', () => {
  cy.get('.disclaimer_text').invoke('text').should('not.be.empty')

})