# ABOUT THIS EXERCISE: FLEX PANELS <br>

This is a gallery images using flexbox. When a user clicks over an image, it will expand the image and show the hidden text, and the rest of images will shink to adjust to the main container.


### UI
1 div container with 4 div panels. Each one will have 3 paragraphs that express an idea or a short phrase. Each panel will have a background image that we need to set up in the CSS. Images are attached on this folder.


## Functionality 
You will need to add a click event listener for each one of the panels. When the user clicks on the panel, an `open` class will be added. And this functionality will revert when the user clicks on the panel on `open` state so it switches back to normal state. <br>

Also, you will need a transitioned event listener for each one for each one of the panels. When the user clicks on the panel and it toggles open class, it will add an `open-active`class that you would use to refer so the paragraphs can show in an zoom in effect by using transformY(0) to transformY(100%) property. 

<br>

### How would this be possible?
In your CSS, you will note that panels styles has a `transition` property that will transition the flex property. When this transition takes place, that will be listened by your JS.


## Javascript Topics:
1. Use of Document interface to query elements from DOM
2. Event listeners
2. Classlist

## CSS Topics
1. Flexbox
2. Transition
3. Translate

## Resources
Credits to @wesBox
1. https://javascript30.com/  -> Here's the recording guided.


## Community
#### Share your solution with us in Slack channel! 
#### Remember we're a 24/7 group chat - if you have a question feel free to add it in the Slack channel

#### [Join WWCode Front End](https://join.slack.com/t/womenwhocodefrontend/shared_invite/zt-1ovx677mt-6seRyqmOAcIuaydyB4DWSA)
#### [Javascript Study Group Slack channel ](https://womenwhocodefrontend.slack.com/archives/C0324MXBHSP)
