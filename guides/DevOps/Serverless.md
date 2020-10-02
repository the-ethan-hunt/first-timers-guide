## Serverless

### Introduction

As the growth in cloud technology has changed the software product delivery life cycle to large extent. The developers have started getting more independance for development as well as fast results of production/deployment problems. But still, enterprises have to maintain dedicted team for regulating software deployment. The giant cloud providers like AWS, GCP are providing a cloud solution which may remove complete dependancy of server configuration. This is serverless. Now developers can develop softwares without caring of server setup.

#### In simple words

If you are required to have a database for youe company. You will configure a machine or set of machines with software like MySQL, Cassandra(any dataabase application). You will also assign appropriate disk space and other hardware configuration for your server. But If you go for serverless approach you are not required to configure anything. Just come create a table and start using database. Yes!! It is that simple. 

### AWS Lambda Functions

I tried explaining the serverless analogy using databases. But imagine if you dont need to specify any configuration for your production code. AWS lambda is a service provided by AWS where you can bring your code and just deploy it. AWS will take care of all scaling it. Currently AWS Lambda supports code in only these languages
* Node JS
* JAVA
* Python
* Go
* .Net
* Ruby

### How it helps you

Imagine you are a ticketing website enterprise. Suppose you guys are going to launch a new program's ticket. And you are not aware about traffice you may receive. You being a startup can not buy huge data center so ofcourse you will go for Cloud technology. But you will have to maintain a team that will configure you datacentre in the cloud. Apart from that you will have to change the configuration of cloud due to uneven traffic. Instead of handling this all traffic by yourself, you can ask Serverless technology to configure every thing for you. All you have to do is just provide your business logic(code) and rest all will be handled by Cloud provider. 

You can play with AWS lambda using following link
https://aws.amazon.com/lambda/