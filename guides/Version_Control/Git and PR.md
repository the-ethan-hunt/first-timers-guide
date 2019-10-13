Git has been one of the most famous Version control application in this century.
It works like taking screenshot of project which you are working on and storing it like every version control.
Git works on local machine and remote servers like github.
we follow a particular protocol in using git
**Pull requests**
    (Basic)(working only in master branch)
    1. It is a kind of request you make to the owner of the project when you have contributed to his/her project and want that contribution to be shown.
    First,we fork the repository.
    Second we clone repository into local systems.
    Then we configure git into our local system using config commands(assuming git is already installed).
    Next we add the file using 'git add' command.
    We then make our desirable changes and then we 'commit' it .
    then we push the file back to our remote server using 'git push origin master',where origin is repository name and master is the master branch.
    Then we send a pull request to the owner of the project. 

SLOC
git config –global user.email “[email address]”
git config –global user.name “[name]”
git clone https://github.com/the-ethan-hunt/first-timers-guide.git
git add "filename"
git commit -m “[ Type in the commit message]”  
git push

