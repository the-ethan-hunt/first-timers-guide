# Single Responsibility Principle
The Single Responsibility Principle states that a class should only have one reason to change. In other words, each class should do one thing. While this may seem trivial for small tasks, adhering to this principle preserves modularity as projects increase in size and scope.

This principle was originally described by Robert C. Martin in "Principles, Patterns, and Practices of Agile Software Development". Martin wrote that we should defined the responsibility of a class as a "reason for change". If there are multiple reasons that a class should change, it has multiple responsibilities, and thus more dependencies and more "overlapping" among classes. If there is high overlap, then classes that depend on the changed class could break as a result and will need to be reexamined, increasing overhead. This notion of minimal overlap is called "low coupling". The lower the coupling between classes, the less dependencies, and the more modular the code. This is essential to agile development, as we should design around the asssumption the change will occur.

## References
- [DevIQ] (https://deviq.com/single-responsibility-principle/)
