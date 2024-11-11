# Week 9 Lab

This weeks lab requires you to use the React Native Stack Navigation functionality to access multiple screens to capture and process data.
Although similar to the Swiper component the Stack Navigation will create a stack of screens, the current one being viewed is on the top of the stack.
As you move through the screens the screen previously being viewed is pushed back behind the current one on the Stack.
The stack navigation is more commonly used in examples found on the web and it integrates better with the phones UI using features such as the back button.
The goals for today's lab are:
- To use the Stack Navigation to access multiple screens
- To split up all the code into separate files which will allow better management of the code as it expands
- To adapt a hard-coded Picker list to use items from an array
- To add an image to a screen

# Part 1
Clone the repo and get the code working. Create a new file for the style called appstyles.js and place this file in the assets folder. Remove the styles
from App.js and place them in the new file. import the styles from the file and make sure the app still works.

# Part 2
Create two new files for each of the Register Screen the Color Picker Screen. Create these files in the folder components. Import these files and ensure the code still works.

# Part 3
Modify the register screen to include fields for firstname, surname, street, city and county. Make sure a useState() hook variable is present and operational for each field.

# Part 4
Modify the Color Picker to use an array rather than a hard-coded list of colors. Add a useState() hook called colorlist. Make sure it's set up as an array of different colors.
Look up an example of how to use array.map(item => { return <>} style of mapping thorough items in an array. You can also refer to the Cinema Example to see how this is done.

# Part 5
Add a logo to the home screen.
