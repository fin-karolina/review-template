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


When('the user clicks on "Show more" button', () => {
  cy.get('.js-expander:visible').as('expanders')

  cy.get('@expanders').each(($expander) => {
    cy.wrap($expander).find('.js-expander-trigger').click()
  });
});

Then('the user should see more information for the given section', () => {
  cy.get('@expanders').each(($expander) => {
    cy.wrap($expander).find('.expander__expandableSection--animated')
      .should('have.attr', 'aria-expanded', 'true')
    
    cy.wrap($expander).find('.js-expander-trigger').should('contain', 'Show less')
  });
});