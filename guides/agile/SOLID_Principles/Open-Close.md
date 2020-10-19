# Open/Closed Principle

The open closed principle states that a piece of software is open for extension but closed for modification.

It's easy to see how extending a class with more functionality comes with little risk, as there is no pre-existing code that it's in use by there is nothing that could break.

Any code that is used and working as expected if modified could lead to unknown errors in what was working code and if the project is a library any third party using the library could be faced with issues.
