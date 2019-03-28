Given('the save for later modal is opened', () => {
  cy.get('[data-modal-id="save-card-modal-1"]').click()
})

Then(/the disclaimer should contain '(.+)' link/), (linkLabel) => {
  cy.get('.creditCard__desktopInfo .terms').contains(linkLabel).should('have.attr', 'href')
}