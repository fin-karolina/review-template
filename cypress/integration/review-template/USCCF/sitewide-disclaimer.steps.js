Then('the user should see the sitewide disclaimer', () => {
  cy.get('.creditCardMasthead__usSitewideDisclaimer').should('be.visble')
})

Given('the sitewide disclaimer is displayed', () => {
})

Then('the sitewide disclaimer should consist of text and a link', () => {
  cy.get('.creditCardMasthead__usSitewideDisclaimer').invoke('text').should('not.be.empty')
  cy.get('.creditCardMasthead__usSitewideDisclaimer a').should('be.visible')
})

Then('the sitewide disclaimer link should point to the "How we make money" page', () => {
  cy.get('.creditCardMasthead__usSitewideDisclaimer a')
    .invoke('attr', 'href')
    .should('be.equal', '/how-we-make-money')
})