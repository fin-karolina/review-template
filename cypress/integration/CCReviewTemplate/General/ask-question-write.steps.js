Given('the user is not logged-in', () => {
});

Then('the user should see the option to create an account', () => {
  cy.get('.ask-question__introText a')
    .invoke('attr', 'href')
    .invoke('endsWith', '/user-profile')
    .should('be.true')
});

Then('the user should see "Ask a question" button', () => {
  cy.get('.ask-question__button').should('be.visible')
});

When('the user clicks on "Ask a question" button', () => {
  cy.get('.ask-question__button').click()
});

Then('the user should see ask a question form', () => {
  cy.get('#commentform').should('be.visible')
});

Given('the question form is visible', () => {
  cy.get('.ask-question__button').click() //powtorzony z innego scenariusza
});

Then('the user should see the display name field', () => {
  cy.get('#author').should('be.visible')
});

Then('the user should see the email field', () => {
  cy.get('#email').should('be.visible')
});

Then('the user should see the question field', () => {
  cy.get('#comment').should('be.visible')
});

Then('the user should see the newsletter subscription checkbox', () => {
  cy.get('#hive_newsletter_subscribe').should('be.visible')
});

Then('the user should see the reply notification checkbox', () => {
  cy.get('#subscribe-reloaded')
});

Then('the user should see the "Log in with Facebook" button', () => {
  cy.contains('Login with Facebook').should('be.visible')
});

Then('the user should see the "Submit question" button', () => {
  cy.get('.ask-question__wrapper').contains('Submit question').should('be.visible')
});

When('the user clicks on "Your Question" field', () => {
  cy.get('#comment').click()
});

Then('the user should see the question policy', () => {
  cy.get('.ask-question__warning').should('be.visible')
});

Then('the user should see "Accept and Submit" button', () => {
  cy.get('#commentform').contains('Accept and submit question').should('be.visible')
});

Given('the user see the question policy', () => {
  cy.get('.ask-question__button').click()
  cy.get('#comment').click()
});

When('the user clicks on "Accept and submit question" button', () => {
  cy.get('#commentform').contains('Accept and submit question').click()
});

Then('the question policy should disappear', () => {
  cy.get('.ask-question__warning').should('not.be.visible')
});

Then('the "Your Question" field should be focused', () => {
  cy.focused().should('have.id', 'comment')
});