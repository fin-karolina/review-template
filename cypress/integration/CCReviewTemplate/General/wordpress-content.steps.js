Then('the user should see page content below "Expert Review" box', () => {
  cy.get('.expertBox + * .wordpressContent').should('exist')
});

Then(/the user should see the (.*) expander section/, (sectionName) => {
  cy.get('.wordpressContent .section-heading').contains(sectionName).should('exist')
});

When('the user see an expander section', () => {
  cy.get('.wordpressContent > .expander-root').as('contentExpanders')
});

Then('the user should see a section heading with icon', () => {
  cy.get('@contentExpanders').each(($contentExpander) => {
    const $sectionHeading = $contentExpander.find('.section-heading');
    const $sectionHeadingIcon = $sectionHeading.find('.luna-icon');
    const sectionHeadingText = $sectionHeading.text().trim()

    expect($sectionHeadingIcon).to.exist;
    expect(sectionHeadingText).to.not.be.empty;
  })
});

Then('the user should see two list elements in expander fixed section', () => {
  cy.get('@contentExpanders').each(($contentExpander) => {
    const $fixedSectionListElements = $contentExpander.find('.expander__fixedSection li');

    expect($fixedSectionListElements).to.have.lengthOf(2)
  })
});

Then(/the user should see "(.+)" expander button/, (buttonLabel) => {
  cy.get('@contentExpanders').each(($contentExpander) => {
    const $expanderTrigger = $contentExpander.find(".js-expander-trigger")

    expect($expanderTrigger).to.contain(buttonLabel)
  })
});

When('the user see a section with CTAs', () => {
  cy.get('.wordpressContent > .expander-root').eq(0).as('howToApplySection')
});

Then('the user should see "Apply now" CTA', () => {
  cy.get('@howToApplySection').contains('Apply Now').should('be.visible')
});

Then('the user should see "More info" CTA', () => {
  cy.get('.luna-section__content.wordpressContent .cta-root a').eq(1).should('be.visible')
});