When('the user move the mouse over the i icon', () => {
  // TODO: use a proper mouse over event once https://github.com/cypress-io/cypress/issues/10 is solved
cy.get('.i_infobox_tooltip:eq(0)').invoke('attr', 'tabindex', '0').trigger('focus')
})

Then('the user should see the tooltip bubble', () => {
  cy.get('.i_infobox_tooltip:eq(0)').find('span').should('have.class', 'tippy-active')
});