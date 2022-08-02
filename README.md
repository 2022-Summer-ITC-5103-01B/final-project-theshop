## Assignment Name: : Project Phase one&two - Feature one&two


## Name: Alla-Anastasiia Gnatkiv


## Student Number: n01525207


## Tasks

- [x] Fully functional web pages with HTML, CSS and JavaScript



### Product-info page

## Implemented features by js

- "Add to Cart" Section:

    - changing styles of "weight" buttons when the user clicks (choose) a particular item weight.
      It works like a checkbox, so the user cannot choose two types of weight simultaneously to add them to the cart.

    - input button to select the quantity of the chosen item.
      The default value is 1. So the user can add 1 item to the cart. There are several options to change the quantity:
      + clicking on the minus button to decrement the quantity by one
      + clicking on the plus button to increment the quantity by one
      + enter manually the quantity of chosen item
    
    - validation of user choice.
      When the user clicks on the button "Add to cart", the user's data is validated. There are several possible results the user will get:
      + quantity of the item is not a number: the error will be shown to the user to enter an appropriate value, and the item will not be added to the cart
      + quantity of the item equals 0: the error will be shown to the user that it is not possible to add to the cart 0 items, the item will not be added to the cart
      + there is no chosen weight of the item: the error will be shown to the user that they should choose a desired weight of the item, and the item will not be added to the cart.
      + the weight of the item is chosen and the quantity is greater or equal to 1: the message will be shown to the user that the item was added to the cart successfully


- "Nutrition Table" Section:

    - hiding and showing the nutrition facts table.
      By default the nutrition facts table is visible but the user can change this by the "hiding and showing" button.
      When the user clicks on the minus button:
      + the nutrition facts table hides
      + the minus button becomes the plus button
      When the user clicks on the plus button:
      + the nutrition facts table becomes visible gradually (opacity level increasing gradually)
      + the plus button becomes the minus button


- "Review Submission" Section:

    - validation of the entered data in the review form
      If the user wants to submit their review they should enter their data in appropriate fields/inputs. The data is validated when the user clicks the "Submit Review" button. There are several scenarios:
      + the user did not enter the data in the nickname input: the error will be shown to the user that the input cannot be empty, and the review will not be submitted
      + the user did not enter the data in the summary input: the error will be shown to the user that the input cannot be empty, and the review will not be submitted
      + the user did not enter the data in the review input: the error will be shown to the user that the input cannot be empty, and the review will not be submitted
      + the user entered values to all the above-mentioned inputs: the review will be submitted to the "Customer Reviews" Section


- "Customer Reviews" Section:

    - posting submitted reviews from the "Review Submission" Section
      After the user clicks the Submit Review button the following happens:
      + all user entered data is retrieved and stored in the local storage as different objects, not strings. For each review - a separate object is in the local storage.
      + all data from the local storage is obtained by the function that creates a post for each review. In this way when the page is reloaded all posted reviews will be saved and visible on the page.



### Nuts page 
- //////////// unfinished explanation of Nuts page functionality

## Implemented features by js

- "Items" Section:
    - creating an item object in js
      As in the page are introduced 48 items it is crucial to create each item automatically but not manually in html. Thus there was created a function that creates a whole block of html elements in js that displays one item. Each item has three unique features: price, name, and image.
    
- //////////// unfinished explanation of Nuts page functionality



## Leaning curve and challenges


- creating a design, responsive web design for different screen sizes
- creating sort functions by price(numerically), product-name(alphabetically)
- filling the array of items, data of which were retrieved from HTML
- create a function that changes the order of elements in an array in a random way
- a lot of different implementations of toggle functions for making the page animated
- displaying an array of items in different order of elements
- creating HTML and CSS for showing/hiding elements
- using local storage to store there not strings but objects



## Resources


- https://stackoverflow.com/

- Murach's HTML5 and CSS3 4th Edition

- https://www.w3schools.com/js/

- https://developer.mozilla.org/