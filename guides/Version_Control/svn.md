# SVN

## What is SVN?

SVN, which stands for _SubVersioN_, is a version control system developed and owned by apache. Its official name is Apache's SubVersion. So, SVN is basically a piece of software for managing projects among different users. Just like GitHub, to work with SVN, you have to host your projects somewhere remotely. The project directory in a remote place is known as the repository.
SVN is available on Windows, Linux and OSX as well. For installing it in Linux, simply run the command `apt-get install svn`(on Debian based distros) or `yum install svn`(for Fedora) or `pacman -S svn`(Arch and Arch based distros). In OSX, you can install it using homebrew. Make sure to use sudo if you aren't rooted.

## Basic SVN Commands

`svn co <repo> dir-name` : Command to pull data from the remote repository

`svn add`: Command used to add files. For eg, svn add 'filename.txt'

`svn commit`: Command for committing the files which user have added earlier using 'svn add' command

`svn update`: When it's time for publishing the local changes to the remote repository, use 'svn update' to publish it

`svn mkdir <repo>/dir_name`: To create a directory in remote repository

`svn list`: to list the current directories in a working copy

`svn status`: for showing the current status of the working copy

`svn delete PATH`: to delete a directory or a file 

## How to start an SVN project

After the arrival of git, svn's popularity decreased significantly. Nowadays, there is little to no use for svn.
Here I am going to show you how to start an svn project and start working on it.

**_PS: I will use a free repository from [RioUXsvn](https://riouxsvn.com). You can use this hosting provider too for practising svn. It's 100% free._**

First, we will get the repository link for cloning the repository in our local system. An svn directory on a local machine is called _working copy_. A repository link of Riouxsvn would look similar to this URL https://svn.riouxsvn.com/test12345-abdus/ (_abdus_ is my name, BTW)

Now we've got our URL. It's time to clone the repository. We will use the following command.

```bash
svn co https://svn.riouxsvn.com/test12345-abdus/ awesome_dir
```

You can use checkout instead of co. Both would work similarly.
Here, first, we are cloning the repository content and saving it in a new directory called `awesome_dir`. If you don't provide a directory name, svn will use your repository name as a new directory name.

By now, we have cloned our project locally. Now cd into it.

```bash
cd awesome_dir
```

Add some files to it. Here I am adding a new file called 'hello.txt' and adding content 'hello world'

```bash
echo 'hello world' > hello.txt
```

Now if you run `svn status`, you will see something like this

```bash
?       hello.txt
```

Here, `?` means it's not added yet. To add a file, we have to execute the command

```bash
svn add hello.txt
```

This will add hello.txt for commit. And the output will be,

```bash
A         hello.txt
```

`A` stands for Added.

Now it's time to commit our changes. To commit your changes, run

```bash
svn commit -m "Added hello.txt"
```

And we will get the following output

```bash
Adding         hello.txt
Transmitting file data .done
Committing transaction...
Committed revision 0.
```

Yoo!! We just committed our first change. Now your working copy is ready to be published to the remote repository. To do so, type

```bash
svn update
```

And enter your credentials when asked. You are done.

## git VS svn

Let's compare `git` commands to svn `svn` commands

| `git`                       | `svn`            |
|:--------------------------|:---------------|
| `git clone <repo>`          | `svn co <repo>` |
| `git add .`                 | `svn add *` _(wildcard for adding all un-added files)_
| `git commit -m "Message"`   | `svn commit -m "Message"`
| `git push`                  | `svn update`
| `git pull`                  | `svn update`
| `git status`                | `svn status`  
| `git log`                   | `svn log`
