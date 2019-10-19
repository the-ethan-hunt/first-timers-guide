# Vue CLI

Vue CLI is the standard basic tooling for Vue. Vue CLI can assist with creation of project templates, and with serving your project so you can see changes in near real-time.

## Pre-requisites

1. Install npm (This will be your package manager) which can be found at https://www.npmjs.com.
2. Open a terminal window and enter `npm install -g @vue/cli`. This will install the Vue CLI tools.
3. Then enter `npm install -g @vue/cli-service-global`. This will allow you to run your application.

###### Creating a Project

* The command to create a new project is `vue create <project-name>`. For this example let's make a project called my-first-project.
* Enter `vue create my-first-project` into your terminal.
* There are some configuration options that will display, but for now we are just going to hit enter to take the defaults, which are babel and eslint.
* Once the process completes, you will have a basic boilerplate project that you can use to learn and experiment with VueJs!

###### Running your Application

* In your terminal, `cd` into the directory containing your `app.vue` file.
* The command to initiate the server for this application is `npm run serve`. Enter this into your terminal window now.
* A message will display showing "App running at:" and list the local and network locations of your running application.
* Open a web browser and navigate to http://localhost:8080/ (Alternatively, you can click or control-click into the link in the terminal).
* Your application should display! This will also change in near real-time when you make and save changes to your application files.