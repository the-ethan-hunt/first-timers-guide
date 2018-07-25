## What is Amdahl's law?
In advanced computer architechture,Amdahl’s law is a formula used to determine the maximum improvement possible by improving a particular part of a system. It is named after Gene Amdahl, a computer architect from IBM and the Amdahl Corporation.

Let's take a real life example to get a clear understanding of the law:
- Suppose there are three friends A,B and C.
All of them enter the school altogether so daily three of them reach outside school gate and then further enter school together.A goes to school by bike,B makes use of bicycle in order to reach school and C comes by foot.In this situation A and B takes much lesser time as compared to C,Hence no matter how fast A and B reach school gate they both need to wait for C in order to enter the school together.This means that in order to accelerate the overall process, you need to concentrate on improving the performance of C much more than the other two. As C takes much more time compared to other two reaching the same destination.

Amdahl's law is mainly used in parallel computing to predict the theoretical speedup when multiple processors are used.
Parallel computing is a sort of computation in which execution of more than one processes are carried out simultaneously. Different forms of parallel computing: bit-level, instruction-level, data, and task parallelism. 
Amdahl's law can be written as:

S<sub>latency</sub> (s)= 1/((1-p)+(p/s))

- S<sub>latency</sub> is the measure of theoretical speedup of the execution of the whole task.
- s is the speedup of the part of the task that gets benifited from improved system resources.
- p is the proportion of execution time that the part benifiting from improved resources originally occupied.

[MORE ABOUT AMDAHL'S LAW](http://tutorials.jenkov.com/java-concurrency/amdahls-law.html)
