## What is MVC?

[**MVC**][1] is an architectural pattern commonly used for developing user interfaces that divides an application into three components viz **Model**, **View** & **Controller**.

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/07/mvc.png?ssl=1&w=450)

- **Model** represents business logic & maintains the data of the application.
- **View** displays the application’s user interface using the model data.
- **Controller** handles the user request & renders the appropriate view with the model data as a response.

## So... What MVC really is!

Let us consider implementing MVC in Game Development. So, how about designing a game where 2 players fight in a combat where each one has a **Strike** & a **Life** bar. Now, if one player attacks, then the opponent's **Life** decrements by 1 unit. When **Life** equals 0, the player dies! The question is how do we develop this simple game with MVC paradigm.

Now, almost every game has three basic elements - 
- **State** (Model?)
- **Interface** (View?)
- **Gameplay** (Controller?)

It seems intuitive enough that for each iteration of the game a state must be preserved. Also, when we talk about the state it means a data-model. Gameplay enables specific ways in which players interact with a game & that can be addressed by a controller object which updates the interface for every state as present in the model. By the way, the game view takes care of the visual interface.

Let us consider, **Model** holds an initial state in which both players' **Strike** & **Life** counts are equal to 0 & 10 respectively!
- 1st Iteration: Player1 strikes Player2, now **Controller** uses the **Model** object to alter the state of the game in which Player1 has **Strike** count 1 & Player2 has **Life** count 9! Ultimately **View** updates the UI with this newly generated data from the **Model** with the help of **Controller**.
- 2nd Iteration: ...
- 3rd Iteration: ...
.
.
.
And the game ends with having **Controller** either reset the game or exit it depending on user request. (**SPOILER**: PLayer2 Wins!)

This was nothing but a trivial example as for how to implement MVC architecture into an application!

## But... Why MVC?

The fundamental reason for adopting MVC principles into a development workflow is to have **seperation of concerns**. Well, during traditional approach of programming, the code was written into a single file which creates lack of maintainability, testability as well as scalability of the application. With MVC, you create applications that separate the different aspects of the application while providing a loose coupling between these elements.

###### Pros

MVC encourages simultaneous development  from  multiple developers because of the separation of responsibilities which in turn increases the scalability of the product. The very nature of the MVC architecture is such that there is low coupling among models, views or controllers.

###### Cons

MVC design navigation can be complex because it introduces new layers of abstraction. So, decomposing a feature into three components causes scattering. Thus, requiring developers to maintain the consistency of multiple representations at once!

[1]: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
