# Node Js

## What is Node JS?

**Node** JS is a runtime based on **Chrome's** V8 engine. People often confuse it with a framework or a language. But it's neither of them. Originally written by **[Ryan Dhal](https://en.wikipedia.org/wiki/Ryan_Dahl)** and later developed by **[Joyent, Inc](https://www.joyent.com/node-js/support)** was after 13 years of introduction to server-side programming using Javascript. What Ryan does is, he took out Chrome's V8 engine and wrapped it inside a C++ program.
Node JS has the world's largest package ecosystem called **[npm](https://npmjs.org)**. NPM is a package manager built for using packages developed by other developers in a project. There are other package managers too. for example, yarn.

## *Out of the Box* modules

Node JS comes with a few modules pre-installed. Here I am listing a few.

`http`: http module is used to create http servers.

`path`: As the name suggests, it's used for working with 'path'

`os`: OS module is used to get the information of the system where we are running our app.

So, these are a few modules with which you will work too frequently. Node JS isn't just limited in this modules. Using NPM or YARN, you can install a lot of modules and use them in your project.

## Frameworks

Node JS comes with a lot of back-end frameworks. For example, for creating servers we will use **[Express.js](https://expressjs.com)** which is a framework for handling back-end tasks like routing etc. Express was built by **TJ Holowaychuk** who is one of the members of the core Node JS team.
There are lots of other frameworks as well. Like **Hapi.js** for building APIs.

## Creating `http` server

So, now we are gonna create our http server using the basic http module which ships with Node JS. And then we will create another server using Express JS.

### http server 

```javascript
const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);
```

Here, first, we required `http` module. Then we create a server object, `http.createServer`. createServer accepts a callback function which again accepts two arguments called `req, res`.
`res` allows us to call another method 'write' using which we can write to the browser.
At last, we are calling `listen()` to enable our app to listen to the port we specify.
So, this is how we create an http server using the default http module.

### express server

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);
```

First, install `express` using `npm install express` in your working directory or `npm instal -g express` for installing globally. `require()` it using `require()`. Now we have to call `express()` in another constant called `app`(or whatever you wanna name it). `app` gives us a method called `get` which performs a get request in a URL. `get` requires at least two parameters to work correctly, a path where it will perform get req and a callback function. Again callback function accepts two arguments `req` and `res`. req gives us a method called `send` which enables us to send data to the requested URL. Finally, we call `listen()` for listening to a specific port.

So, this is how we create a basic server in Node Js.