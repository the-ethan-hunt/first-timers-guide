# Git

[Git](https://git-scm.com/) is a free and open source version control system. It tracks changes to specific versions of code so that previous versions can be recalled and reinstated at a later date. It also makes it easy for multiple people to work on the same files without the risk of overwriting others’ work or losing files.

Git runs at the command line or through a git interface on your local machine. It keeps track of and maintains files in something called a ***repository*** or ***repo***. A key feature of Git is the ability to make branches. A ***branch*** is a separate copy of the source code that allows a user to try new features and implement code without directly affecting the master branch. When a branch has successfully implemented a revision, it can be ***merged*** back into the master branch. The revision is then officially a part of the original project.

# Git structure 
![alt text](https://image.slidesharecdn.com/gitbranchstregagycasestudywoogenius-140314152231-phpapp01/95/git-branch-stregagy-case-study-2-638.jpg?cb=1413975847 "Git structure ")

<sub><sup>Image used from Week 1 of FabAcademy's project managment online [course](http://fab.academany.org/2019/labs/barcelona/local/wa/week1/)</sup></sub>

This is the basic structure of a project that uses Git for version control:
* **Working Directory**: This is where you see all your files that can be modified and changed. Once you have made those changes, you can `git add` into the staging area.

* **Staging Area**: Think of this step as the loading dock for your code. You add files that have been changed to this step and ship them off with a commit into the local repository. 

* **Local Repository**: Location on your local machine where your code is hosted.

* **Remote repository**: Remote location your repository is being hosted, typically a remote host such as GitHub.


# Basic Git Commands

* `git init`: Create a new local repository
* `git clone <path to repo>`: Copy a remote repository on to your local machine.
* `git checkout -b <new branch name>`: Create a new branch to make changes that won't affect the master branch.
* `git add` or `git add <file name>`: Add a files or files into staging.
* `git commit -m "commit message"`: All files that have been staged, will be applied to the head of the local repository.
* `git status`: List the files that have been changed and the files that are ready to be staged/commited.
* `git push` and `git push origin <branch name>`: Push will send all commited changes to the repository. By adding the "origin" option, you will send the changes to your remote repository.
* `git pull`: Fetch and merge changes made on the remote repo to your working directory.

# References
More information on Git repository's:
* [Git](https://git-scm.com/docs)
* [GitHub's cheat sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

There are also Repository Management Services which host Git repositories online. The most popular are:
* [GitHub](https://github.com/)
* [Bitbucket](https://bitbucket.org/)
* [GitLab](https://about.gitlab.com/)
