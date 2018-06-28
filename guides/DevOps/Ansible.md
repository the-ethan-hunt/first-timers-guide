# Overview

First of all DevOps is a working model that involves developers and operations to collaborate and improve productivity.DevOps consits of various tools and Ansible is one such tool.

# What is Ansible ?

Ansible is a Redhat tool for automating configuration using YAML as programming language and ssh as communication.

# How does Ansible work ?

First your admin client connects to your target service via ssh you do not need to setup any agents on the machine,all you need is peyten and a user that can log in and execute a script.Then ansible starts gathering facts about the machine,this can be checked like what operating system is installed,what services are running,what packages are installed etc and then ansible is going to run a palybook on the server,for example it can assign a webserver role that would install nginx and some firewall rules,it can also run any kind of tasks like deleting a temp folder.Finally you can use variables to make your deployments dynamic and reusable.For example you could set up a database connection string in your configuaration files depending on the enviornment you deploy in.    
