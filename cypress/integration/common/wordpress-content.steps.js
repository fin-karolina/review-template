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

When(/the user see a "(.+)" section with CTAs/, (sectionName) => {
  cy.contains(sectionName).then(($sectionHeading) => {
    const $sectionRoot = $sectionHeading.parents('.expander-root');

    cy.wrap($sectionRoot).as('sectionRoot')
  })
});

Then(/the the section should be followed by "(.+)" CTA/, (buttonLabel) => {
  cy.get('@sectionRoot').next().contains('.luna-button', buttonLabel).should('be.visible')
});

Then(/the the section should contain "(.+)" CTA/, (buttonLabel) => {
  cy.get('@sectionRoot').contains('.luna-button', buttonLabel).should('be.visible')
});
