
Feature: CCReviewTemplate - Product Active

  # As a user interested in product
  # I want to go to the checkout page
  # So that I can buy the product

  Scenario: Applying for the product
    Given the user is on the active product review page
    Then the redirect CTA button is visible
    And the CTA button should point to redirect page
