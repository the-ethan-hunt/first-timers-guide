# Dining Philosopher's Problem.

In computer science, the **dining philosophers problem** is an example problem often used in concurrent algorithm design to illustrate synchronization issues and techniques for resolving them.

It was originally formulated in 1965 by Edsger Dijkstra as a student exam exercise, presented in terms of computers competing for access to tape drive peripherals. Soon after, Tony Hoare gave the problem its present formulation.

Consider 5 philosophers who spend their lives thinking and eating. The philosophers share a circular table surrounded by five chairs, each belonging to a philosopher. In the center of the table is a bowl of noodles, and the table is laid with five single chopsticks (as in the figure below). When a philosopher thinks, he does not interact with her colleagues. From time to time, a philosopher gets hungry and tries to pick up the two chopsticks that are closest to her (the chopsticks that are between her and her left and right neighbors). A philosopher may pick up only one chopstick at a time. Obviously, she cannot pick up a chopstick that is already in the hand of a neighbor. When a hungry philosopher has both her chopsticks at the same time, she eats without releasing the chopsticks. When she is finished eating, she puts down both chopsticks and starts thinking again.

![img](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/dining_philosopher_problem.png)

This problem is a simple representation of the need to allocate several resources among several processes in a deadlock-free and starvation-free manner.



