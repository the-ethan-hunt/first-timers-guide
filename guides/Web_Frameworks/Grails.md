# Grails
Grails is a full stack MVC framework for building web application on the java platform.
Grails is an open source and is maintained by spring source and later by VMware.

Grails itself has scripting language that ties all these pieces together, called Groovy.
Groovy is java compatible language (similar to java) that gives java many modern features of python, ruby, Perl.

It uses "coding by convention" paradigm which provides developer an easy environment to create application but hides most of its technical functionality from the developer.

## Architecture
We need java virtual machine, java language and java SDK.
Strength of grails is the package of model-view-controller components that comes with it.
* Spring framework is core controller for grails.
* Hibernate is used for building data models and communicating with DB.
* Sitemash is template framework used by views.
* Grails is based on all these frameworks and groovy combine them all.  


![Grails Architecture](https://leanpub.com/site_images/grails3book/technologies-inside-grails.png)

## Installation

**Prerequisites:-** groovy and jdk

1. download grails from the website - https://grails.org/ 
1. unzip the folder and paste into C: drive
1. add grails folder's bin directory to the path in environment variables of system.
1. This completes installation of grails. To check type `grails -version` and you will see the version number.

There is an easy way of automated installation of grails using SDKMAN. 
Follow this official link of grails installation http://grails.org/download.html using SDKMAN.


### What is MVC
* Model - It is java object which stores our data that can be passed to view or controller for processing.

* Controller - It basically handles requests from front-end, kind of process the data. Controller can be created with command `create-controller` from terminal.

* View - To render a model, we need views. HTML, CSS, AJAX are used to build views in grails.

### Building first grails application

`grails create-app myFirstApp`

`cd myFirstApp`   change directory to our app

`grails run-app`  this will start a server at http://localhost:8080/ 
