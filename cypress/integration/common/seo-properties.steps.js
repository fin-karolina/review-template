Given('the search engine bot is on the the product review page', () => {
});

Then('the bot should see the page title in H1', () => {
  cy.get('h1').should('be.visible')
    .and('not.empty')
});

Then('the bot should see the page subtitle in H2', () => {
  cy.get('h2').should('be.visible')
    .and('not.empty')
});