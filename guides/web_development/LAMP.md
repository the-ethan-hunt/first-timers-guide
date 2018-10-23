## OVERVIEW:

A LAMP Stack is a set of open-source software that can be used to create websites and web applications. LAMP is an acronym, and these stacks typically consist of the Linux operating system, the Apache HTTP Server, the MySQL relational database management system, and the PHP programming language.
Hence we will need to download the above in order to develop websites and web applications using the LAMP Stack.

### STEPS FOR INSTALLING LAMP:
Note: You will need sudo access for the commands in this article.

#### Step 1: Installing Apache
First, update your package manager.

`sudo apt-get update -y`
Install and start Apache.

`sudo apt-get install apache2 -y`
`sudo systemctl start apache2.service`
Verify that Apache was installed without errors by accessing it from your local browser. Enter `hostname -I` to obtain your IP address for the server and navigate to `http://SERVER_IP/.`



#### Step 2: Install MySQL
Enter the following into the shell/terminal prompt.

`sudo apt-get install mysql-server -y`
This will install the MariaDB database server (a fork of MySQL). You will be asked to enter a password for the MySQL root user, so go ahead and do that.

Then, run `sudo /usr/bin/mysql_secure_installation`. Press "`y`".

Depending on the level of security, you'll have the option to adjust the password complexity. For now, you'll be using the strong security preset.

For any of the following options, press "`y`" and continue.



#### Step 3: Installing PHP

To install PHP:

`sudo apt-get install php -y`



#### Step 4: Starting Apache and MySQL on boot

This is necessary to start your web environment on boot.

`sudo systemctl enable apache2.service`
`sudo systemctl enable mysql.service`

Finally, restart Apache to allow PHP to run.

`systemctl restart apache2.service`

#### Conclusion
That's it! You've successfully installed a LAMP stack




