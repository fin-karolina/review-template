Given('the user is on the product review page', () => {
  cy.visit('/american-express-explorer-credit-card-review')
})

// Tooltip test
When('the user move the mouse over the i icon', () => {
  // TODO: use a proper mouse over event once https://github.com/cypress-io/cypress/issues/10 is solved
cy.get('.i_infobox_tooltip:eq(0)').invoke('attr', 'tabindex', '0').trigger('focus')
})

Then('the user should see the tooltip bubble', () => {
  cy.get('.i_infobox_tooltip:eq(0)').find('span').should('have.class', 'tippy-active')
});


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

Then('the user should see the hotstats boxes', () => {
  cy.get('.hotStats').should('be.visible')
});

Then('every box should present relevant information', () => {
  cy.get('.hotStatsBox__content').each(($hotStatBox) => {
    cy.wrap($hotStatBox).should('not.be.empty')
  })
});

Then('the user should see the table with product details', () => {
  cy.get('.infoBox__table')
});

Then('each tab should present relevant information', () => {
  cy.get('.infoBox__tableWrapper [data-toggle="tab"]').each(($tabHeading) => {
    cy.wrap($tabHeading).click()
    cy.get($tabHeading.attr('href')).should('be.visible')
  })
});

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