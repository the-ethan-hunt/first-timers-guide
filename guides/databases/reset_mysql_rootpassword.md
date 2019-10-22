Reset a MySQL root password

This guide requires you to have ssh access to the MySQL Server

1. Stop MySQL Service

# Reset a MySQL root password

This guide requires you to have ssh access to the MySQL Server and sudo or root rights

# ssh into the server and logon as root

```
> ssh user@yourserver.com
> sudo -i
```

## Stop the MySQL Service

```
> systemctl stop mysqld.service
```

## Launch MySQLD without password

```
> mysqld_safe --skip-grant-tables &
```

## Connect to MySQLD as user root

```
> mysql -uroot
```

## Set a new MySQL root password

```
> USE MYSQL;
> UPDATE USER SET AUTHENTICATION_STRING=PASSWORD("fancynewpwd123") WHERE USER='ROOT'
```

## Relaunch the MySQL Server

```
> systemctl stop mysqld.service
> systemctl start mysqld.service
```
