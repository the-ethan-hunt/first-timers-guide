## Vue.js

## What is Vue Material? 
------------------------
Vue Material is the integration of Vue JS, an open source javascript framework, and Material Design specifications, together which can be used to build beautiful user interfaces. 

The official documentation can be found [here](https://vuematerial.io/). 

Vue Material offers a wide range components, UI elements, and themes which can be used in our applications.

## Vue Material Features
-----------
* Responsive - adapts to screen size and orientation
* Event Handling - does some action when an event is triggered. This can be done using v-on.
* CSS - allows to add styles and transitions to all components and divisions 
* Directives - reactively apply special effects to the DOM using v-for, v-if, and v-show
* Filters - apply common text formatting

## Vue JS preference over other JS Frameworks
---------------------------------------------
1.Clear documentation and syntax - the [Vue JS guide](https://vuejs.org/v2/guide/) is extremely well-documented and helpful.

2.Vue JS has separate sections for template, script, and styles, all in the same file. 

3.Vue JS has better readability - Eg: inside the script tag, we have a data() function to declare all the variables, a methods: {} object to define all methods, etc.

4.Vue is fairly new and is growing as a community.

## Installation
---------------
Vue Material may be installed via NPM or Yarn by running the following command in terminal:

```javascript
$ npm install vue-material --save <br>
OR <br>
$ yarn add vue-material
```

## Usage
--------
Once installed, Vue Material can be used in a project by including the statements:

```javascript
import VueMaterial from 'vue-material' <br>
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
```

To run a Vue Material project locally, navigate to the project folder in terminal and run: 
```javascript
$ npm run dev
``` 

Open **localhost:8080**

## Example
----------

### A simple example to demonstrate the use of Vue Material

1.Refer [this](https://sultaness.github.io/vue-material-app.html) step by step article to set up a Vue Material Project.

2.Once a project is set up, navigate to *src/App.vue* file and replace the content inside **div** tag with: 

```javascript
<md-button class="md-raised md-primary" v-on:click="showCount"> Click me </md-button>
<p> {{ message }}</p>
```
The Vue Material component we are using here is Button. The button has an event `v-on:click` which directs to a function `showCount` defined inside the script tag.

The `<p>` tag displays the message which gets modified inside `showCount` function.

3.Replace the contents inside the **script** tag with: 

```javascript
   export default {
  	 name: 'App',
  	 data () {
      return {
       count: 1,
       message: ''
      }
    },
     methods: {
      showCount() {
       if(this.count==1) {
      	this.message = `This button has been clicked once!`;
      	this.count++;
      }
       else
	this.message = `This button has been clicked ${this.count++} times!`;
    }
   }
 }
```

The variables `count` and `message` are declared in a return statement inside `data()` function. 

The method `showCount` is defined inside `methods : {}` object like all methods should be.

4.You may style the button using CSS. Including the following CSS class inside `<style>` tag changes button color to Royal Blue on click, and the text color to White. 

```javascript 
.md-button:focus {
background: #4169e1;
color: #fff;
}

```
5.If you want to view the complete project, you can do so [here](https://github.com/Sultaness/Simple-VueMaterial-demonstration).

## Want more examples?
Check these out!
<br>
* [Todo list](https://github.com/Sultaness/Todo-List-using-Vue-Material-)
* [Cryptocurrency tracker](https://github.com/Sultaness/Cryptocurrency-Tracker)

