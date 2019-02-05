
Then('the user should see the breadcrumbs at the top of the masthead', () => {
  cy.get('.breadcrumbExpander').should('be.visible')

  cy.get('.creditCardMasthead__wrapper').find('.breadcrumbExpander')
    .its('length')
    .should('be.equal', 1);
})

Then('breadcrumbs consist of 4 levels', () => {
  cy.get('.breadcrumbExpander__level').its('length').should('be.eq', 4)
})

Then('all breadcrumbs levels are links', () => {
  cy.get('.breadcrumbExpander__level a')
    .each(($breadcrumbItem) => {
      cy.wrap($breadcrumbItem).should('have.attr', 'href')
    })
})

When(/the user cliks on "(.+)" link/, (linkLabel) => {
  cy.contains(linkLabel).click()
})

Then('the user should see the modal showing the bookmaring option', () => {
  cy.get('#save-card-modal-2-content').should('be.visible')
})

Then(/the user should see "(.+)" link/, (linkLabel) => {
  cy.contains(linkLabel)
    .should('exist')
    .and('have.attr', 'href')
})