Then('the user should see "Ask an Expert" section', () => {
  cy.get('.ask-question').should('be.visible')
});

Then(/the user should see "(.+)" button/, (buttonLabel) => {
  cy.contains(buttonLabel)
    .should('exist')
});
