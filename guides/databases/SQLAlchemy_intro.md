# SQLAlchemy introduction 

If you are working with Python and need database integration in your project, SQLAlchemy is a widely used and trusted tool for doing so. SQLAlchemy is a Python SQL toolkit which basically provides SQL functionality in **pythonic** code. 
You could always say why not write raw SQL queries as Python strings and work with those? Well, there are certain disadvantages to that approach. SQL queries with python strings could get really messy and that too, really quickly. 
SQLAlchemy has several advantages over this approach. It makes the code cleaner and more secure. Most importantly,
you can think of database structure in terms of objects and their attributes instead of the traditional columns and tables. 
With this, we can introduce the term ORM. SQLAlchemy is an ORM, namely an **Object Relational Mapper**. This means that this toolkit transfers *low level database logic* ( columns and tables ) into *higher level entities such as objects* which are more compliant with object oriented programming languages like Python or Java. 
This way when you get back a query result, you need not worry about working with columns or rows in the traditional way. Rather, that can be returned as a query *object* which will have certain properties and functions of its own like a normal object, which can be used to work with the query result in a manner we are much more familiar with. 
SQLAlchemy can be thought of as being made up of two major components: SQLAlchemy Core and ORM. The ORM is built on the core. However, you have the flexibility to use each of these as your application requires and according to the level of abstraction you prefer to have. 
A very simple example would be:
A raw SQL statement would look something like this: 
``` INSERT INTO students (name, ID, date_of_birth) VALUES ("Peter", 32, "20/1/2000") ``` 

whereas using SQLAlchemy it would look something like this: 
``` students.insert().values(name="Peter", ID=32, date_of_birth="20/1/2000")```   

We can clearly observe that the second statement looks a lot more like what we are familiar with and this is only the very basic level in which this can be used. There are several other features and advantages which one can use. 
