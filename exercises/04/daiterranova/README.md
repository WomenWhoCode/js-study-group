# Instructions

ABOUT THIS EXERCISE: FLEX PANELS

This is a gallery images using flexbox. When a user clicks over an image, it will expand the image and show the hidden text, and the rest of images will shink to adjust to the main container.
UI
1 div container with 4 div panels. Each one will have 3 paragraphs that express an idea or a short phrase. Each panel will have a background image that we need to set up in the CSS. Images are attached on this folder.
Functionality

You will need to add a click event listener for each one of the panels. When the user clicks on the panel, an `open` class will be added. And this functionality will revert when the user clicks on the panel on `open` state so it switches back to normal state.
Also, you will need a transitioned event listener for each one for each one of the panels. When the user clicks on the panel and it toggles open class, it will add an `open-active` class that you would use to refer so the paragraphs can show in an zoom in effect by using transformY(0) to transformY(100%) property.
How would this be possible?
In your CSS, you will note that panels styles has a `transition` property that will transition the flex property. When this transition takes place, that will be listened by your JS.
Javascript Topics:

1. Use of Document interface to query elements from DOM
2. Event listeners
3. Classlist
   CSS Topics
4. Flexbox
5. Transition
6. Translate
   Resources
   Credits to @wesBox
7. https://javascript30.com/ -> Here's the recording guided.
