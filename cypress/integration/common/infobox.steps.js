Then('the user should see the table with product details', () => {
  cy.get('.infoBox__table')
});

Then('each tab should present relevant information', () => {
  cy.get('.infoBox__tableWrapper [data-toggle="tab"]').each(($tabHeading) => {
    cy.wrap($tabHeading).click()
    cy.get($tabHeading.attr('href')).should('be.visible')
  })
});