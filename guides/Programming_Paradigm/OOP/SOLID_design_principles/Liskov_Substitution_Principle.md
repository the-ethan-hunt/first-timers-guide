# Liskov Substitution Principle
The Liskov Substitution Principle states that subtypes must be substitutable for their base types. This means that when dealing with inheritance, we should look beyond the traditional "IS-A" relationship and try to establish an "IS-SUBSTITUTABLE-FOR" relationship as well. Violations of this principle lead to unnecessary type checking and conditional logic that quickly becomes unmaintainable as the project increases in size. 

A good example of a violation of this principle can be shown by creating a class Rectangle, and another class inheriting from Rectangle called Square. A Square IS-A Rectangle, and we can implement it by setting width equal to height as soon as it is instantiated. This is correct logic, however a Rectangle has the inherant property that width and height are two independant values. So this implementation of Square is NOT "SUBSTITUTABLE-FOR" Rectangle. This becomes an issue if we have a method that takes a rectangle and sets its height and width values to two different numbers. Passing in a square will return two of the same numbers, which is probably not what the user expected. Issues can also arise from only partially implementing an interface, tying Liscov Substitution closely with the Interface Segregation Principle.

## References
- [DevIQ] (https://deviq.com/liskov-substitution-principle/)
