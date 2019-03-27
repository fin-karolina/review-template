@product-review
Feature: common scenarios applicable for all credit cards niches

  Background:
    Given the user is on a product review page

  Scenario: Page up-to-date indicator
    Then the user should see the date of last page update
    And the date should be dispayed with proper format

  Scenario: Displaying breadcrumbs
    Then the user should see the breadcrumbs at the top of the masthead

  Scenario: Breadcrumbs levels
    Then breadcrumbs consist of 4 levels

  Scenario: Breadcrumbs element behaviour
    Then all breadcrumbs levels are links

  Scenario: Dispalaying Explore category button
    Then the user should see the Explore category button

  Scenario: Exploring related products
    When the user clicks on Explore category button
    Then the user should see the list of similar products

  Scenario: Displaying expert review
    Then the user should see the expert review section
    And the user should see the title of the expert review
    And the user should see the actual review content

  Scenario: Presenting review independence
    When the user clicks on "Why you can trust this review" button
    Then the user should see the modal with the information about the editorial independence

  Scenario: Displaying Expert details
    Then the user should see the photo of the expert
    And the user should see the name of the expert
    And the user should see the email
    And the user should see the expert summary

  Scenario: Displaying tooltip bubble
    When the user move the mouse over the i icon
    Then the user should see the tooltip bubble

  Scenario: Handling long descriptions
    When the user clicks on "Show more" button
    Then the user should see more information for the given section

  Scenario: Opening desclaimer
    Given the disclaimer trigger button is displayed
    When the user clicks on the disclaimer trigger button
    Then the disclaimer modal should be displayed

  Scenario: Presenting disclaimer
    Given the disclaimer modal is displayed
    Then the disclaimer modal should have the title
    Then the disclaimer modal should have the content
    Then the disclaimer modal should have the close button in the header
    Then the disclaimer modal should have the close button in the footer

  Scenario Outline: Closing disclaimer
    Given the disclaimer modal is displayed
    When the user clicks on <element> element
    Then the modal disclaimer should be closed

    Examples:
      | element                |
      | close button in header |
      | close button in footer |
      | modal overlay          |

  Scenario: Template SEO properties
    Given the search engine bot is on the the product review page
    Then the bot should see the page title in H1
    And the bot should see the page subtitle in H2

  Scenario: Displaying sidebar
    Given the sidebar is opened
    Then the sidebar should contain niche category menu
    And the sidebar should contain providers menu
    And the sidebar should contain tips box
    And the sidebar should contain calculator box
    And the sidebar should contain newsletter form
    And the sidebar should contain disclaimer

  Scenario: Closing sidebar
    Given the sidebar is opened
    When the user clicks on the close button
    Then the sidebar should be closed

  Scenario: Presenting disclaimer in the sidebar
    Given the sidebar is opened
    Then the disclaimer should contain "Privacy & Cookies Policy" link
    And the disclaimer should contain "Terms of Use, Disclaimer & Privacy Policy" link

  Scenario: Wordpress content presence
    Then the user should see page content below "Expert Review" box

  Scenario: Having redirect links in correct form
    When the CTA button has a link
    Then the link must be a redirect link


