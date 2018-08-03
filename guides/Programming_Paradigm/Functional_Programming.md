# Introduction

[**Functional Programming**][1] is a programming paradigm vis-à-vis a style of building software by composing **pure functions**; avoiding **shared state**, **mutable data**, and **side-effects**! This particular paradigm is **declarative** rather than **imperative** i.e. *what to do, rather than how to do it*. So, it basically emphasizes the evaluation of expressions rather than the execution of commands as in the case of **procedural programming**!

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/paradigm_evolution.png?ssl=1&w=450)

> Functional programming is based on lambda calculus, developed in the 1930s to investigate computability

## Few Terminologies...

Before talking about principles & advantages of functional programming, let us first understand a few basic concepts:

#### Side Effects

A **side effect** can be considered as any change of state outside the called function other than its return value. Side effects include:

- modifying any external variable or object property
- logging to the console
- writing to the screen
- writing to a file
- triggering any external process

Functional programming try to avoid side effects with the help of **pure functions** which in turn makes refactoring, debugging & testing much simpler!

#### Shared State

A shared state is defined as any variable, object, or memory space that exists in a shared scope or as the property of an object being passed between both the closure as well as the global scopes. In [OOP][2], objects are often shared between scopes by adding properties to other objects. By avoiding shared state we can remove function call timing dependency viz. the timing and order of function calls don’t change the result of calling the function.

> This is the reason that most front-end frameworks encourage users to manage state and component rendering in separate, loosely coupled modules.

And yes, functional programming tends to avoid shared state!

**[NOTE: Enough about <span style="color:red">avoiding</span> stuff, let's see what functional programming has to <span style="color:green">offer!</span>]**

# Characteristics

###### Here's a brief discussion regarding some of the useful characteristics of functional programming --

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/characteristics.png?ssl=1&w=450)

#### [First-Class Function][3]

**First-class functions** are treated like [first-class citizens][4] viz. like any other value these functions can be assigned as a value to a variable, can be passed as an argument to other functions and can be returned by another function.

#### [Higher-Order Function][5]

**Higher-order functions** take the first-class function as an argument, returns a function, or both. Higher-order functions are often used to abstract actions, effects, or asynchronous flow control using callback functions, promises or monads; these functions also help in creating utilities like [closure][6], [currying][7], etc.

#### [Pure Function][8]

**Pure functions** have lots of properties that are important in functional programming, including [referential transparency][9] viz. we can replace a function call with its resulting value without changing the meaning of the program. So, a pure function is a function which always returns the same output when given the same inputs & has no side-effects.

#### [Immutable Data][10]

**Immutable data** is an object whose state cannot be modified after it is created which is a great thing for multi-threaded applications. Functional programming provides special immutable data structures called '[Trie][11]' which are effectively deep frozen  meaning that no property can change!

#### [Recursion][12]

**Recursion** is the functional approach and acts as a replacement for looping. It’s not like we can’t use loops, it’s just that there are no specific loop constructs like for, while, do, repeat, etc. Recursion is a technique in which a function calls itself in order to mimic a traditional **for** or **while** loop!

------------

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/nutshell.jpeg?ssl=1&w=450) ...In a nutshell

------------

#### Now, what functional programming really is!

**Functional Programming** is a way of writing code that tends to avoid changing-state & mutable data by treating computation as the evaluation of functions or expressions! In functional code, the output value of any function depends only on the arguments that are passed to the function. Therefore, if we call a function `f` twice with the same value for argument `x`, then `f(x)` produces the same result each time. This is the simple notion of pure functions which act as the foundation for this paradigm! So, in case of the first-class function, we'll consider `x` as an argument for function `g` which in turn is an argument for function `f` i.e. `f(g(x))` (higher order).

These functions are easily composable & serve as an elegant approach to design software. Since functional programming is without side effects, it's an intuitive way to design a program that needs multithreading, asynchronicity, and scalability.

> "Functional Programming has many different definitions. A Lisp programmer's definition is vastly different from a Haskell perspective. OCaml's FP bears little resemblance to the paradigm seen in Erlang. You will even find several competing definitions in JavaScript. Yet there is a tie that binds -- some blurry know-it-when-I-see-it definition, much like obscenity"

------ [Brian Lonsdorf][13], one of the greatest functional evangelist

------------

[1]: https://en.wikipedia.org/wiki/Functional_programming
[2]: https://en.wikipedia.org/wiki/Object-oriented_programming
[3]: https://en.wikipedia.org/wiki/First-class_function
[4]: https://en.wikipedia.org/wiki/First-class_citizen
[5]: https://en.wikipedia.org/wiki/Higher-order_function
[6]: https://en.wikipedia.org/wiki/Closure_(computer_programming)
[7]: https://en.wikipedia.org/wiki/Currying
[8]: https://en.wikipedia.org/wiki/Pure_function
[9]: https://en.wikipedia.org/wiki/Referential_transparency
[10]: https://en.wikipedia.org/wiki/Immutable_object
[11]: https://en.wikipedia.org/wiki/Trie
[12]: https://en.wikipedia.org/wiki/Recursion_(computer_science)
[13]: https://twitter.com/drboolean?lang=en
