# Prologue

**The Dining Philosophers Problem** is an abstract thought experiment often used in a [concurrent][1] algorithm to illustrate [synchronization][2] issues in computer science. The problem was originally formulated in 1965 by [Edsger Dijkstra][3].

# Problem

#### The Statement

> Five philosophers sit at a round table with bowls of spaghetti. Forks are placed between each pair of adjacent philosophers. Each philosopher must alternately think and eat. However, one can only eat when they have both left and right forks. Each fork can be held by only one philosopher and so a philosopher can use the fork only if it is not being used by another philosopher. After an individual finishes eating, they need to put down both forks so that the forks become available to others. A philosopher can take the fork on their right or the one on their left as they become available, but cannot start eating before getting both forks.

[![Dining Philosophers Problem](https://upload.wikimedia.org/wikipedia/commons/7/7b/An_illustration_of_the_dining_philosophers_problem.png "Dining Philosophers Problem")][4]

The problem is how to design a discipline of behavior such that no philosopher will starve!

#### The Constraints

- Eating is not limited by any space; an infinite supply and an infinite demand are assumed.
- Each one can forever continue to alternate between eating and thinking.
-  No philosopher can know when others may want to eat or think.

# Epilogue

Suppose you construct a proposal like so:-

1. think until the left fork is available; when it is, pick it up;
2. think until the right fork is available; when it is, pick it up;
3. when both forks are held, eat for a fixed amount of time;
4. then, put the right fork down;
5. then, put the left fork down;
6. repeat from the beginning.

Evidently, this attempted solution fails because it allows the system to reach a [deadlock][5] state, in which no progress is possible. You can improve upon it by including a timer but that too suffers from [livelock][6] & [starvation][7]!

#### Solutions

- **Resource Hierarchy Solution**, originally proposed by Dijkstra ([sample code][8]).
- **Chandy/Misra Solution**, proposed by K. Mani Chandy & J. Misra in 1984.

[1]: https://en.wikipedia.org/wiki/Concurrency_(computer_science)
[2]: https://en.wikipedia.org/wiki/Synchronization_(computer_science)
[3]: https://en.wikipedia.org/wiki/Edsger_W._Dijkstra
[4]: https://upload.wikimedia.org/wikipedia/commons/7/7b/An_illustration_of_the_dining_philosophers_problem.png
[5]: https://en.wikipedia.org/wiki/Deadlock
[6]: https://en.wikipedia.org/wiki/Deadlock#Livelock
[7]: https://en.wikipedia.org/wiki/Starvation_(computer_science)
[8]: https://gist.github.com/davidjpfeiffer/2bda83fbba570592e4d46d5e47853d32