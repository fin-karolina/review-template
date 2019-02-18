Then('the user should see desclaimer trigger button', () => {
  cy.get('.creditCardMasthead__headerContent .disclaimer_popup').should('be.visible')
});

Given('the disclaimer trigger button is displayed', () => {
});

When('the user clicks on the disclaimer trigger button', () => {
  cy.get('.creditCardMasthead__headerContent .disclaimer_popup').click()
});

Then('the disclaimer modal should be displayed', () => {
  cy.get('#disclaimer_popup').should('be.visible')
});

Given('the disclaimer modal is displayed', () => {
  cy.get('.creditCardMasthead__headerContent .disclaimer_popup').click()
});

Then('the disclaimer modal should have the title', () => {
  cy.get('.modal-header h3').should('be.visible')
});

Then('the disclaimer modal should have the content', () => {
  cy.get('.modal-body').should('be.visible')
});

Then('the disclaimer modal should have the close button in the header', () => {
  cy.get('.modal-header button').should('be.visible')
});

Then('the disclaimer modal should have the close button in the footer', () => {
  cy.get('.modal-footer a').should('be.visible')
});

When(/the user clicks on (.+) element/, (element) => {
  switch (element) {
    case 'close button in header':
      cy.get('.modal-header button').click()
    break;

    case 'close button in footer':
      cy.get('.modal-footer a').click()
    break;

    case 'modal overlay':
      cy.get('.modal-backdrop').click({ force: true })
  }
});

Then('the modal disclaimer should be closed', () => {
  cy.get('#disclaimer_popup').should('not.be.visible')
});