Then('the user should see the expert review section', () => {
  cy.get('.expertBox').should('be.visible')
}); 

Then('the user should see the title of the expert review', () => {
  cy.get('.expertBox__review h2:not(.section-heading)').should('be.visible')
});

Then('the user should see the actual review content', () => {
  cy.get('.expertBox__review .expander__fixedSection').should('be.visible')
});

When('the user clicks on "Why you can trust this review" button', () => {
  cy.get('[data-modal-id="independence-manifest-modal"]').click()
});

Then('the user should see the modal with the information about the editorial independence', () => {
  cy.get('#independence-manifest-modal-content').should('be.visible')
});

Then('the user should see the photo of the expert', () => {
  cy.get('.expertBox__photo').should('be.visible')
});

Then('the user should see the name of the expert', () => {
  cy.get('.expertBox__info h3:not(.authorName)').should('be.visible')
});

Then('the user should see the email', () => {
  cy.get('.emailLink')
    .invoke('attr', 'href')
    .invoke('match', /^mailto:.+@finder\.com$/)
    .should('not.equal', null)

  //   .as('emailAddress')
    
  // cy.get('@emailAddress').invoke('statsWith', 'mailto:').should('be.true')
  // cy.get('@emailAddress').invoke('endsWith', '@finder.com').should('be.true')
});

Then('the user should see the expert summary', () => {
  cy.get('.expertBox__summary p').should('be.visible')
});
