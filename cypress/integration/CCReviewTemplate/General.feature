
Feature: CCReviewTemplate - General

  Background: 
    Given the user is on the product review page

    # As a user
    # I want to see the most important information discribing product at the very beginning of the page
    # So that I can have them at a glance

    Scenario: Basic product information
      Then the user should see the product title
      And the user should see the subtitle
      And the user should see the product description
      And the user should see the product picture

    Scenario: Complete product description
      When the user clicks on "Show more" button under short description
      Then the user should see the complete product description

    # As a user
    # I want to see the date of last page update
    # So that I know if the information on that page is still relevant

    Scenario: Page up-to-date indicator
      Then the user should see the date of last page update
      And the date should be dispayed with proper format

    # As a user
    # I want to follow my location on the page
    # So that I can navigate more easily

    Scenario: Displaying breadcrumbs
      Then the user should see the breadcrumbs at the top of the masthead

    Scenario: Breadcrumbs levels
      Then breadcrumbs consist of 4 levels

    Scenario: Breadcrumbs element behaviour
      Then all breadcrumbs levels are links

    # As a user interested in the product
    # I want to save the product information
    # So that I can get back to the product later

    Scenario: Saving the product
      When the user cliks on "Save this card for later" link
      Then the user should see the modal showing the bookmaring option

    # As a given product owner
    # I want to share my opinion on this product
    # So that other users can make better choices

    Scenario: Rating the product
      Then the user should see "Rate this card" link

    # As a user interested in the other similar products
    # I want to navigate through product category
    # So that I can browse related products

    Scenario: Dispalaying Explore category button
      Then the user should see the Explore category button

    Scenario: Exploring related products
      When the user clicks on Explore category button
      Then the user should see the list of similar products

    # As a user interested in the product
    # I want to see the expert product review
    # So that I can follow the trusted guidance

    Scenario: Displaying expert review 
      Then the user should see the expert review section
      And the user should see the title of the expert review
      And the user should see the actual review content

    # As a user 
    # I want to know the criteria the review has been based on
    # So that I understand expert's point of view better

    Scenario: Presenting review independence
      When the user clicks on "Why you can trust this review" button
      Then the user should see the modal with the information about the editorial independence

    # As a user interested in the product
    # I want to see information about the expert
    # So that the review is more reliable for me
    
    Scenario: Displaying Expert details
      Then the user should see the photo of the expert
      And the user should see the name of the expert
      And the user should see the email
      And the user should see the expert summary
      
    # Scenario: Displaying tooltip bubble
    #   When the user move the mouse over the i icon
    #   Then the user should see the tooltip bubble 

    # As a user interested in the product
    # I want to ask a question about the product and see the responses
    # So that I increase my awareness about the product

    Scenario: Displaying Ask an Expert section
      Then the user should see "Ask an Expert" section
      And the user should see "Ask a question" button
      And the user should see the responses to questions

    Scenario: Staff response counter
      Then the user should see the number of staff responses to the questions asked by the customers

    Scenario: Presenting single comment
      When there is a comment
      Then the user should see the author name
      And the user should see the author avatar
      And the user should see the date
      And the user should see the actual comment
      And the user should see "Reply" button

    Scenario: Non-logged-in user adding a comment
      Given the user is not logged-in
      Then the user should see the option to create an account

    Scenario: Asking question entry point
      Then the user should see "Ask a question" button
    
    Scenario: Presenting question form
      When the user clicks on "Ask a question" button 
      Then the user should see ask a question form

    Scenario: Typing a question
      Given the question form is visible
      Then the user should see the display name field
      Then the user should see the email field
      Then the user should see the question field
      Then the user should see the newsletter subscription checkbox
      Then the user should see the reply notification checkbox
      Then the user should see the "Log in with Facebook" button
      Then the user should see the "Submit question" button

    Scenario: Displaying question policy
      Given the question form is visible
      When the user clicks on "Your Question" field
      Then the user should see the question policy
      And the user should see "Accept and submit question" button
    
    Scenario: Accepting the question policy
      Given the user see the question policy
      When the user clicks on "Accept and submit question" button
      Then the question policy should disappear
      And the "Your Question" field should be focused

    Scenario: Displaying ask question disclimer
      Given the question form is visible
      Then the user should see the ask question disclaimer

    # As a user interested in product
    # I want to see the most important features of the product
    # So that I have the most important information available in the concise form

    Scenario: Displaying hotstats boxes
      Then the user should see the hotstats boxes
      And every box should present relevant information

    Scenario: Displaying product detail table
      Then the user should see the table with product details
      And each tab should present relevant information

    Scenario: Handling long descriptions
      When the user clicks on "Show more" button
      Then the user should see more information for the given section

    Scenario: Displaying desclaimer trigger button
      Then the user should see desclaimer trigger button
  
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

    Scenario: Displaying save for later modal
      Given the save for later modal is opened
      Then the user should see the title
      And the user should see the field with a link
      And the user should see the "Copy link" button
      And the user should see the email address field
      And the user should see the "Email me this card" button
      And the user should see the modal disclaimer
      And the user should see the close button

    Scenario Outline: Closing modal
      Given the save for later modal is opened
      When the user clicks on <element> modal closing trigger
      Then the modal should be closed

      Examples:
      | element      |
      | close button |
      | modal overlay|
    
    Scenario Outline: Entering email address
      Given the save for later modal is opened
      When the user enters <email_address> email address
      And the user clicks on "Email me this card" button
      Then the field should have <colour> border
      And the user should see the <message> message

      Examples:
      | email_address    | colour | message                                               |
      | test@example.com | green  | Success! We've emailed you a link to this product.    |
      | test             | red    | Not a valid email address                             |

    Scenario: Copying a link
      Given the save for later modal is opened
      When the user clicks on "Copy link" button
      And the user should see success message
      And the link should be present in a clipboard  

    @current
    Scenario: Displaying sidebar
      Given the sidebar is opened
      Then the sidebard should contain niche category menu
      And the sidebard should contain providers menu
      And the sidebard should contain tips box
      And the sidebard should contain calculator box
      And the sidebard should contain newsletter form
      And the sidebard should contain disclaimer

    Scenario: Presenting disclaimer
      Given the disclaimer is displaing
      Then the disclaimer should contain "Privacy & Cookies Policy" link
      Then the disclaimer should contain "Terms of Use, Disclaimer & Privacy Policy" link