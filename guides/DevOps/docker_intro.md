## Overview 

Docker is used by developers pretty much everywhere now, and chances are you will require it if you plan to contribute to Open Source. This article aims at introducing Docker in the simplest way possible. 

### Need for Docker

Why do developers need Docker? 
Before Docker was introduced, there used to be major discrepancies when a developer's code was deployed in production, which was essentially caused due to difference in computing environments. This led to wastage of a lot of time and effort. 
Also, organizations which worked on microservice architecture found it very costly to develop their software because each microservice would require a different Virtual Machine to run on top of the base OS. This caused a lot of wastage of resources such as RAM, processor and disk space. 

### How does Docker work? 

Docker deploys a separate *container* for **each** microservice on top of a **single** Virtual Machine. Actually, Docker containers are lightweight alternatives to Virtual Machines. One important thing to note here is that you do not need to pre-allocate any RAM to any of the containers; each container allocates as much RAM as that microservice requires, to itself.

### Docker Workflow

The developer writes code into an easy-to-write Docker file. This Docker file creates an *image*. Containers are just run-time instances of these Docker images. The image is pushed to Docker hub, an online repository from which others can pull them and set up the containers in their own machines.   