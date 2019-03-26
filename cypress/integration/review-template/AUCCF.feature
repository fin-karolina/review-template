Feature: AUCCF review page

  Background:
    Given the user is on a product review page

  Scenario: Basic product information
    Then the user should see the product title
    And the user should see the subtitle
    And the user should see the product description
    And the user should see the product picture

  Scenario: Complete product description
    When the user clicks on "Show more" button under short description
    Then the user should see the complete product description

  Scenario: Displaying desclaimer trigger button
    Then the user should see desclaimer trigger button

  Scenario Outline: Wordpress expander structure
    Then the user should see the <sectionName> expander section

    Examples:
      | sectionName         |
      | How To Apply        |
      | Card Benefits       |
      | Key Features & Fees |

  Scenario: Expander section structure
    When the user see an expander section
    Then the user should see a section heading with icon
    And the user should see two list elements in expander fixed section
    And the user should see "Show more" expander button

  Scenario Outline: Presenting section followed by CTAs
    When the user see a "<sectionName>" section with CTAs
    Then the the section should be followed by "Go to" CTA
    And the the section should be followed by "More info" CTA

    Examples:
      | sectionName         |
      | How To Apply        |
      | Key Features & Fees |

  Scenario: Displaying T&C label in the masthead
    Then the user should see "Terms and conditions apply" label in the masthead