Feature: data-driven template components

  Scenario: Applying for the product
    Given the user is on the active product review page
    Then the redirect CTA buttons should be visible
    And the CTA buttons should point to redirect page

  Scenario: Displaying the offer ends in the masthead
    Then the user should see the "Offer Ends" date

  Scenario: Saving the product
    When the user clicks on "Save this card for later" link
    Then the user should see the modal showing the bookmaring option

  Scenario: Rating the product
    Then the user should see the "Rate this card" link

  Scenario: Displaying hotstats boxes
    Then the user should see the hotstats boxes
    And every box should present relevant information

  Scenario: Displaying product detail table
    Then the user should see the table with product details
    And each tab should present relevant information

  Scenario: Displaying save for later modal
    Given the save for later modal is opened
    Then the user should see the title
    And the user should see the field with a link
    And the user should see the "Copy link" button
    And the user should see the email address field
    And the user should see the "Email me this card" button
    And the user should see the modal disclaimer
    And the user should see the close button

  Scenario Outline: Closing save for later modal
    Given the save for later modal is opened
    When the user clicks on <element> modal closing trigger
    Then the modal should be closed

    Examples:
      | element       |
      | close button  |
      | modal overlay |

  Scenario Outline: Entering email address in save for later modal
    Given the save for later modal is opened
    When the user enters <email_address> email address
    And the user clicks on "Email me this card" button
    Then the field should have <colour> border
    And the user should see the <message> message

    Examples:
      | email_address    | colour | message                                            |
      | test@example.com | green  | Success! We've emailed you a link to this product. |
      | test             | red    | Not a valid email address                          |


  Scenario: Copying a link in save for later modal
    Given the save for later modal is opened
    When the user clicks on "Copy link" button
    And the user should see success message
    And the link should be present in a clipboard

  Scenario: Presenting disclaimer in save for later modal
    Given the save for later modal is opened
    Then the disclaimer should contain "Privacy & Cookies Policy" link
    And the disclaimer should contain "Terms of Use, Disclaimer & Privacy Policy" link
