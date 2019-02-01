Feature: Masthead

#Phase 1

  # As a user
  # I want to see the page name
  # So that I know this page matches to what I'm looking for

  Scenario: Displaying basic page information
    Given the user is on the page
    Then the user should see the title of the page
    And the user should see the subtitle of the page

  # As a user   
  # I want to follow my location on the page
  # So that I can navigate more easily 

  Scenario: Displaying breadcrumbs
    Given the user is on the page
    Then the user should see the breadcrumbs at the top of the masthead

  Scenario Outline: Breadcrumbs levels 
    Given the user is on the <Current_page_type> page
    Then breadcrumbs consist of <Number_of_levels> levels

    Examples:
    | Current_page_type | Number_of_levels |
    | group             | 2                |
    | niche home        | 3                |
    | category          | 4                | 

  Scenario: Breadcrumbs element behaviour
    Given the user is on the page
    And the breadcrumbs have any number of levels
    Then all breadcrumbs levels except the last one are links
    And the very last level is not a link 
 
  #Scenario below isn't covered by the test, because masthead is only on the single test page
  Scenario Outline: Breadcrumbs link destination 
    Given the user is on the <Current_page_type> page
    When the user clicks on <Level_number> breadcrumbs level
    Then the user is redirected to <Destination_page_type> location

    Examples:
    | Current_page_type| Level_number | Destination_page_type |
    | group page       | 1st          | home                  |
    | niche home page  | 1st          | home                  |
    | niche home page  | 2nd          | group page            |
    | category page    | 1st          | home                  |
    | category page    | 2nd          | group page            |          
    | category page    | 3rd          | niche home page       |

  # As a user
  # I want to see the date of last page update
  # So that I know if the information on that page is still relevant
  
  Scenario: Page up-to-date indicator
    Given the user is on the page
    Then the user should see the date of last page update
