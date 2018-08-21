## OVERVIEW:

Parallel computing is the process in which execution of a number of computational processes are carried out simultaneously.Large problems are divided into small problems and further are executed simultaneously. 

### DIFFERENCE BETWEEN PARALLEL AND SERIAL COMPUTING:
In Serial computing a single task is completed one at a time and all other tasks are run by the processor in a sequence,a problem is broken into a discrete set of instructions which are executed one after the other.
Any operating system running on the single processor is an example of the In serial operating system, an operating system runs on a single processor and completes one task at a given time. For e.g Pentium 3 and Pentium 4.
In parallel computing we make use of multiple resources in order to solve a computational problem. In parallel computing a problem is broken into discrete parts that can be solved simultaneously, these parts are further broken down into series of instructions and instructions from different parts are executed simultaneously on different CPUs.For e.g. MATLAB.
### DIFFERENT FORMS OF PARALLEL COMPUTING:
There are several different forms of parallel computing: bit-level, instruction-level, data, and task parallelism.
- Bit-level parallelism involves dividing the bits of the processed task to be processed by different processors.
- Instruction-level parallelism is done mainly on hardware level and it includes any architecture that does more than one instruction in single CPU.
- Data parallelism involves execution of multiple data units, or an array in the same time by applying the same operation to them. 
- Task parallelism comes into play when the tasks are divided among the processors to be processed simultaneously. Dot net framework example of task parallelism is the thread

[RESOURCES ON PARALLEL COMPUTING](http://web.eecs.umich.edu/~qstout/parlinks.html)
