# Vagrant 
Vagrant is open source tool for working with virtual environments.Vagrant acts as a wrapper for virtual environment configuration which is too tedious to do and thus provides an easy and efficient solution to manage VMs(virtual machines).It provides a command line interface with its own custom configuration and automates task with a few commands.One thing to always keep in mind is that it is not a replacement of VM but an efficient solution built over top of virtualization setup.

# Installing Vagrant
Vagarant is open source project which is available for all the platforms.You can easily download it from their official download [page](https://www.vagrantup.com/downloads.html).It is also available as repo in the package manager for various linux distribution like fedora,ubuntu
For fedora distribution you can run
```
sudo dnf install vagrant
```
For ubuntu distribution use can run the following command into your terminal
```
sudo apt-get install vagrant
```
But remember the version can be outdated on these default package mangers. So the best approach is to head over to the official download page given above.The github repo of the vagrant can be vistied from [here](https://github.com/hashicorp/vagrant).The best way to learn vagrant is try your hand by installing it on your own system .You  can also learn from invaluable [documentation](https://www.vagrantup.com/docs/) provided by the Hashicorp team.

# Why should one choose it ?
There are many reason to use vagrant. It is very helpful in setting up the environment which is same for development and production so that there would be not any excuse thereafter with a developer that ***it does work on my machine***.It is very helpful to set up the environment which works same on all the machines irrespective of the different host machines so therefore there would be no chaos for different OS, or different softwares among differnet devs.It consist of interpreter for text based environment in the form of vagrant files which contains all the confurigations for the setup.If for some reason the virtual machine corrupts the vagrant file can be shared with the others so that it will be easy for them to run the setup again within less time rather than completely reinstalling the OS and the necessary tools again to build the environment.

# Basic Terminologies
Vagrant comes with a command line interface which helps to set up the virtual environments and it provides an abstraction over the different commands and  configurations of the different VM tools as it does them internally on its own.

The basic terms can be understood from here

* Box: Boxes are the packaged vagrant environments typically a virtual machines 
* Provider: A provider is the location in which the virtual environment runs. It can be local, remote, or even a docker container.The default local environment is  virtual box(as it is free) but ofcourse it can be configured for other hypervisors.
* Provisioner: A provisioner is a tool to set up the virtual environment, which can be a shell script, but we can use also other provisioning tools like chef,puppet and ansible.

# Basic Vagrant Commands and their descriptions
* vagrant ssh SSH into virtual machine.
*  vagrant up. Start virtual machine.
* vagrant share. Share your virtual machine to the world via a temporary and unique url.
* vagrant halt. Halts virtual machine.
* vagrant destroy. Destroy your virtual machine
* vagrant provision Reconfigure the virtual machine after a source code change.
* vagrant reload Reload the environment again.

# References
https://opensource.com/resources/vagrant
https://www.vagrantup.com/docs/cli/
https://www.drupal.org/node/2008794
