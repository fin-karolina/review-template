
Then('the user should see the responses to questions', () => {
  cy.get('#comments').should('be.visible')
});

Then('the user should see the number of staff responses to the questions asked by the customers', () => {
  cy.get('.ask-question__responsesNumber')
    .invoke('text')
    .invoke('match', /^(\d+)/)
    .its('0')
    .then((staffResponses) => {
      const staffResponsesNumber = parseInt(staffResponses);

    cy.get('.comment-body--staff')
      .its('length')
      .should('be.equal', staffResponsesNumber)
    })
});

When('there is a comment', () => {
	cy.get('.comments__list li:first-of-type').then(($singleComment) => {
		if ($singleComment.length !== 0) {
			cy.wrap($singleComment).as('singleComment');
		} else {
			cy.wrap(null).as('singleComment');
		}
  });
});

Then('the user should see the author avatar', () => {
  checkCommentElementVisibility('.comment-author-avatar img')
});

Then('the user should see the author name', () => {
  checkCommentElementVisibility('.comment-author')
});

Then('the user should see the date', () => {
  checkCommentElementVisibility('.comment-author-data span:last-of-type')
});

Then('the user should see the actual comment', () => {
  checkCommentElementVisibility('.comment-content')
});

Then('the user should see "Reply" button', () => {
  checkCommentElementVisibility('.comment-reply-link')
});

function checkCommentElementVisibility(elementSelector) {
  cy.get('@singleComment').then(($singleComment) => {
	  if ($singleComment === null) {
	    return;
    }
    
    cy.get('@singleComment').find(elementSelector)
      .should('be.visible')
  })
}