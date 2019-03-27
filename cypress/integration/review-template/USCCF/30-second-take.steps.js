const heading30secondsSelector = '.creditCardMasthead__introText .creditCard__desktopInfo h4';

Then('the user should see 30-second take heading', () => {
  cy.get(heading30secondsSelector)
    .should('be.visible').and('not.be.empty')
})

Then('the user should see the list of three 30-second features', () => {
  cy.get(heading30secondsSelector)
    .nextAll('ul')
    .then($ulList => {
      expect($ulList).to.have.lengthOf(3)
      
      $ulList.each(
        $ul => expect($ul.innerText).to.not.be.empty
      )
    })
})
