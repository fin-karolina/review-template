Given('the user is on a product review page', () => {
  let url;

  switch(Cypress.env('NICHE_CODE')) {
    case 'USCCF':
      url = 'https://fus.staging-01.finder.tools/usccf-test-page';
      break;

    case 'AUCCF':
    default: 
      url = 'https://www.staging-01.finder.tools/citi-clear-platinum';
  }
  cy.visit(url)
})

Then(/the user should see "(.+)" link/, (linkLabel) => {
  cy.contains(linkLabel)
    .should('exist')
    .and('have.attr', 'href')
})