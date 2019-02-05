
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
      When the user clicks on "Show more button" under short description
      Then the user should see the complete product description

    # As a user
    # I want to see the date of last page update
    # So that I know if the information on that page is still relevant

    Scenario: Page up-to-date indicator
      Then the user should see the date of last page update

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

    @current
    Scenario: Presenting single comment
      When there is a comment
      Then the user should see the author name
      And the user should see the author avatar
      And the user should see the date
      And the user should see the actual comment
      And the user should see "Reply" button

    