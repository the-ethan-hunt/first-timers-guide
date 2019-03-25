# Open/Closed Principle
The Open/Closed Principle states that software entities should be open for extension, but closed for modification. Software entities include classes, methods, etc. In practice, this principle suggests that we write entities whose behavior can be changed without changing its internal structure. A good real world analogy to this is that a person doesn't need brain surgery to put on a hat.

In the same way, a method shouldn't have values hard-coded into its structure. If the values change, then the method would have to be "opened up" and changed as well. However, if we pass in the values as parameters, the method can stay the same, but it's behavior can be changed given different parameter values. To go back to the hat analogy, if a person needs a new hat, they just get a new hat, not a new head. This ultimately results in lower coupling for our entities, as well as improving encapsulation. 

## References
- [DevIQ] (https://deviq.com/open-closed-principle/)
