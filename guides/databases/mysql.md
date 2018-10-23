## OVERVIEW:

MySQL is an open-source database management system, commonly installed as part of the popular LAMP (Linux, Apache, MySQL, PHP/Python/Perl) stack. It uses a relational database and SQL (Structured Query Language) to manage its data.

The short version of the installation is simple: update your package index, install the mysql-server package, and then run the included security script.

### STEPS FOR INSTALLING MySQL in LINUX:

#### Step 1: INSTALLING MySQL
To install it, simply update the package index on your server and install the default package with `apt-get.`

`sudo apt-get update`
`sudo apt-get install mysql-server`

You'll be prompted to create a root password during the installation. Choose a secure one and make sure you remember it, because you'll need it later. Next, we'll finish configuring MySQL.

#### Step 2 — Configuring MySQL
For fresh installations, you'll want to run the included security script. This changes some of the less secure default options for things like remote root logins and sample users. On older versions of MySQL, you needed to initialize the data directory manually as well, but this is done automatically now.

Run the security script.

`mysql_secure_installation`

This will prompt you for the root password you created in Step 1. You can press `Y` and then `ENTER` to accept the defaults for all the subsequent questions, with the exception of the one that asks if you'd like to change the root password. You just set it in Step 1, so you don't have to change it now. 

#### Step 3 — Testing MySQL
Regardless of how you installed it, MySQL should have started running automatically. To test this, check its status.

`systemctl status mysql.service`

If MySQL isn't running, you can start it with `sudo systemctl start mysql`.

For an additional check, you can try connecting to the database using the mysqladmin tool, which is a client that lets you run administrative commands. For example, this command says to connect to MySQL as root (-u root), prompt for a password (-p), and return the version.

`mysqladmin -p -u root version`
### OTHER FEATURES OF MongoDB
Document-oriented,File storage,Server-side JavaScript execution,Capped collections

### ADVANTAGES OF USING MongoDB 

It finds application in Bigdata,Datahub,Mobile Infrastructure Development,User Data Management.
One doesn't need much time to design database.
It is scalable and consistent in nature  It offers us freedom to run anywhere.
   

[MySQL INSTALLATION ON OTHER OS](https://www.tutorialspoint.com/mysql/mysql-installation.htm)

[MySQL TUTORIALS](https://www.w3schools.com/sql/)
