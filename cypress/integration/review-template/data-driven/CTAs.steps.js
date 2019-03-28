Given('the user is on the active product review page', () => {
  cy.visit('/american-express-explorer-credit-card-review')
});

Then('the redirect CTA buttons should be visible', () => {
  cy.get('.ctaButtonsWrapper:visible a').as('visibleCTAs')
  
  cy.get('@visibleCTAs').its('length').should('be.gt', 0)

})

Then('the CTA buttons should point to redirect page', () => {
  cy.get('@visibleCTAs').each(($ctaButton) => {
    const href = $ctaButton.attr('href');
    const target = $ctaButton.attr('target');
    const rel = $ctaButton.attr('rel');

    expect(href).to.match(/^\/redirect\/.+/)
    expect(rel).to.equal('nofollow')
    expect(target).to.equal('_blank')
  })
})
