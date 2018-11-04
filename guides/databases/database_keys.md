# Database keys

A key is a collection of attributes (columns) with the ability to distinguish between different database entries (rows). This is most commonly referred to as a **superkey**, and no two entries can have the exact same values across all the attributes of the superkey.

A **candidate key** is a superkey, but without all the extra attributes. This means that if we decided to omit an attribute, we would no longer be able to identify a single entry just by comparing the values in those specific columns.

When creating a database table, we often have to specify which attributes will be used by the database as a unique identifier for our data. These *chosen* attributes are called the **primary key** and belong to one of the candidate keys.

We might also have an attribute in our table which is a primary key in another table. This is called a **foreign key**. Specifying a foreign key constraint (rule) is a good way to make sure that entries from multiple tables are consistent.
