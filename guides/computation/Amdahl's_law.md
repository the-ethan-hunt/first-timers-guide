## What is Amdahl's law?
In advanced computer architecture, Amdahl’s law is a formula used to determine the maximum improvement possible by improving a particular part of a system.
Amdahl's law is a law which administers the speedup of using parallel processors on a problem in comparision with using only one serial processor.

Let's take a real life example to get a clear understanding of the law:
- Suppose there are three friends A, B, and C who go to the same school.
All three decide to meet at the school gate every day before entering the school together. Friend A goes to school by bike, B makes use of bicycle in order to reach school, and C goes by foot. In this situation A and B take much less time compared to C. Hence no matter how fast A and B reach the school gate they both need to wait for C in order to enter the school together. This means that in order to accelerate the overall process, you need to concentrate on improving the performance of C much more than the other two, as C takes much more time compared to the other two to reach the same destination.

Amdahl's law is mainly used in parallel computing to predict the theoretical speedup when multiple processors are used.. Different forms of parallel computing: bit-level, instruction-level, data, and task parallelism. 
Amdahl's law can be written as:

S<sub>latency</sub> (s)= 1/((1-p)+(p/s))

- S<sub>latency</sub> is the measure of maximum possible improvement in theoretical speedup of the execution of the whole task.
- s is the speedup of the part of the task that gets benifited from improved system resources.
- p is the proportion of execution time that the part benifiting from improved resources originally occupied.

If N tends to infinity then the maximum speedup tends to 1/(1-P).

[MORE ABOUT AMDAHL'S LAW](http://tutorials.jenkov.com/java-concurrency/amdahls-law.html)
