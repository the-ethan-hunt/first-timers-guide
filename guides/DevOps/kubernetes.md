# Kubernetes

Kubernetes(also written as K8s) is an open source system for automatic,scaling and management of [containerized applications](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization).It is the most popular tool among all currently present which is used mostly by all the major giants of the industry including Google who actually founded it,Amazon and Microsoft etc.

The Github repository of kubernetes project can be visited from [here](https://github.com/kubernetes/kubernetes)

Before knowing it further you must be aware of what actually a docker is,what are containers and containerized applications. 

## Why kubernetes ?

Kubernetes is a product of Google which was released in July 2015 after a decade and a half year long efforts by the team who were earlier facing difficulties with its own internal Borg system which had certain drawbacks.So they thought of creating something new which can be standardized and can be used by all and the result was kubernetes.

If you are aware of [docker compose](https://docs.docker.com/compose/) then you might also be aware that docker compose can't be put into production.It is a config file which is helpful in running all containers together but suppose that if it is used in production and if any container stops working (crashes for any reason) in middle then the whole application stops and it becomes a tedious task to restart.There were few other problems which can't be solved by docker compose  such as maintaining logs,scaling,monitoring etc

## Need of Orchestration Engine 

The work of orchestration engine starts from deployment of applications.There are various things that are taken care by it which can not be in case of docker compose.These can be

 * Storage domain 
 * Compute domain
 * Application provisioning
 * Monitoring 
 * Lifecycle Management

Kubernetes is one of the popular orchestration engine.Inspite of [docker swarm](https://docs.docker.com/get-started/part4/) which is a native cluster of docker,it has started releasing native support for kubernetes as well.
kubernetes provides an infrastructure to build a truly docker centric application environment.

## Some Cool features of kubernetes

These can be seen as

* Portable --> It is easy to migrate from one cloud to another by just changing the kubernetes configuration so no need to write complete deployment setup again
*  Extensible --> It is modular pluggable ,hookable and composable
* Self healing --> Auto placement, auto restart and auto scaling.If any container fails it tries to restart it so it goes again into production

## Installing into your system

For Mac users it is simple use command below 
```
brew install kubectl
```
It is easy if you use Google cloud CLI because it comes with kubectl by default which is an API to run it

You will also need minikube if you want to set up locally.
For more details on intallation on various platforms you can visit installation page docs [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## A little about Architecture

For architectural diagram you can visit [here](https://en.wikipedia.org/wiki/Kubernetes#/media/File:Kubernetes.png)

From diagram above we can see that there are two different types of nodes one is master while others are workers .The master is responsible for controlling the worker nodes.Master node is responsible for scaling up and down in case of load increasing both on the front end and back end as well.It has also another important aspect called Etcd which is backing store for all the cluster data.We can have more than one master node in case of big applications to reduce chances of failure.

### Worker nodes
* Contains multiple pods
* They are running kubelet service which ensures communication with the master

## kubectl command review
```
get pods
create -f ./pod.yaml
describe pod<name>
get services
port-forward<name>container:host
exec <name> --stdin --tty  -c <name> <command>
create configmap<key><value>
logs -c<name>
```

References

https://kubernetes.io/

https://en.wikipedia.org/wiki/Kubernetes

https://github.com/kubernetes/kubernetes
