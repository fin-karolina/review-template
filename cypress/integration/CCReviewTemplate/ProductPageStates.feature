Feature: Product page states

  Scenario: Active product & visible redirect CTAs

    Given the product has "GENERAL.ACTIVE" field set to "true"
    And the product has "GENERAL.HIDE_REDIRECT_CTA" field set to "false"
    Then the redirect CTAs should be visible
    And the hotstats should be visible
    And the infoboxes should be visible
    And the must read box should not be visible


  Scenario: Active product & hidden redirect CTAs

    Given the product has "GENERAL.ACTIVE" field set to "true"
    And the product has "GENERAL.HIDE_REDIRECT_CTA" field set to "true"
    Then the redirect CTAs should not be visible
    And the hotstats should be visible
    And the infoboxes should be visible
    And the must read box should not be visible


  Scenario: Inctive product

    Given the product has "GENERAL.ACTIVE" field set to "false"
    Then the redirect CTAs should not be visible
    And the hotstats should not be visible
    And the infoboxes should not be visible
    And the must read box should be visible


  Scenario Outline: Product data availability

    Given the product is <productState>
    And the redirects for the product are <redirectsState>
    Then the redirect CTAs should be <redirectCTAVisibility>
    And the hotstats should be <hotstatsVisibility>
    And the infoboxes should be <infoboxesVisibility>
    And the must read information should be <mustReadBoxVisibility>

    Examples:
      | <productState> | <redirectsState> | <redirectCTAVisibility> | <hotstatsVisibility> | <infoboxesVisibility> | <mustReadBoxVisibility> |
      | active         | active           | visible                 | visible              | visible               | hidden                  |
      | active         | inacitve         | hidden                  | visible              | visible               | hidden                  |
      | inactive       | n/a              | hidden                  | hidden               | hidden                | visible                 |


    Given the product has "GENERAL.ACTIVE" field set to "true"
    And the product has "GENERAL.HIDE_REDIRECT_CTA" field set to "false"
    And the product has no redirect link provided in "LINKS.REDIRECT_SLUG" field
    Then the redirect CTAs should  not be visible
    And the hotstats should be visible
    And the infoboxes should be visible
    And the must read box should not be visible