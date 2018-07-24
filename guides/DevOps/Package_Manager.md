# Package Manager

A [**Package Manager**][1] is a collection of software tools that automate the process of installing, upgrading, configuring, and removing computer programs in a synchronize manner! A software package comes in the form of archive file containing a program as well as necessary metadata including package description, package version, and dependencies for its deployment. This package management system also provides software mainly in source code that has to be compiled and built first. Thus each package manager relies on the format and metadata of the packages it can manage.

**Package Management fall under 3 categories:**

- SPM (OS/system package manager) - [dpkg][2], [APT][3], [pacman][4] ...
- LPM (Language package manager) - [npm][5], [pip][6], [yarn][7] ...
- PDM (Project/application dependency manager) - [npm][5], [conda][8] ...

> For a complete list of package managers, check [here][9]!

## NPM

###### Node.js Package Manager

Let us take a step back and exclude all the nitty-gritty small details and environment quirks, and focuses on the high-level architecture of a package manager, in an effort to stay succinct. Let's choose a particular package manager (say [_**npm**_][5]) for our understanding!

###### Why _NPM_?

Among the most obvious reasons, here's a list of few of those:

- The **npm** registry is currently the largest package manager system in the world & contains more than double the next most populated package registry.
-  Among 350,000 package management altogether, users installed more than 18 billion packages via **npm** modules.
- Every week roughly 160 people publish their first package in the aforementioned registry.
- **npm** acts as a programming library and package manager for Node.js and JavaScript (world's most popular programming language according to the [Stack Overflow Developer Survey 2018][10])

> _**npm**_ acts as both Language Package Manager & Application Dependency Manager

If you want to automate the process of installing the relevant dependencies  for your next project, you can leverage the power of **npm**!

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/package.png?ssl=1&w=450)

With the help of npm, we can install packages both locally as well as globally with respect to the project! In case of local installation, we can manage all the dependencies by creating a **package.json** file in the root directory of your project folder by simply executing the following command:

`npm init`

**npm** is making huge strides into the world of front-end development by shifting its user base from writing Node.js to becoming a tool that people use to put JavaScript together on the front-end!

## Brief History of Package Managers

Software developers today are used to relying on a number of open source libraries to help them focus on the functionality that’s important to their business rather than requiring them to find and download each of those libraries individually. But if we step back in a brief history to a time before any of these modern package managers existed, there was an earlier form of package management for Linux Kernel. In fact, Linux distributions have provided package managers for nearly 25 years now.

In 1993, the earliest examples of what you might call a package manager began to appear! Some of these early package managers stood the test of time! Debian still uses **dpkg** and Red Hat still uses **rpm**; both of these are what we call **system package manager**!

> Today, application package managers sit beside your system package manager and frequently allow you to have different versions of the library for different applications you’re working on. This decoupling makes development easier and reduces some of the compatibility burdens of the past!

[1]: https://en.wikipedia.org/wiki/Package_manager
[2]: https://en.wikipedia.org/wiki/Dpkg
[3]: https://en.wikipedia.org/wiki/Advanced_Packaging_Tool
[4]: https://en.wikipedia.org/wiki/Pacman_(package_manager)
[5]: https://en.wikipedia.org/wiki/Npm_(software)
[6]: https://en.wikipedia.org/wiki/Pip_(package_manager)
[7]: https://en.wikipedia.org/wiki/Yarn_(software)
[8]: https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)
[9]: https://en.wikipedia.org/wiki/List_of_software_package_management_systems
[10]: https://insights.stackoverflow.com/survey/2018/#technology