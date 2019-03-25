# Interface Segregation Principle
The Interface Segregation Principle states that clients should not be forced to depend on methods that they do not use. In practice, this means that we should write interfaces that will be fully implemented. Rather than having large interfaces that have more functionality than what a class needs, it is preferable to have multiple smaller interfaces. That way if more functionality is needed, the interfaces can be stitched together, or perhaps an interface with more specific functionality can inherit from a more general interface. 

Smaller interfaces are important because they are easier to implement fully, and thus satisfy the Liskov Substitution Principle. This will prevent clutter and unncessary type checking as the scope of the project expands. Smaller interfaces are also more flexible, as smaller parts of a larger whole can be implemented in more unique ways. 

## References
- [DevIQ] (https://deviq.com/interface-segregation-principle/)
