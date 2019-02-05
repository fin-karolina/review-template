Given('the user is on the product review page', () => {
  cy.visit('/american-express-explorer-credit-card-review')
})

// Tooltip test - doesn't work
// When('the user move the mouse over the i icon', () => {
//   cy.get('.i_infobox_tooltip:eq(0)').trigger('mouseover').as('tooltipBubble')
// })

// Then('the user should see the tooltip bubble', () => {
//   cy.get('@tooltipBubble').should('have.class', 'tippy-active')
// });
