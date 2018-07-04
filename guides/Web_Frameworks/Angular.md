# Angular

Angular is a Javascript framework that is used to build client side applications. It is Developed & Maintained by Google.
It is mainly used for Single Page Application SPAs, where the whole page doesn't reload again and again to generate the view.
Angular make use of Typescript language, which is a superscript of javascript (.ts).
As per now the latest version is Angular6. Google team has decided to upgrade the version twice a year.

### Why Angular?
 * Angular follows modular approach.
 * It uses making of components which can be reusable.
 * Angular allow Quicker and fast Development (using routings, templates and other features)
 * Angular can help in unit testing of code easily.

#### Prerequisites
  HTML, CSS , JS, TypeScript

### Angular Installation
For any Angular Project You will need few things installed on your machine beforehand. These are:- 
 1. Node.js 
 1. Npm
 1. Angular CLI - It is a command line interface which can be used to perform different operations 
    * To install angular CLI write- `npm install -g @angular/cli`
    
### Create Angular Project
Follow these commands in you terminal
 * `ng new my_app_name`  // it creates all the neccessary files for angular project.
 * `cd my_app_name`
 * `ng serve`           	// runs the server default on http://localhost:4200
 
 
 #### Building Blocks
 There are few main building blocks in Angular.
   * **Modules** - 
      These actually seperates our application logic and are used by app to manage feature area.
      There is atleast one module in every angular app - rootModule called as AppModule.

   * **Components** -
       Components are the class which interacts with templates and generate logic or data for the view.
       There is atleast one component in Angular - AppComponent
   * **Templates** -
       Templates are used by components to render the output on browser. It Defines the UI with HTML
   * **Metadata** -
       It tells how to process a class depending on decorators.
       Decorators are defined by angular they starts with `@` . They describe behaviour of the class.
       e.g @Component -> it means this class will be a component
   * **Data Binding** - 
       Data Binding is used by component and templates to exchange data. 
       If in template anywhere the value of a variable(firstName) changes, it will automatically detected by component and vice-versa.
   * **Directives** -
      These are angular attributes used for rendering in a specific way.
      There are some predefined directives like ngIf, ngClass.
      E.g If you want to loop through array use ngFor directive
   * **Services** -
      These seperate business logic of Application. eg- fetch data from server.
      It's good practice to maintain business logic in service class.
   * **Dependency Injection** -
      They are used by components to inject services.
      It is done with the use of a constructor.
      Before creating service, we have to specify that this service is injectable with decorator `@Injectable()`
   
 Learning these will help you to get a firm understanding of angular. 
 To know more about them Follow the link https://angular.io/guide/architecture 
