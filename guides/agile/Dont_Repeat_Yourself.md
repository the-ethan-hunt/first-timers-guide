# DRY

[**Don't Repeat Yourself**][1] (DRY) is a principle of software development aimed at reducing repetition of software patterns; it states that **duplication in logic** should be eliminated via abstraction & **duplication in a process** should be eliminated via automation.

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system".

-- [The Pragmatic Programmer][2], a book by **Andy Hunt** and **Dave Thomas**

###### WET

- Violations of **DRY** are typically referred to as **WET** solutions, which is commonly taken to stand for either `write everything twice`, `we enjoy typing` or `waste everyone's time`.

## How To Achieve DRYness!

While building a large software project, we often are overwhelmed by the overall complexity. A basic strategy for reducing such complexity is to divide both the **logic** & **process** into parts that are simpler. Any complex system can be broken down into components, where each component may represent its own subsystem that adheres to some specific functionality!

> When you find yourself writing code that is similar or equal to something you've written before, take a moment to think about what you're doing and **don't repeat yourself**!

In a nut-shell, if you have the same code in more than one place, you need to extract this into a single location, as adding additional, unnecessary code to a codebase increases the amount of work required to maintain and extend the software in the future.

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/08/dry.png?ssl=1&w=450)

Duplicate code adds to technical debt! Whether the duplication arises from poor understanding of how to apply abstraction or due to spaghetti code, it eventually decreases the quality of the code. Duplication in a process can also be automated by eliminating manual testing, manual build, integration processes, etc. whenever possible through the use of automation!

------------

[1]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[2]: https://en.wikipedia.org/wiki/The_Pragmatic_Programmer