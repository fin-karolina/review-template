When(/the user cliks on "(.+)" link/, (linkLabel) => {
  cy.contains(linkLabel).click()
})

Then('the user should see the modal showing the bookmaring option', () => {
  cy.get('#save-card-modal-2-content').should('be.visible')
})

Given('the save for later modal is opened', () => {
  cy.get(`[data-modal-id="save-card-modal-2"]`).click()

  cy.get(`.js-modal.is-active`).as('modal')
});

Then('the user should see the title', () => {
  cy.get('@modal').within(() => cy.get('.js-emailCard-module .section-heading').should('be.visible'))
});

Then('the user should see the field with a link', () => {
  cy.get('@modal').within(() => cy.get('#product-url-cta-2').should('be.visible'))
});

Then('the user should see the "Copy link" button', () => {
  cy.get('@modal').within(() => cy.contains('Copy link').should('be.visible'))
});

Then('the user should see the email address field', () => {
  cy.get('@modal').within(() => cy.get('#email-card-input-cta-2').should('be.visible'))
});

Then('the user should see the "Email me this card" button', () => {
  cy.get('@modal').within(() => cy.contains('Email me this card').should('be.visible'))
});

Then('the user should see the modal disclaimer', () => {
  cy.get('@modal').within(() => cy.get('.terms').should('be.visible'))
});

Then('the user should see the close button', () => {
  cy.get('@modal').within(() => cy.get('.luna-modal__content [aria-label="Close modal"]').should('be.visible'))
});

When(/the user clicks on (.+) modal closing trigger/, (element) => {
  switch (element) {
    case 'close button':
      cy.get('@modal').within(() => cy.get('.luna-modal__content [aria-label="Close modal"]')).click()
      break;

    case 'modal overlay':
      cy.get('.js-modal.is-active').click('left', { force: true })
  }
});

Then('the modal should be closed', () => {
  cy.get('#save-card-modal-2-content').should('not.be.visible')
});

When(/the user enters (.+) email address/, (emailAddress) => {
  cy.log(emailAddress)
  cy.get('#email-card-input-cta-2').type(emailAddress)
});

When('the user clicks on "Email me this card" button', () => {
  cy.get('@modal').within(() => cy.contains('Email me this card').click())
});

Then(/the field should have (.+) border/, (colour) => {
  const classes = {
    'red': 'is-invalid',
    'green': 'is-valid'
  };

  cy.get('#email-card-input-cta-2')
    .should('have.class', classes[colour])
});

Then(/the user should see the (.+) message/, (message) => {
  cy.get('@modal').within(() => {
    cy.contains(message).should('be.visible');
  })
});

When('the user clicks on "Copy link" button', () => {
  cy.get('@modal').within(() => {
    cy.contains('Copy link').click()
  })
});

Then('the user should see success message', () => {
  cy.contains('Product link copied!').should('be.visible')
});

Then('the link should be present in a clipboard', () => {
  // TODO: implement once https://github.com/cypress-io/cypress/issues/2752 is resolved
});