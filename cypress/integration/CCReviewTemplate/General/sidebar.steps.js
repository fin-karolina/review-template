Given('the sidebar is opened', () => {
  cy.get('.sideNav__categoryName').click()
});

Then('the sidebar should contain niche category menu', () => {
  cy.get('#menu-credit-card-finder').should('be.visible')
});

Then('the sidebar should contain providers menu', () => {
  cy.get('.menu-credit-card-providers-container').should('exist')
});

Then('the sidebar should contain tips box', () => {
  cy.get('.light-box.popular').should('exist')
});

Then('the sidebar should contain calculator box', () => {
  cy.get('.calculator-sidebar').should('exist')
});

Then('the sidebar should contain newsletter form', () => {
  cy.get('.sidebar_email_signup').should('exist')
});

Then('the sidebar should contain disclaimer', () => {
  cy.get('#privacyDescription')
});

Then(/the disclaimer should contain "(.+)" link/, (linkLabel) => {
  cy.get('.sidebar-newsletter .disclaimer-text').contains(linkLabel)
    .should('have.attr', 'href')
})