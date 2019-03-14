Cypress.Commands.add("visitReviewPage", () => {
  const reviewPageUrl = '/st-george-amplify-signature-qantas-review';

  

  cy.visit(reviewPageUrl)
})