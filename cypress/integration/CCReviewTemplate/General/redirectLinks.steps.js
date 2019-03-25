When('the CTA button has a link', () => {
  cy.get('[href^="/redirect"]:not([href*="redirect/hpot"]').as('CTAs');
});

Then('the link must be a redirect link', () => {
  cy.get('@CTAs').each(($cta) => {
    const url = $cta.attr('href');

    expect(url).to.match(/\/redirect\/(.+)\/(.+)\.html\?redirect_tracking_params=.+/)
  });
});