# Readme

The link to the website can be found here: [javascript project website](https://djonskanlyn.github.io/index.html).

The link to the project github can be found here: [javascript project github](https://github.com/djonskanlyn/djonskanlyn.github.io).

The website has a health and fitness theme and has 4 webpages:
* [home](https://djonskanlyn.github.io/index.html)
* [gallery](https://djonskanlyn.github.io/gallery.html)
* [FAQs](https://djonskanlyn.github.io/faqs.html)
* [meals](https://djonskanlyn.github.io/meals.html)

The general page structure is the same for all 4 pages. 

Each page is split into 5 sections (header, main, aside-1, aside-2, and footer) using flex-box styling.

The footer on each page has a copyright marker and the authors e-mail.

## Home Page

The [home](https://djonskanlyn.github.io/index.html) page deals with the primary purpose of the website; the explanation of the Basal Metabolic Rate (BMR). It features an embedded youtube video and a brief paragraph explaining the topic in the main section; an interactive BMR calculator in the first aside; and a form to register an account in the second aside. Both the calculator and registration form have in-form validations.

The **BMR calculator** asks the user to select their gender, and enter their age, height and weight. There are validations on age (between 16yo & 90yo); height (between 1.25m & 2.5m); and weight (between 40kg & 160kg). Hitting the calculate button triggers the validations. If there are validation issues the issue will appear in red below the calculator. If the validations are passed the BMR will appear in green below the calculator.

The **Registration Form** asks the user for their name; e-mail address; and asks them to create a password, which must be repeated. There is a check box that will show the password characters if checked. The validations for the form include:
* checking that all 4 inputs are populated;
* checking that a valid e-mail is submitted;
* checking that the password has at least 8 characters and contains at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character.
* checking that both password submissions match.

If there are validation issues the issue will appear in red below the registration form. If the validations are passed a success message will appear in green below the calculator.

## Gallery Page

The [gallery](https://djonskanlyn.github.io/gallery.html) page features an interactive slider with images of health foods. The images can be accessed by thumbnails below the currently selected image and by previous / next arrows on the selected image.



## FAQs Page

The [FAQs](https://djonskanlyn.github.io/faqs.html) page features 10 questions in an expanding accordion format. When the user clicks on the '+' symbol, the answer will expand. The answer will collapse when the user clicks on an expanded questions '-' symbol.


## Meals Page

The [meals](https://djonskanlyn.github.io/meals.html) page is linked to an [API](https://www.themealdb.com/api.php) that allows users to generate a random recipe, based on selecting a category of recipes to choose from, and clicking the "fetch a random meal" button. The name of the recipe, an image of the meal and the cooking instructions will appear.






