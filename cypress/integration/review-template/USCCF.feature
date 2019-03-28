@USCCF:product-review
Feature: USCCF review page

  Background:
    Given the user is on a product review page

  Scenario: Displaying a sitewide disclaimer
    Then the user should see the sitewide disclaimer

  Scenario: Sitewide disclaimer elements
    Given the sitewide disclaimer is displayed
    Then the sitewide disclaimer should consist of text and a link
    And the sitewide disclaimer link should point to the "How we make money" page

  Scenario: Displaying finder's star rating
    Then the user should see finder's star rating

  Scenario: Finder's star rating elements
    Given finder's star rating is displayed
    Then finder's star rating should consist of a heading and stars

  Scenario: Displaying 30-second take
    Then the user should see the 30-second take

  Scenario: 30-second take elements
    Then the user should see 30-second take heading
    And the user should see the list of three 30-second features

  Scenario: Template SEO properties
    Given a search engine bot is on a product review page
    Then the bot should see the 30-second take heading in H4
    And the bot should see the section name from wordpress content in H3

  Scenario: Dispalying an advertiser disclosure
    Then the user should see the advertiser disclosure
    And the advertiser disclosure should be text

  Scenario: Displaying the disclaimer with Editorial note
    Then the user should see the disclaimer with the Editorial note in the page content

  Scenario: Displaying star rating legend
    Then the user should see the star rating legend at the bottom of the page content

    Scenario: Presenting disclaimer in save for later modal
      Given the save for later modal is opened
      Then the disclaimer should contain 'Privacy Policy' link
      And the disclaimer should contain 'Terms' link