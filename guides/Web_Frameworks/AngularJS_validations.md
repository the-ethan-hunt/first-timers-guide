# AngularJS

Angular is a Javascript framework that is used to build web applications.It is primarily used for client side applications. It is Developed & Maintained by Google.
It is mainly used for Single Page Application SPAs, where the whole page doesn't reload again and again to generate the view.

### Why AngularJS?
 * AngularJS is used to build Single Page Applications.
 * AngularJS code is unit-testable.
 * AngularJS uses dependency injection and make use of separation of concerns.
 * AngularJS supports Two-way data binding.

# AngularJS Routing
In AngularJS, routing is what allows you to create Single Page Applications. AngularJS routes enable you to create different URLs for different content in your application. AngularJS routes allow one to show multiple contents depending on which route is chosen.

### Create Angular Project
Follow these commands in you terminal
 * Run command bower i angular--save
 * Run bower init,press enter till you are ready to run another command.
 * Run bower i angular -route,to start doing routing in your projects.
 * You can either run the above command or use the CDN for routing,you have to include it in your main index.html file.
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>

### In order to implement routing the following main steps have to be implemented in your application in any specific order.
* Add a dependency to the ngRoute module from within your application.
  Eg. var module = angular.module("sampleApp", ['ngRoute']);
 
* Now create a js file for mentioning all the routes.
Eg. sampleApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        
        templateUrl:'./views/firstview.html'
    }) .when('/user',{
        templateUrl:'./views/userview.html'
      
    })
}) 
* Include this js file in your index.html page so that it can have access to all the routes.
* Make sure you add your routes with ng-href and not just href.
  Eg. <a ng-href=""></a>
* Make you add <ng-view></ng-view> in your HTML file where ever you wanted your view to be rendered.
 
 #### Example Code
 app.config(function($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix('');
     $routeProvider 
    .when("/", { 
        template : `<h1>This is a view</h1> 
                       <p> 
                       You are inside a view 
                       </p>` 
    }) 
    .when("/users", { 
        templateUrl :'./views/usersview.html'
    }) 
    .otherwise({ 
        template : `<h1>404 ERROR/h1>` 
    }); 
}); 

   
 
 To know more about AngularJS Routing follow https://docs.angularjs.org/tutorial/step_09
