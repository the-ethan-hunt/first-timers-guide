# Intro

---

>**PHPMyAdmin** is a free software tool written in PHP, intended to handle  the administration of MySQL over the Web. phpMyAdmin supports a wide range  of operations on MySQL and MariaDB. Frequently used operations (managing  databases, tables, columns, relations, indexes, users, permissions, etc) can  be performed via the user interface, while you still have the ability to  directly execute any SQL statement.

### Features provided by the program include:


- Web interface

- MySQL and MariaDB database management

- Import data from CSV and SQL

- Export data to various formats: CSV, SQL, XML, PDF (via the TCPDF library), ISO/IEC 26300 OpenDocument Text and Spreadsheet, Word, Excel, LaTeX and others

- Administering multiple servers

- Creating PDF graphics of the database layout

- Creating complex queries using query-by-example (QBE)

- Searching globally in a database or a subset of it

- Transforming stored data into any format using a set of predefined functions, like displaying BLOB-data as image or download-link

- Live charts to monitor MySQL server activity like connections, processes, CPU/memory usage, etc.

- Working with different operating systems.

- Make complex SQL queries easier.

##### Installing PHPMyAdmin on a Linux host:

- `sudo apt-get install phpmyadmin`

>Once you've installed PHPMyAdmin you need to proceed with some basic configurations. In order to run PHPMyAdmin under the Apache web server you need to include some lines in /etc/apache2/apache2.conf

- Configuring PHPMyAdmin on an Apache server

`gksudo gedit /etc/apache2/apache2.conf`

- Add the following line of code inside apache2.conf:

`Include /etc/phpmyadmin/apache.conf`

- Restart the Apache web server 

##### Installing PHPMyAdmin on a Windows host:
In windows PHPMyAdmin comes preinstalled with  _WAMP_/_XAMPP_. Both of these are needed to install apache server itself in windows. So you can get -PHPMyAdmin_ as just another service along with MySQL & MariaDB.