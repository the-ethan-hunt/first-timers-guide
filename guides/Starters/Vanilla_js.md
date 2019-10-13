## Overview:
The term Vanilla in english is termed as *"anything having no special or extra features"*. Vanilla javascript is basically plain old JavaScript. It's a fast and lightweight framework, which enables one to build incredible and powerful web applications. It is a framework which makes use of JavaScript without any libraries but it sacrifices code legibility and features in order to achieve better performance and simplicity.

#### When should you use Vanilla JavaScript?
Vanilla JavaScript is suitable for simple web applications or [static websites](https://en.wikipedia.org/wiki/Static_web_page).
#### How to get started using Vanilla Javascript:
In order to use JavaScript, you'll need to create a HTML file, and include a script tag in the body of your document:
`<script src="path/to/vanilla.js"></script>`

**Your HTML file should look a little something like this:**
```html
<!doctype html>
<html>
  <head>
    <!-- Header content (e.g. title, metadata, css, etc) -->
  </head>
  <body>
    <p id="random"></p>
    <button onclick="generateRandomNumber()">Randomize</button>
    <script src="./vanilla.js"></script>
  </body>
</html>
```
**Here is an example JavaScript file to get you started (place this in the same folder as your HTML file (name it vanilla.js):**
This script will simply generates a random number when a button is pressed.
```js
// Save our target element to the variable 'textbox'.
const textbox = document.getElementById('random');

// Defines our function to edit the textbox.
function generateRandomNumber() {
  // This changes the 'inner text' of the element.
  textbox.innerText = Math.floor(Math.random() * 10);
  
  /* Math.floor will round the number, while Math.random will 
     generate a number between 0 and 1, so we multiply it by 10 to
     get a bigger number that is less than or equal to 10. */
}
```
#### Resources to learn Vanilla JavaScript:
**Interactive:**
[Codecademy - JavaScript Courses](https://www.codecademy.com/catalog/language/javascript)
**Articles:**
[MDN Web Docs - JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[w3schools - JavaScript Tutorial](https://www.w3schools.com/js/)
[Best Resources to Learn Vanilla JavaScript from Scratch - Jake Rocheleau](https://designmodo.com/learn-vanilla-javascript/)
