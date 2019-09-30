# Object Oriented Programming

Before we dive into the details of [**Prototypal Inheritance**][1], let us first talk about [Object-Oriented Programming][2] in the context of good old [Classical Inheritance][3]. In class-based OOP, **inheritance** is the mechanism of basing an object or class upon another class retaining the same implementation.

###### What do we mean by 'Class'?

- An extensible program-code-template for creating objects, providing initial values for state (properties) and implementations of behavior (methods).

###### What do we mean by 'Object'?

- A variable, a data structure, a function, or a method as long as it represents a value in memory referenced by an identifier.

In case of **class-based inheritance**, each instance (or object) gets a copy of all the properties & methods during instantiation. The imminent drawback in this inheritance model arises in the form of following:

- tight coupling problem
- fragile base class problem
- inflexible hierarchy problem
- duplication by necessity problem

To sum it up, I would say that a class is like a blueprint of the object to be created. Classes inherit from other classes and create subclass relationships.

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/inheritance-2.png?ssl=1&w=450)


> “The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ [Joe Armstrong][4]

# Prototypal Inheritance

**Prototype-based programming** acts as a paradigm of OOP in which inheritance is performed via a process of reusing existing objects via [delegation][5] that serve as **prototypes**. Some of the languages that support prototypal inheritance:

- JavaScript
- Lua
- Cecil
- NewtonScript

> In Prototypal Inheritance, Objects Inherit from Objects!

In [JavaScript][6], Prototypal Inheritance & Functional Programming are considered as its [two-pillars][7]! JavaScript supports prototypal inheritance in 3 ways:

- **Concatenative inheritance**: The process of inheriting features directly from one object to another by copying the source objects properties i.e. [composition][8]. Concatenative inheritance is the secret sauce that enables object composition in JavaScript, which makes both prototype delegation and functional inheritance a lot more interesting.

- **Prototype delegation**: An object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype. This method tends to mimic class-based inheritance by declaring initial state with a [constructor][9] function that needs to be instantiated with a `new` operator much like in classical OOP.

- **Functional inheritance**: Any function other than a constructor (or class) can create an object & it’s called a factory function. These functions are generally used in [module pattern][10] in the form of [IIFE][11] that encloses private properties of an object with the help of [closure][12].

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/07/prototypal_delegation.png?ssl=1&w=450)


> Prototypal Inheritance is a completely different approach towards OOP which resolves the brittle classical inheritance taxonomies, and parent-child coupling. Still, in many developer communities it is being applied to mimic class-based inheritance in a more subtle & flexible way!

### Classical Inheritance vs Prototypal Inheritance

In Prototypal Inheritance, instances may be composed from many different source objects, allowing for easy selective inheritance delegation hierarchy. In other words, class taxonomies are not an automatic side-effect of prototypal OOP whereas classical inheritance creates parent/child object taxonomies as a side-effect; which serves as a critical distinction!

Many Developers consider Prototypal Inheritance to be a superset of Classical Inheritance & as a more pragmatic way of modelling objects!

------------

[1]: https://en.wikipedia.org/wiki/Prototype-based_programming
[2]: https://en.wikipedia.org/wiki/Object-oriented_programming
[3]: https://en.wikipedia.org/wiki/Class-based_programming
[4]: https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)
[5]: https://en.wikipedia.org/wiki/Delegation_(object-oriented_programming)
[6]: https://en.wikipedia.org/wiki/JavaScript
[7]: https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
[8]: https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6
[9]: https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)
[10]: https://en.wikipedia.org/wiki/Module_pattern
[11]: https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
[12]: https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
