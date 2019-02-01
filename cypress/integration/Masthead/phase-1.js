Given('the user is on the page', () => {
  cy.visit('/money/masthead-one-column-test-page')
})

Given(/the user is on the (.+) page/, (currentPageType) => {
  cy.log(currentPageType)

  cy.visit('/money/masthead-one-column-test-page')
})

Then('the user should see the title of the page', () => {
  cy.get('.masthead__text h1').should('be.visible')
})

Then('the user should see the subtitle of the page', () => {
  cy.get('.masthead__text h2').should('be.visible')
})

Then('the user should see the breadcrumbs at the top of the masthead', () => {
  cy.get('.breadcrumbExpander')
    .should('be.visible')

  cy.get('.masthead__header').find('.breadcrumbExpander')
    .its('length')
    .should('be.equal', 1);
})

Then(/breadcrumbs consist of (\d+) levels/, (levelNumber) => {
  cy.get('.breadcrumbExpander__level')
    .its('length')
    .should('be.equal', levelNumber)
})

Given('the breadcrumbs have any number of levels', () => {
  // cy.get('.breadcrumbExpander .breadcrumbExpander__level').its('length').should('be.gt', 0) -> Given shouldn't have an assertion
})

Then('all breadcrumbs levels except the last one are links', () => {
  cy.get('.breadcrumbExpander .breadcrumbExpander__level:not(:last-child)')
    .each(($breadcrumbItem) => {
      cy.wrap($breadcrumbItem).find('a')
        .should('exist');
    })
})

//Step below fails because the last breadcrumbs level is actually a link 
Then('the very last level is not a link', () => {
  cy.get('.breadcrumbExpander .breadcrumbExpander__level:last-child a')
    .should('not.exist');
})

Then('the user should see the date of last page update', () => {
  cy.get('.publ-date').should('be.visible')
})