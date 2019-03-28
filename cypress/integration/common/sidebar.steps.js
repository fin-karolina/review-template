Given('the sidebar is opened', () => {
  cy.get('.sideNav__buttonAction').click()
});

Then('the sidebar should contain niche category menu', () => {
  cy.get('#menu-credit-card-finder, menu-credit-cards-guides').should('be.visible')
});

Then('the sidebar should contain providers menu', () => {
  cy.get('#menu-credit-card-providers, #menu-credit-cards-providers').should('exist')
});

Then('the sidebar should contain calculator box', () => {
  cy.get('.calculator-sidebar').should('exist')
});

When('the user clicks on the close button', () => {
  cy.get('.sideNav__closeButton').click()
});

Then('the sidebar should be closed', () => {
  cy.get('#sideNav__tray').should('not.be.visible')
});