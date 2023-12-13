## Simple Modal Web Page
This project demonstrates the creation of a simple web page featuring a button that, when clicked, triggers the appearance of a modal. The modal is designed with a darkened overlay to visually indicate that interaction with the underlying page is restricted while the modal is active.

## Project Structure
The project consists of three main files:

index.html: The HTML file contains the structure of the web page, including the button and the modal components.

styles.css: The CSS file provides styling for the web page, including background images, button appearance, modal layout, and overlay effects.

javascript.js: The JavaScript file handles the interactivity of the page. It ensures that the modal becomes visible when the button is clicked and can be closed either by clicking the 'X' button or clicking outside the modal.

## HTML Structure
The HTML file establishes the basic structure of the web page. It includes a button to open the modal and the modal itself, which comprises an overlay and content. The overlay serves to darken the background and prevent interactions with the underlying page when the modal is active.

## CSS Styling
CSS is used to style the various components of the web page. Notable styling features include:

Background Image: The background image is applied to the main container (main), creating a visually appealing backdrop.

Button Styling: The button is styled with a distinctive appearance, including a background color, padding, box shadow, and border-radius.

Modal Styling: The modal is positioned in the center of the page and styled with a background color, padding, and a fixed overlay to create a dimming effect.

## JavaScript Interaction
JavaScript is employed to make the web page interactive. The JavaScript file adds event listeners to the button and the 'X' button within the modal. When the button is clicked, the modal is toggled to become visible. Clicking the 'X' button closes it. The use of the DOMContentLoaded event ensures that the JavaScript code runs after the DOM is fully loaded.

## How to Use
1. Clone the repository.
2. Open the index.html file in a web browser.
3. Click the "Open Modal" button to trigger the appearance of the modal.
4. Click the 'X' button or outside the modal to close it.
