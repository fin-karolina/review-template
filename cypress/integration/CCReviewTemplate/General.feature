
@product-review
Feature: CCReviewTemplate - General

  Background: 
    Given the user is on a product review page

    @AUCCF
    Scenario: Basic product information
      Then the user should see the product title
      And the user should see the subtitle
      And the user should see the product description
      And the user should see the product picture
    
    @AUCCF
    Scenario: Complete product description
      When the user clicks on "Show more" button under short description
      Then the user should see the complete product description

    @Common
    Scenario: Page up-to-date indicator
      Then the user should see the date of last page update
      And the date should be dispayed with proper format

    @Common
    Scenario: Displaying breadcrumbs
      Then the user should see the breadcrumbs at the top of the masthead

    @Common
    Scenario: Breadcrumbs levels
      Then breadcrumbs consist of 4 levels

    @Common
    Scenario: Breadcrumbs element behaviour
      Then all breadcrumbs levels are links

    @Data-driven
    Scenario: Saving the product
      When the user clicks on "Save this card for later" link
      Then the user should see the modal showing the bookmaring option

    @Data-driven
    Scenario: Rating the product
      Then the user should see the "Rate this card" link

    @Common
    Scenario: Dispalaying Explore category button
      Then the user should see the Explore category button

    @Common
    Scenario: Exploring related products
      When the user clicks on Explore category button
      Then the user should see the list of similar products

    @Common
    Scenario: Displaying expert review 
      Then the user should see the expert review section
      And the user should see the title of the expert review
      And the user should see the actual review content

    @Common
    Scenario: Presenting review independence
      When the user clicks on "Why you can trust this review" button
      Then the user should see the modal with the information about the editorial independence

    @Common
    Scenario: Displaying Expert details
      Then the user should see the photo of the expert
      And the user should see the name of the expert
      And the user should see the email
      And the user should see the expert summary

    @Common
    Scenario: Displaying tooltip bubble
      When the user move the mouse over the i icon
      Then the user should see the tooltip bubble

    @Data-driven
    Scenario: Displaying hotstats boxes
      Then the user should see the hotstats boxes
      And every box should present relevant information

    @Data-driven
    Scenario: Displaying product detail table
      Then the user should see the table with product details
      And each tab should present relevant information

    @Common
    Scenario: Handling long descriptions
      When the user clicks on "Show more" button
      Then the user should see more information for the given section

    @AUCCF
    Scenario: Displaying desclaimer trigger button
      Then the user should see desclaimer trigger button
    
    @Common
    Scenario: Opening desclaimer
      Given the disclaimer trigger button is displayed
      When the user clicks on the disclaimer trigger button
      Then the disclaimer modal should be displayed

    @Common
    Scenario: Presenting disclaimer
      Given the disclaimer modal is displayed
      Then the disclaimer modal should have the title
      Then the disclaimer modal should have the content
      Then the disclaimer modal should have the close button in the header
      Then the disclaimer modal should have the close button in the footer

    @Common
    Scenario Outline: Closing disclaimer
      Given the disclaimer modal is displayed
      When the user clicks on <element> element
      Then the modal disclaimer should be closed 

      Examples:
      | element                | 
      | close button in header |
      | close button in footer |
      | modal overlay          |

    @Common
    Scenario: Template SEO properties
      Given the search engine bot is on the the product review page
      Then the bot should see the page title in H1
      And the bot should see the page subtitle in H2

    @Data-driven
    Scenario: Displaying save for later modal
      Given the save for later modal is opened
      Then the user should see the title
      And the user should see the field with a link
      And the user should see the "Copy link" button
      And the user should see the email address field
      And the user should see the "Email me this card" button
      And the user should see the modal disclaimer
      And the user should see the close button

    @Data-driven
    Scenario Outline: Closing save for later modal
      Given the save for later modal is opened
      When the user clicks on <element> modal closing trigger
      Then the modal should be closed

      Examples:
      | element      |
      | close button |
      | modal overlay|
    
    @Data-driven
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

    @Data-driven
    Scenario: Copying a link in save for later modal
      Given the save for later modal is opened
      When the user clicks on "Copy link" button
      And the user should see success message
      And the link should be present in a clipboard  

    @AUCCF
    Scenario: Presenting disclaimer in save for later modal
      Given the save for later modal is opened
      Then the disclaimer should contain "Privacy & Cookies Policy" link
      And the disclaimer should contain "Terms of Use, Disclaimer & Privacy Policy" link

    @Common
    Scenario: Displaying sidebar
      Given the sidebar is opened
      Then the sidebar should contain niche category menu
      And the sidebar should contain providers menu
      And the sidebar should contain tips box
      And the sidebar should contain calculator box
      And the sidebar should contain newsletter form
      And the sidebar should contain disclaimer

    @Common
    Scenario: Closing sidebar
      Given the sidebar is opened
      When the user clicks on the close button
      Then the sidebar should be closed

    @Common
    Scenario: Presenting disclaimer in the sidebar
      Given the sidebar is opened
      Then the disclaimer should contain "Privacy & Cookies Policy" link
      And the disclaimer should contain "Terms of Use, Disclaimer & Privacy Policy" link

    @Common
    Scenario: Wordpress content presence 
      Then the user should see page content below "Expert Review" box

    @AUCCF
    Scenario Outline: Wordpress expander structure
      Then the user should see the <sectionName> expander section
      
      Examples:
      | sectionName         |
      | How To Apply        |
      | Card Benefits       |
      | Key Features & Fees |

   
    @AUCCF
    Scenario: Expander section structure
      When the user see an expander section
      Then the user should see a section heading with icon
      And the user should see two list elements in expander fixed section
      And the user should see "Show more" expander button

    @AUCCF
    Scenario Outline: Presenting section followed by CTAs
      When the user see a "<sectionName>" section with CTAs
      Then the the section should be followed by "Go to" CTA
      And the the section should be followed by "More info" CTA

    Examples:
      | sectionName         |
      | How To Apply        |
      | Key Features & Fees |
    
    @Common
    Scenario: Having redirect links in correct form
      When the CTA button has a link
      Then the link must be a redirect link


    @AUCCF
    Scenario: Displaying T&C label in the masthead
      Then the user should see "Terms and conditions apply" label in the masthead

    @Data-driven
    Scenario: Displaying the offer ends in the masthead
      Then the user should see the "Offer Ends" date