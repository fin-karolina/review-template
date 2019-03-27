Given('a search engine bot is on a product review page', () => {
})

Then('the bot should see the 30-second take heading in H4', () => {
  cy.get('.creditCard__desktopInfo h4').should('exist')
})

Then('the bot should see the section name from wordpress content in H3', () => {

})