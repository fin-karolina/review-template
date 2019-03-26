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